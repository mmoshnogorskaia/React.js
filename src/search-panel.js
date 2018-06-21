import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/search-panel.css';

import Select from './select';
import InputKeywords from './input-keywords';
import Submit from './submit';
import composeUrl from './utility/compose-url';

const types = [
  { value: 'type', label: 'Type' },
  { value: 'repositories', label: 'Repositories' },
];

const languages = [
  { value: 'language', label: 'Language' },
  { value: 'javascript', label: 'Javascript' },
  { value: 'css', label: 'CSS' },
  { value: 'html', label: 'HTML' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'c++', label: 'C++' },
  { value: 'python', label: 'Python' },
  { value: 'c#', label: 'C#' },
  { value: 'java', label: 'Java' },
  { value: 'go', label: 'Go' },
  { value: 'haskell', label: 'Haskell' },
];

class SearchPanel extends Component {
  propTypes = {
    onSearchSubmit: PropTypes.func,
    waiting: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      language: '',
      keyword: '',
      isValid: true,
    };
  }
  handleTypeChange = (type) => {
    this.setState({
      type: type.toLowerCase(),
      isValid: true,
    });
  };

  handleLanguageChange = (language) => {
    this.setState({
      language: language.toLowerCase(),
    });
  };

  handleKeywordChange = (keyword) => {
    this.setState({
      keyword: keyword.toLowerCase(),
    });
  };
  handleButtonClick = () => {
    if (this.state.type.length) {
      this.setState({
        isValid: true,
      });
      this.props.onSearchSubmit(composeUrl(
        this.state.type,
        this.state.language,
        this.state.keyword,
      ));
    } else {
      this.setState({
        isValid: false,
      });
    }
  };

  render() {
    return (
      <div className="search__search-panel">
        <Select
          options={types}
          required
          isValid={this.state.isValid}
          onChangeValue={this.handleTypeChange}
        />
        <Select
          options={languages}
          placeholder="Language"
          onChangeValue={this.handleLanguageChange}
        />
        <InputKeywords onChangeValue={this.handleKeywordChange} />
        <Submit
          onButtonClick={this.handleButtonClick}
          disabled={this.props.waiting}
        />
      </div>
    );
  }
}

export default SearchPanel;