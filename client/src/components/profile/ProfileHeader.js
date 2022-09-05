import React, { Component } from "react";
import isEmpty from "../../validation/isEmpty";
import Delete from '../../img/delete.jpg'

class ProfileHeader extends Component {
  render() {
    const  profile  = this.props.profile;

    const avtr = (profile.user === null) ? (<img src={Delete} alt="Not Found"/>) : (
      <img
        className="rounded-circle"
        src={profile && profile.user ? profile.user.avatar : "Account Missing"}
        alt="User Avatar"
      />)
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                {avtr}
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile && profile.user ? profile.user.name : profile.handle}</h1>
              <p className="lead text-center">
                {profile.status}{" "}
                {isEmpty(profile.company) ? null : (
                  <span> at {profile.company}</span>
                )}
              </p>
              {isEmpty(profile.location) ? null : (
                <span> at {profile.location}</span>
              )}
              <p className="mt-3">
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-globe fa-2x" />
                  </a>
                )}{" "}
                {isEmpty(profile.social && profile.social.twitter) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter fa-2x" />
                  </a>
                )}{" "}
                {isEmpty(profile.social && profile.social.facebook) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook fa-2x" />
                  </a>
                )}{" "}
                {isEmpty(profile.social && profile.social.linkedin) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin fa-2x" />
                  </a>
                )}{" "}
                {isEmpty(profile.social && profile.social.youtube) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube fa-2x" />
                  </a>
                )}{" "}
                {isEmpty(profile.social && profile.social.instagram) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram fa-2x" />
                  </a>
                )}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
