import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import GJULogo from '../../img/GJU.png'

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
                <img className="display-4 mt-4"  style={{width: '250px'}} src={GJULogo}  alt="LOGO" />
                <h1 className="display-6 mt-4">Guru Jambheshwar University of Science and Technology</h1>
                <p className="lead mt-4">
                  {" "}
                  A platform where GJU developers connect and share
                </p>
                <hr />
                <div className="d-grid gap-2 col-6 mx-auto mt-4">
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
