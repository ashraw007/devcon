import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import DevCon_logo from "../../img/devcon_logo.png";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      loading: false,
      showPassword: false,
      showConfirmPassword: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors, loading: false });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  togglePassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

  toggleConfirmPassword = () => {
    this.setState(prevState => ({
      showConfirmPassword: !prevState.showConfirmPassword
    }));
  };

  render() {
    const { errors } = this.state;

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
              Sign Up
            </h1>

            <p className="text-white mb-0">
              Create your DevCon account
            </p>
          </div>

          <form noValidate onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />

            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              info="Use a Gravatar email"
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

            <TextFieldGroup
              placeholder="Confirm Password"
              name="password2"
              type="password"
              value={this.state.password2}
              onChange={this.onChange}
              error={errors.password2}
              showPasswordToggle
            />

            <button
              type="submit"
              className="btn submit-btn w-100 mt-3"
              disabled={this.state.loading}
            >
              {this.state.loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Creating Account...
                </>
              ) : (
                "Create Account →"
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
