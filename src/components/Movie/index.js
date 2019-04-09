import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './style.scss';
import imdbLogo from '../../assets/img/logos/logo-imdb.svg';
import rtLogo from '../../assets/img/logos/logo-rotten-tomatoes.svg';
import emptyHeart from '../../assets/img/icons/icon-heart-grey.svg';
import fullHeart from '../../assets/img/icons/icon-heart-white.svg';
import queryString from 'query-string';

export class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const imdb = queryString.parse(this.props.location.search)
        console.log(imdb.id);
        this.fetchMovieDetails(imdb.id)
    }

    fetchMovieDetails = (id) => {
        fetch(`http://www.omdbapi.com/?apikey=dc17f3a&i=${id}&plot=full`)
            .then(res => {
                return res.json();
            })
            .then((result) => {
                console.log(result);
                if(!result.Error) {
                    this.setState({movie: result});
                }

            });

    }
    posterClickHandler = () => {
        console.log('posterClickHandler called!!');
    }

    render() {
        return (
            <div>
                <div className="nav-bar">
                <Link to='/' className="nav-item">
                      <span className="icon-back-arrow"></span>
                  </Link>
                </div>
                <RenderMovieDetails data={this.state.movie}></RenderMovieDetails>
            </div>
        );
    }
}
function RenderMovieStats(props) {
    return props.data.map((item) => {
        const {Source, Value} = item;
        return (
              Source ==="Internet Movie Database" ?
                <div className="stat-label stat-label--icon imdb" >
                    <i className="stat-icon">   <img src={imdbLogo} /> </i>
                    <span className="stat-content">{Value}</span>
                </div> : Source ==="Rotten Tomatoes" ?
                <div className="stat-label stat-label--icon rotton-tom" >
                    <i className="stat-icon">   <img src={rtLogo} /> </i>
                    <span className="stat-content">{Value}</span>
                </div> :
                null
        );
    });

}

function RenderMovieDetails(props) {
    const { Runtime, Year, Rated, Title, Actors, Ratings, Production, Poster, Plot, Language, Genre, Director, Country, Awards, imdbID } = props.data;

    return (

        <div className="movie">
            { !!Title &&
            <div className="movie-details">
                <div className="movie-duration-year">{Runtime} - {Year} - {Rated}</div>
                <h1 className="movie-title"> {Title} </h1>

                <section className="movie-stats">
                    <RenderMovieStats data={Ratings} />
                    <div className="stat-label stat-label--icon wishlist" >
                        <i className="stat-icon"><img src={emptyHeart} /></i>
                        <span className="stat-content">Add to favourites</span>
                    </div>

                </section>


                <section className="movie-plot row">
                    <div className="col-md-10 col-lg-8">
                        <h5>Plot</h5>
                        <p>{Plot}</p>
                    </div>
                </section>

                <div className="movie-other-details row">
                    <section className="movie-cast col-md-3">
                        <h5>Cast</h5>
                            <ul>
                                <li>{Actors}</li>
                            </ul>
                    </section>
                    <section className="movie-genre col-md-2">
                        <h5>Genre</h5>
                            <ul>
                                <li>{Genre}</li>
                            </ul>
                    </section>
                    <section className="movie-director col-md-3">
                        <h5>Director</h5>
                        <ul>
                            <li>{Director}</li>
                        </ul>
                    </section>
                </div>
            </div>
            }
            { !!Poster &&
            <div className="movie-poster">
                <img src={Poster} alt={Title} />
            </div>
            }
        </div>

    );
}
