import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './input';

const searchTexts = [
    { lefttext: 'I could really use some ', righttext: 'right about now!' },
    { lefttext: 'I need more ', righttext: 'in my life!' },
    { lefttext: 'Quick! I need some ', righttext: ', start!' }
];

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTextIndex: 0,
            timerInvalidated: false
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if (!this.state.timerInvalidated) {
                this.changesearchtext();
            }
        }, 5 * 1000);
    }

    componentWillUnmount() {
        this.timer = null;
    }

    changesearchtext(e) {
        const { searchTextIndex } = this.state
        if (searchTextIndex === 2) { this.setState({ searchTextIndex: 0 }) }
        else {
            this.setState({ searchTextIndex: searchTextIndex + 1 })
        }
    }

    handleInputChanged(searchTerm) {
        this.setState({
            timerInvalidated: searchTerm.length > 0,
            searchTerm,
        });
    }

    render() {
        const { searchTextIndex, timerInvalidated } = this.state;
        const { onSearch } = this.props;

        return (
            <div className="homeslidbar">
                <div>
                    <p onClick={this.changesearchtext.bind(this)} className="replaced-text">Order Anything!</p>
                </div>
                <div className="slidercontent-sentence">
                    <div className="row">
                        <div className='col-sm-12 inline-input-fields'>
                            <span>{searchTexts[searchTextIndex].lefttext}</span>
                            <span><Input onInputChanged={this.handleInputChanged.bind(this)} onSearch={onSearch} /></span>
                            <span>{searchTexts[searchTextIndex].righttext}</span>
                        </div>
                    </div>
                </div>
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