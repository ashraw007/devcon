import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import DevCon_logo from "../../img/devcon_logo.png";
import Spinner from "../common/Spinner";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      loader: false
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
        loading: false
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, loading } = this.state;

    return (
      <div className="register-page">
        <div className="register-card">
          <div className="text-center mb-4">
            <img
              src={DevCon_logo}
              alt="DevCon Logo"
              className="register-logo"
            />

            <h1 className="display-5 text-white fw-bold">
              Log In
            </h1>

            <p className="text-white mb-0">
              Welcome back to DevCon
            </p>
          </div>

          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />

            <TextFieldGroup
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              showPasswordToggle
            />

            <button
              type="submit"
              className="btn submit-btn w-100 mt-3"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Login →"}
            </button>
          </form>
        </div>

        {loading && (
          <div className="loader-overlay">
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

Login.prototypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
