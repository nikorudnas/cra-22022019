import React from 'react';

export class About extends React.Component {
  state = {
    message: 'About',
  };

  render() {
    const { message } = this.state;
    return <div className="Container_About">{message}</div>;
  }
}

export default About;
