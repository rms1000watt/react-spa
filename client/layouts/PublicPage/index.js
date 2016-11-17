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
        <Grid className="content" fluid={true}>
          <Row>
            <Col xsHidden smHidden md={1} lg={1}/>
            <Col xs={12} sm={12} md={10} lg={10}>
              {this.props.children}
            </Col>
            <Col xsHidden smHidden md={1} lg={1}/>
          </Row>
        </Grid>
        <PublicFooter/>
      </div>
    );
  }
}

export default PublicPage;
