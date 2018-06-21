import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatsDashboard from './utility/stats-dashboard';
import ContentDashboard from './utility/content-dashboard';
import './styles/repo-dashboard-view.css';

class RepoDashboardView extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onChangeRepo(this.props.repo.id);
  };
  render() {
    const { repo } = this.props;

    return (
      <div className="repo-dashboard">
        <StatsDashboard repo={repo} />
        <ContentDashboard repo={repo} />
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

RepoDashboardView.propTypes = {
  onChangeRepo: PropTypes.func,
  repo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    html_url: PropTypes.string,
    stargazers_count: PropTypes.number,
    archived: PropTypes.bool,
    topics: PropTypes.arrayOf(PropTypes.string),
  }),
};

RepoDashboardView.defaultProps = {
  onChangeRepo() {},
  repo: {},
};

export default RepoDashboardView;
