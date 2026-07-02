import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";
import { Link } from "react-router-dom";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = (
          <div className="text-center py-5">

            <div className="mb-4" style={{ fontSize: "70px" }}>
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </div>

            <h2 className="text-white fw-bold">
              No Developer Profiles Yet
            </h2>

            <p
              className="mx-auto mt-3"
              style={{
                maxWidth: "550px",
                color: "#b7c3d0"
              }}
            >
              The DevCon community is waiting for its first developers.
              Create your profile and start connecting with others.
            </p>

            <Link
              to="/create-profile"
              className="btn submit-btn mt-4 px-5"
            >
              Create Profile
            </Link>

          </div>
        );
      }
    }

    return (
      <div className="profiles py-5">
        <div className="container">

          <div className="text-center mb-5">

            <h1 className="display-4 text-white fw-bold">
              Developer Community
            </h1>

            <p className="lead text-light">
              Discover talented developers and connect with like-minded professionals.
            </p>

          </div>

          {profileItems}

        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
