import React, {Component} from 'react';
import * as ReactDOM from "react-dom";

import Template from "./Template";
import MissionCreate from "./MissionCreate";
import Mission from "./Mission";


class App extends Component {
    render() {
        // return (<Template/>);

        return (
            <div className="container">
                <h1>To Do Missions</h1>

                <MissionCreate/>
                <Mission/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

