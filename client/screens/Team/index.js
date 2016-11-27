import React from 'react';
import PublicPage from '../../layouts/PublicPage/';
import {
  Row,
  Col
  } from 'react-bootstrap';


class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-screen-container">
        <PublicPage title="Team" cta={false}>
          <h4>Our Awesome Team!</h4>
          <p>Our team of elite tech and business experts get the job done, on time, while having fun!</p>
          <div className="members">
            <a href="http://www.github.com/borg"> 
              <div className="member">
                <img src="/assets/images/identicons/1.png"/>
                <h5>Borg</h5>
              </div>
            </a>
            <a href="http://www.github.com/omega">
              <div className="member">
                <img src="/assets/images/identicons/2.png"/>
                <h5>Omega</h5>
              </div>
            </a>
            <a href="http://www.github.com/kubernetes">
              <div className="member">
                <img src="/assets/images/identicons/3.png"/>
                <h5>Kubernetes</h5>
              </div>
            </a>
            <a href="http://www.github.com/pascal">
              <div className="member">
                <img src="/assets/images/identicons/4.png"/>
                <h5>Pascal</h5>
              </div>
            </a>
            <a href="http://www.github.com/grainger">
              <div className="member">
                <img src="/assets/images/identicons/5.png"/>
                <h5>Grainger</h5>
              </div>
            </a>
            <a href="http://www.github.com/gorgoroth">
              <div className="member">
                <img src="/assets/images/identicons/6.png"/>
                <h5>Gorgoroth</h5>
              </div>
            </a>
            <a href="http://www.github.com/griswald">
              <div className="member">
                <img src="/assets/images/identicons/7.png"/>
                <h5>Griswald</h5>
              </div>
            </a>
            <a href="http://www.github.com/tom">
              <div className="member">
                <img src="/assets/images/identicons/8.png"/>
                <h5>Tom</h5>
              </div>
            </a>
          </div>
        </PublicPage>
      </div>
    );
  }
}

export default Team;
