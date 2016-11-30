import Auth0Lock from "auth0-lock";
import { browserHistory } from 'react-router';

var authenticated = false;

const AUTH0_DOMAIN = "rms1000watt.auth0.com"
const AUTH0_CLIENT_ID = "vLmIqUUbsOvkknKqwOeXJq7QMLvntLlI"

export const PORT = 8111;
export const BASE_URL = 'http://'+ location.hostname + ':' + PORT;
export const EMAIL_REGEX = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

export const PRICING_DATA = [
  {
    price: 49,
    planName: "Bronze",
    features: [
      "Bronze feature here",
      "Other Bronze stuff",
      "Oh wow its Bronze",
      "Even more features",
      "Even more features",
    ],
  },
  {
    price: 99,
    planName: "Silver",
    features: [
      "Silver good feature",
      "Silver awesome feature",
      "Feature for silver",
      "Even more features",
      "Even more features",
    ],
  },
  {
    price: 199,
    planName: "Gold",
    features: [
      "Gold best features",
      "Features for Gold",
      "Gold features here",
      "Featues for Gold is best",
      "Another row?!"
    ],
  },
]


const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});
lock.on("authenticated", handleAuthenticated)

function handleAuthenticated(res) {
    setAuth0Token(res.idToken)
    browserHistory.push("/dashboard")
}

function setAuth0Token(token) {
    localStorage.setItem('id_token', token)
}

function getAuth0Token() {
    return localStorage.getItem('id_token')
}

function logout(){
    localStorage.removeItem('id_token');
    browserHistory.push("/")
}

export function showLock() {
    lock.show()
}

export function isLoggedIn() {
    return getAuth0Token() != null
}

export function getErrorMessage(errorCode) {
    let errorText = errorCode == 'BAD_PAYLOAD'			    ? 	'Bad data sent to server' 					:
                    errorCode == 'BAD_LOGIN_DATA'		    ? 	'Email address or password is incorrect'	:
                    errorCode == 'BAD_EMAIL_PROVIDED'		?	'Please enter a proper email address'		:
                    errorCode == 'INTERNAL_ERROR'		    ? 	'Internal error. Please try again'			:
                    errorCode == 'USER_EXISTS'				?	'User already exists with this email'		:
                    errorCode == 'NOT_CONNECT_TO_SERVER'	? 	'Cannot connect to server'					:
										                        ''                  						;
    return errorText;
}

export function isHomePath() {
    return window.location.pathname == "/"
}

export function ajax(method, url, payload, successCB, errorCB) {
    var request = new Request(url, {
        method: method, 
        mode: 'cors', 
        redirect: 'follow',
        credentials: 'include', 
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    });

    fetch(request)
    .then((response)=>{return response.json()})
    .then(successCB)
    .catch(errorCB)
}

function getCookie(name)  {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
}
