import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
import MissionCreate from "./MissionCreate";
import Mission from "./Mission";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            missions: null
        }
    }

    componentDidMount() {

        // 1) fetch the data from /api/missions endpoint
        fetch('http://todo.test/api/missions')
            .then(response => response.json())
            .then(data => {
                // 2) store it to the state
                this.setState({
                    missions: data
                })
            })
    }

    render() {
        // return (<Template/>);

        return (
            <div className="container">
                <h1>To Do Missions</h1>
                <MissionCreate/>

                {
                    // 3) use map() function so you will render as many <Mission/> components as there are in DB

                    // this.state.missions.map((mission, i) => {
                    //     return (
                    //         <Mission/>
                    //     )
                    // })

                    this.state.missions !== null && this.state.missions.length > 0 ?
                        this.state.missions.map((mission, i) => (
                            <Mission/>
                        )) : (
                            <p>You don't have any missions :/ </p>
                        )
                }
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

