import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import DevConLogo from '../../img/devcon_logo.png'

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing ">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-mt-12 text-center">
                <img className="display-4 mt-4" style={{ width: '250px' }} src={DevConLogo} alt="LOGO" />
                <div className="status-container">
                  <h4 className="system-status">
                    <span className="status-dot"></span>
                    System Status: Operational
                  </h4>
                </div>
                <h1 className="display-4 mt-4 fw-bold">
                  Connect. <span className="highlight-code">Code.</span> Collaborate.
                </h1>
                <p className="lead mt-4">
                  {" "}
                  The premier network for modern developers to share insights and build together.
                </p>
                <hr />
                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                  <div className="auth-buttons">
                    <Link to="/register" className="signup-btn">
                      Sign Up <span>→</span>
                    </Link>

                    <Link to="/login" className="login-btn">
                      <span>↪</span> Log In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
