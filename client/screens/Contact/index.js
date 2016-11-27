import React from 'react';
import PublicPage from '../../layouts/PublicPage/';
import FaFacebook from 'react-icons/lib/fa/facebook.js';
import FaTwitter from 'react-icons/lib/fa/twitter.js';
import FaYoutube from 'react-icons/lib/fa/youtube.js';
import {
  Row,
  Col,
  FieldGroup,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Panel
  } from 'react-bootstrap';
import { 
  Map, 
  Marker, 
  Popup, 
  LeafletMap,
  TileLayer 
} from 'react-leaflet';

const position = [33.6405, -117.8443];

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact-screen-container">
        <PublicPage title="Contact" cta={false}>
          
          <Row className="map-row">
            <Col>
              <Map center={position} zoom={11}>
                <TileLayer
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}/>
              </Map>
            </Col>
          </Row>

          <Row className="contact-row">
            <Col xs={12} sm={7} className="contact-col">
              <h4>Send us a message</h4>
              <p>
                Contact us with anything related to React SPA.<br/>
                We{"'"}ll get back to you ASAP!
              </p>
              <div className="contact-form">
                <FormGroup controlId="contactEmail">
                  <ControlLabel>Email Address</ControlLabel>
                  <FormControl type="email"/>
                </FormGroup>
                <FormGroup controlId="contactMessage">
                  <ControlLabel>Message</ControlLabel>
                  <FormControl componentClass="textarea" rows={6}/>
                </FormGroup>
                <Button bsStyle="warning">Submit</Button>
              </div>
            </Col>
            <Col xs={12} sm={5} className="contact-col">
              <h5>Address</h5>
              <p>
                University of California, Irvine<br/>
                260 Aldrich Hall<br/>
                Irvine, CA 92697-1075
              </p>
              <h5>Phone</h5>
              <p>
                (555) 555-5555
              </p>
              <div className="support">
              <b>Online support coming<br/>
                soon!</b>
              </div>
              <div className="contact-icons">
                <a href="http://www.facebook.com"><FaFacebook viewBox="0 0 50 75" style={{width:50, height:50}}/></a>
                <a href="http://www.twitter.com"><FaTwitter viewBox="0 0 50 75" style={{width:50, height:50}}/></a>
                <a href="http://www.youtube.com"><FaYoutube viewBox="0 0 50 75" style={{width:50, height:50}}/></a>
              </div>
            </Col>
          </Row>


        </PublicPage>
      </div>
    );
  }
}

export default Contact;
