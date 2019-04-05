import React, { Component } from 'react';
import { Search } from '../Search';
import empty  from '../../assets/img/illustration-empty-state.png';
import { Poster } from '../Poster';
import './style.scss';

function EmptyState(props) {
    return (
        <div className="empty-state-container">
            <div className="empty-state">
                <img src={empty} alt="no result" /><br />
                <h3>Don't know what to search?</h3>
                <p>Here's a offer you can't refuse</p>
            </div>
        </div>
    );
}

export class EmptyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies:[],
            movie:null
        };
    }

    updateMovieList = (list) => {
        console.log('updateMovieList called==>', list);
        this.setState({movies:list})
    }

    renderMoviesList = (list) => {
        return list.map((movie) =>
            <div className="col-md-2" key={movie.imdbID}>
                <Poster detail={movie}></Poster>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Search handler={this.updateMovieList}></Search>
                { !this.state.movies.length &&
                    <EmptyState></EmptyState>
                }
                { this.state.movies.length &&
                    <div className="row">
                        {this.renderMoviesList(this.state.movies)}
                    </div>
                }
            </div>
        );
    }
}
