import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './style.scss';

export class Poster extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    posterClickHandler = () => {
        console.log('posterClickHandler called!!');
    }

    render() {
        const movieData = this.props.detail;
        const url = `/movie?id=${movieData.imdbID}`;
        return (
            <Link to={url}>
                <div className="poster" data-imdbid={movieData.imdbID}>
                    <figure className="movieCard" onClick="this.posterClickHandler">
                        <img className="moviePoster"
                             src={movieData.Poster}
                             alt={movieData.Title} />
                        <figcaption className="movieCaption">
                          <button className="likeBtn">Like</button>
                          <div  className="movieCaptionText">
                              <h4 className="movieCaptionTitle">{movieData.Title}</h4>
                              <h5 className="movieCaptionYear">{movieData.Year}</h5>
                          </div>
                        </figcaption>
                    </figure>
                </div>
            </Link>
        );
    }
}
