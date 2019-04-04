import React, { Component } from 'react';
import './style.scss';
import imdbLogo from '../../assets/img/logos/logo-imdb.svg';
import rtLogo from '../../assets/img/logos/logo-rotten-tomatoes.svg';
import emptyHeart from '../../assets/img/icons/icon-heart-grey.svg';
import fullHeart from '../../assets/img/icons/icon-heart-white.svg';

export class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    posterClickHandler = () => {
        console.log('posterClickHandler called!!');
    }

    render() {
        return (
            <div className="movie">
                <div className="movie-details">
                    <div className="movie-duration-year">86 min · 2014 ·</div>
                    <h1 className="movie-title">All the President's Men</h1>

                    <section className="movie-stats">

                        <div class="stat-label stat-label--icon imdb" >
                            <i className="stat-icon">   <img src={imdbLogo} /> </i>
                            <span className="stat-content">7.6/10</span>
                        </div>

                        <div class="stat-label stat-label--icon rotton-tom" >
                            <i className="stat-icon"> <img src={rtLogo} /></i>
                            <span className="stat-content">96%</span>
                        </div>

                        <div class="stat-label stat-label--icon wishlist" >
                            <i className="stat-icon"><img src={emptyHeart} /></i>
                            <span className="stat-content">Add to favourites</span>
                        </div>

                    </section>

                    <section className="movie-plot">
                        <h5>Plot</h5>
                        <p>"The Washington Post" reporters Bob Woodward and Carl Bernstein uncover the details of the Watergate scandal that leads to President Richard Nixon's resignation.</p>
                    </section>

                    <div className="movie-other-details">
                        <section className="movie-cast">
                            <h5>Cast</h5>
                                <ul>
                                    <li>Dustin Hoffman</li>
                                    <li>Robert Redford</li>
                                    <li>Jack Warden </li>
                                </ul>
                        </section>
                        <section className="movie-genre">
                            <h5>Genre</h5>
                                <ul>
                                    <li>Biography</li>
                                    <li>Drama</li>
                                    <li>History</li>
                                </ul>
                        </section>
                        <section className="movie-director">
                            <h5>Director</h5>
                            <ul>
                                <li>Alan J. Pakula</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="movie-poster">
                    <img src="https://m.media-amazon.com/images/M/MV5BOWI2YWQxM2MtY2U4Yi00YjgzLTgwNzktN2ExNTgzNTIzMmUzXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_QL50_.jpg" alt="All the President's Men" />
                </div>
            </div>
        );
    }
}
