import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="features-screen-container">
        <PublicPage title="Features">
          <div className="features-screen-contents">
            <Row>
              <Col xs={12} sm={6}>
                <h4>The Best SPA Capabilities</h4>
                <p>The SPA with best organization: Assets, Components, Layouts, Screens, globals</p>
              </Col>
            </Row>
          </div>
        </PublicPage>
      </div>
    );
  }
}

export default Features;
