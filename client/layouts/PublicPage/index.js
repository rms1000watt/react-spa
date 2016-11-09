import React from 'react';
import PublicHeader from '../../components/PublicHeader/';
import PublicFooter from '../../components/PublicFooter/';


class PublicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="public-page-container">
        <PublicHeader/>
        {this.props.children}
        <PublicFooter/>
      </div>
    );
  }
}

export default PublicPage;
