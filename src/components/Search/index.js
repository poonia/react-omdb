import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.scss';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.hide = true;
    }

    searchChangeHandler = (event) => {
        console.log('searchChangeHandler=>', event.target.value);
        let keyword = event.target.value;
        fetch(`http://www.omdbapi.com/?apikey=dc17f3a&s=${keyword}`)
            .then(res => {
                return res.json();
            })
            .then((result) => {
                console.log(result);
                if(!result.Error) {
                    this.props.handler(result.Search)
                }

            });
    }
    searchClickHandler = () => {
        // console.log(history, window.history);
        // this.props.history.push('/movie')
        // return <Redirect to='/movie' push={true}/>

    }

    render() {
        return (
            <form className="searchbox">
                <input type="text" name="search" className="search-input" placeholder="Search movies..." autoComplete="off" onChange={this.searchChangeHandler}/>
                <button type="button" className="search-btn" onClick={this.searchClickHandler}></button>
            </form>
        );
    }
}
