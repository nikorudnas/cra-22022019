import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  linkStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
  },
};

export class Navbar extends React.Component {
  navigate = link => {
    const { history } = this.props;
    history.push(link);
  };

  render() {
    return (
      <div className="Container_Navbar" key={0}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <span
              style={styles.linkStyle}
              onClick={() => this.navigate('/')}
              onKeyPress={() => this.navigate('/')}
              role="link"
              tabIndex="0"
            >
              Frontpage
            </span>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Navbar);
