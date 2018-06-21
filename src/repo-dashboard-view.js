import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import PropTypes from 'prop-types';
import './styles/repo-dashboard-view.css';

class RepoDashboardView extends Component {
  propTypes = {
    onChangeRepo: PropTypes.func,
    repo: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
      html_url: PropTypes.string,
      stargazers_count: PropTypes.string,
      archived: PropTypes.bool,
      topics: PropTypes.arrayOf(PropTypes.string),
    }),
  };
  handleClick = (e) => {
    e.preventDefault();
    this.props.onChangeRepo(this.props.repo.id);
  };
  render() {
    const { repo } = this.props;

    return (
      <div className="repo-dashboard">
        <div className="repo-dashboard__stats">
          <div className="repo-dashboard__language">{repo.language}</div>
          <div className="repo-dashboard__stars stars">
            <span className="stars__icon">
              <FontAwesomeIcon icon={faStar} />
            </span>
            {repo.stargazers_count}
          </div>
        </div>

        <a href={repo.html_url} className="repo-dashboard__name">
          {repo.name}
        </a>
        <p className="repo-dashboard__description">{repo.description}</p>
        <ul className="repo-dashboard__topics topics">
          {repo.topics
            ? repo.topics.map(topic => (
              <li key={Math.random()} className="topics__item">
                {topic}
              </li>
              ))
            : null}
        </ul>
        <div className="button-wrapper">
          <button
            className={
              repo.archived
                ? 'repo-dashboard__action delete'
                : 'repo-dashboard__action add'
            }
            onClick={this.handleClick}
          >
            {repo.archived ? 'REMOVE FROM LIST' : 'ADD TO LIST'}
          </button>
        </div>
      </div>
    );
  }
}

export default RepoDashboardView;