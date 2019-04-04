import React, { Component } from 'react';
import empty  from '../../assets/img/illustration-empty-state.png';
import './style.scss';
import { Movie } from '../Movie';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.hide = true;

    }

    render() {
        return (
          <main id="main">

                <div className="empty-state-container">
                    <div className="empty-state">
                        <img src={empty} alt="no result" /><br />
                        <h3>Don't know what to search?</h3>
                        <p>Here's a offer you can't refuse</p>
                    </div>
                </div>

                {/* <Movie></Movie> */}

          </main>
        );
    }
}
