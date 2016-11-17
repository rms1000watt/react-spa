import React from 'react';
import PublicPage from '../../layouts/PublicPage/';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact-container">
        <PublicPage>
          Contact
        </PublicPage>
      </div>
    );
  }
}

export default Contact;
