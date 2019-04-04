import React, { Component } from 'react';
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
        return (
            <div className="poster">
                <figure className="movieCard" onClick="this.posterClickHandler">
                    <img className="moviePoster"
                         src="https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY298_CR0,0,201,298_AL_.jpg"
                         alt="Elephant at sunset" />
                    <figcaption className="movieCaption">
                      <button className="likeBtn">Like</button>
                      <div  className="movieCaptionText">
                          <h4 className="movieCaptionTitle">An elephant at sunset</h4>
                          <h5 className="movieCaptionYear">1991</h5>
                      </div>
                    </figcaption>
                </figure>
            </div>
        );
    }
}
