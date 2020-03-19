import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
import Template from "./Template";


class App extends Component {
    render() {
        return (<Template/>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

