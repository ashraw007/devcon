import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/isEmpty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const firstName =
      profile.user === null
        ? profile.handle
        : profile.user.name.trim().split(" ")[0];

    const skills = profile.skills.map((skill, index) => (
      <span key={index} className="skill-badge">
        <i className="fa fa-check me-2"></i>
        {skill}
      </span>
    ));

    return (
      <div className="profile-about-card">

        <div className="mb-4">
          <h3 className="profile-section-heading">
            About {firstName}
          </h3>

          <p className="profile-bio">
            {isEmpty(profile.bio)
              ? `${firstName} hasn't added a bio yet.`
              : profile.bio}
          </p>
        </div>

        <hr className="profile-divider" />

        <div className="mt-4">
          <h3 className="profile-section-heading">
            Tech Stack
          </h3>

          <div className="skills-container">
            {skills}
          </div>
        </div>

      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;