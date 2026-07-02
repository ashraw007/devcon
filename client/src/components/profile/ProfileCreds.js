import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.length > 0 ? (
      experience.map(exp => (
        <div className="credential-card" key={exp._id}>
          <h4>{exp.company}</h4>

          <span className="credential-date">
            <Moment format="MMM YYYY">{exp.from}</Moment>
            {" - "}
            {exp.to ? (
              <Moment format="MMM YYYY">{exp.to}</Moment>
            ) : (
              "Present"
            )}
          </span>

          <p>
            <strong>Position:</strong> {exp.title}
          </p>

          {exp.location && (
            <p>
              <strong>Location:</strong> {exp.location}
            </p>
          )}

          {exp.description && (
            <p>
              <strong>Description:</strong> {exp.description}
            </p>
          )}
        </div>
      ))
    ) : (
      <div className="empty-card">
        No Experience Added
      </div>
    );

    const eduItems = education.length > 0 ? (
      education.map(edu => (
        <div className="credential-card" key={edu._id}>
          <h4>{edu.school}</h4>

          <span className="credential-date">
            <Moment format="MMM YYYY">{edu.from}</Moment>
            {" - "}
            {edu.to ? (
              <Moment format="MMM YYYY">{edu.to}</Moment>
            ) : (
              "Present"
            )}
          </span>

          <p>
            <strong>Degree:</strong> {edu.degree}
          </p>

          <p>
            <strong>Field:</strong> {edu.fieldofstudy}
          </p>

          {edu.description && (
            <p>
              <strong>Description:</strong> {edu.description}
            </p>
          )}
        </div>
      ))
    ) : (
      <div className="empty-card">
        No Education Added
      </div>
    );

    return (
      <div className="row mt-4">

        <div className="col-lg-6 mb-4">

          <div className="profile-section-card h-100">

            <h3 className="profile-section-title">
              <span role="img" aria-label="briefcase">
                💼
              </span>{" "}
              Experience
            </h3>

            {expItems}

          </div>

        </div>

        <div className="col-lg-6 mb-4">

          <div className="profile-section-card h-100">

            <h3 className="profile-section-title">
              <span role="img" aria-label="graduation">
                🎓
              </span>{" "}
              Education
            </h3>

            {eduItems}

          </div>

        </div>

      </div>
    );
  }
}

export default ProfileCreds;