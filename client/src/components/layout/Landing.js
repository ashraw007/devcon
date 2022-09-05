import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import GJULogo from '../../img/GJU.png'
import DC from "../../img/DC.png"

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img className="display-4 mt-12" style={{ width: '350px', marginTop: '-10px'}} src={GJULogo}  alt="LOGO" />
                <h1 className="display-6 mb-4">Guru Jambheswar University of Science and Technology</h1>
                <img style={{width: '150px'}} src={DC} alt="LOGO"/>
                <p className="lead">
                  {" "}
                  A platform where GJU developers connect and share
                </p>
                <hr />
                <div className="d-grid gap-2 col-6 mx-auto">
                <Link to="/register" className="btn btn-lg btn-info btn-block mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-success btn-lg  btn-block">
                  Login
                </Link>
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
