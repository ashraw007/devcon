import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "516ba6483242e875e4d1",
      clientSecret: "ccb4eb5d9ca07033989c1188dda7b7adc65a6e31",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;


    fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=updated`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({
          repos: Array.isArray(data) ? data : []
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;
    if (!Array.isArray(repos)) {
      return null;
    }

    return (
      <div className="github-section">

        <h3 className="github-heading">
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Latest GitHub Repositories
        </h3>

        <div className="repo-grid">

          {repos.map(repo => (

            <div
              className="repo-card"
              key={repo.id}
            >

              <h4>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  {repo.name}
                </a>

              </h4>

              <p>
                {repo.description || "No description available."}
              </p>

              <div className="repo-stats">

                <span role="img" aria-label="star">⭐</span> {repo.stargazers_count}

                <span role="img" aria-label="watchers">👀</span> {repo.watchers_count}

                <span role="img" aria-label="fork">🍴</span> {repo.forks_count}

              </div>

            </div>

          ))}

        </div>

      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
