import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const experienceRows = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>

        <td>{exp.title}</td>

        <td>
          <Moment format="MMM YYYY">{exp.from}</Moment>
          {" - "}
          {exp.to ? (
            <Moment format="MMM YYYY">{exp.to}</Moment>
          ) : (
            <span className="present-badge">Present</span>
          )}
        </td>

        <td className="text-end">
          <button
            onClick={() => this.onDeleteClick(exp._id)}
            className="btn experience-delete-btn"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="experience-card mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="experience-heading">
            <span role="img" aria-label="briefcase">
              💼
            </span>{" "}
            Experience
          </h3>

          <span className="experience-count">
            {this.props.experience.length} Experience
          </span>
        </div>

        <div className="table-responsive">
          <table className="table experience-table align-middle mb-0">
            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>

            <tbody>{experienceRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
  experience: PropTypes.array.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);