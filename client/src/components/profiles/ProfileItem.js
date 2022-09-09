import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/isEmpty";
import Delete from '../../img/delete.jpg'

class ProfileItem extends Component {
  render() {
    const  profile  = this.props.profile;

    const image = (profile.user === null) ? (<img src={Delete} alt="User Not Found"/>) : (
      <img
        className="rounded-circle"
        src={profile && profile.user ? profile.user.avatar : "Account Missing"}
        alt="User Avatar"
      />)

    return (
      <div className="card card-body bg-secondary mb-3">
        <div className="row">
          <div className="col-2">
            {image}
          </div>
          <div className="col-lg-6 col-md-4 col-sm-8">
            <h3>{profile && profile.user ? profile.user.name : 'Deleted Account'}</h3>
            <p>
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>

          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
