import React, { Component } from 'react';
import { Search } from '../Search';
import { Poster } from '../Poster';
import './style.scss';

export class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Search></Search>
                <Poster></Poster>
            </div>
        );
    }
}
