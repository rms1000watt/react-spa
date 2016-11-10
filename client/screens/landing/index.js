import React from 'react';
import Hero from '../../components/Hero/';
import PublicPage from '../../layouts/PublicPage/';
import {Button} from 'react-bootstrap';


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  buttonHandler = () => {
    console.log("BUTTON CLICKED")
  }

  genButton = () => {
    return (
      <Button onTouchTap={this.buttonHandler}>Signup for Free</Button>
    )
  }

  render() {
    return (
      <div className="landing-container">
        <PublicPage>

          <Hero 
            mainText="BLAH BLAH BLAH BLAH BLAH BLAH" 
            subText="Lorem ipsum ponderum assentior dolor sit amet, illum ponderum assentior ne mei." 
            img="/assets/images/static-hero.png"
            primaryButton={this.genButton()}/>

          

        </PublicPage>
      </div>
    );
  }
}

export default Landing;
