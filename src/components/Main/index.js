import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Links } from "react-router-dom";

import './style.scss';
import { Movie } from '../Movie';
import { EmptyList } from '../EmptyList';
import { MovieList } from '../MovieList';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.hide = true;
    }

    render() {
        return (
          <Router>
              <main>
                    <Route path="/" exact component={EmptyList} />
                    {/* <Route path="/list/" component={MovieList} /> */}
                    <Route path="/movie" component={Movie} />
              </main>
          </Router>

        );
    }
}
