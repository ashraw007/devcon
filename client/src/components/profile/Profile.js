import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;

    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <>
          <div className="mb-4">

            <Link
              to="/profiles"
              className="btn btn-outline-light back-profile-btn"
            >
              ← Back to Developers
            </Link>

          </div>

          <ProfileHeader profile={profile} />

          <div className="mt-4">
            <ProfileAbout profile={profile} />
          </div>

          <div className="mt-4">
            <ProfileCreds
              education={profile.education}
              experience={profile.experience}
            />
          </div>

          {profile.githubusername && (
            <div className="mt-4">
              <ProfileGithub
                username={profile.githubusername}
              />
            </div>
          )}
        </>
      );
    }

    return (
      <div className="profile-page">
        <div className="container py-5">

          <div className="text-center mb-5">

            <h1 className="display-4 text-white fw-bold">
              Developer Profile
            </h1>

            <p className="lead text-light">
              Explore developer experience, education and projects.
            </p>

          </div>

          {profileContent}

        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);