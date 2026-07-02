import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const educationRows = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>

        <td>{edu.degree}</td>

        <td>
          <Moment format="MMM YYYY">{edu.from}</Moment>
          {" - "}
          {edu.to ? (
            <Moment format="MMM YYYY">{edu.to}</Moment>
          ) : (
            <span className="present-badge">Present</span>
          )}
        </td>

        <td className="text-end">
          <button
            onClick={() => this.onDeleteClick(edu._id)}
            className="btn education-delete-btn"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="education-card mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="education-heading">
            <span role="img" aria-label="graduation">
              🎓
            </span>{" "}
            Education
          </h3>

          <span className="education-count">
            {this.props.education.length} Education
          </span>
        </div>

        <div className="table-responsive">
          <table className="table education-table align-middle mb-0">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Degree</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>

            <tbody>{educationRows}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);