import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    onInputChanged: PropTypes.func,
  };

  static defaultProps = {
    onInputChanged: () => { console.log('input changed method not implented.'); },
  }

  constructor(props) {
    super(props);
    this.state = {
      searchbtnflag: false
    }
  }
  changesearchbtn(e) {
    this.props.onInputChanged(e.target.value);

    this.setState({ searchbtnflag: e.target.value.length > 0 });
  }
  onSearch() {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(this.searchInput.value);
    }
  }

  render() {
    const { searchbtnflag } = this.state
    return (
      <div className="forced-vertical-flow">
        <label>
          <input
            type="text"
            className="input-search"
            onChange={this.changesearchbtn.bind(this)}
            ref={el => this.searchInput = el}
          />
        </label>
        {searchbtnflag ? (
          <button
            className="search-submit-bt"
            onClick={this.onSearch.bind(this)}
          >Search</button>
        ) : null}
      </div>
    )
  }

}

Search.propTypes = {
    onSearch: PropTypes.func
}

Search.defaultProps = {
    onSearch: null
}

export default Search;