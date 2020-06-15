import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Board } from './components/board';
import { Scoreboard } from './components/scoreboard';


class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path='/' component={Scoreboard} />
                    <Route path='/board' component={Board} />
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));