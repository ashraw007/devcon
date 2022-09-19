import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

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
    const { count, sort, clientId, clientSecret } = this.state;


    fetch(
       `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const  repos  = this.state.repos;

    console.log(repos)
    

    const repoItems = repos.map(repo => (
      console.log(repo.html_url),
      <div key={repo.id} className="card card-body border-success mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link
                to={{pathname: repo.html_url}}
                className="text-success"
                target="_blank"
                rel="noopener noreferrer">
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">Stars: {repo.stargazers_count}</span>
            <span className="badge badge-secondary mr-1">Stars: {repo.watchers_count}</span>
            <span className="badge badge-success">Stars: {repo.forks_count}</span>
          </div>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
      
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
