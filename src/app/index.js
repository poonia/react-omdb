import React, { Component } from 'react';
import { Header } from "../components/Header";
import { Main } from "../components/Main";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className="container">
                <Header></Header>
                <Main></Main>
            </div>
        );
    }
}

export default App;
