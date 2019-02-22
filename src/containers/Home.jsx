import React from 'react';

export class Home extends React.Component {
  state = {
    message: 'Home',
  };

  render() {
    const { message } = this.state;
    return <div className="Container_Home">{message}</div>;
  }
}

export default Home;
