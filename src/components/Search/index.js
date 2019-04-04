import React, { Component } from 'react';
import './style.scss';

export class Search extends Component {
  render() {
    return (
        <form className="searchbox">
            <input type="text" name="search" className="search-input" placeholder="Search movies..." autoComplete="off"/>
            <button type="submit" className="search-btn"></button>
        </form>
    );
  }
}
