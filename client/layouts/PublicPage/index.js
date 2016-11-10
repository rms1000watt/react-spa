import React from 'react';
import PublicHeader from '../../components/PublicHeader/';
import PublicFooter from '../../components/PublicFooter/';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';


class PublicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="public-page-container">
        <PublicHeader/>
        <Grid>
          <Row>
            <Col md={12} sm={12}>
              {this.props.children}
            </Col>           
          </Row>
        </Grid>
        <PublicFooter/>
      </div>
    );
  }
}

export default PublicPage;
