import React, {Component} from 'react';

export default class MissionCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }


    // 2) handle submit of the form
    // 3) send data to API

    // !!! DONT FORGET ABOUT CSRF !!!

    handleFormSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="card mb-4" >
                <div className="card-body">
                    <div className="d-flex">
                        {/* 1) turn the input and the button into the actual form */}
                        <form onSubmit={this.handleFormSubmit}>
                            {/* 0) connect the input with the value in state using value={} and onChange listener */}
                            <input
                                type="text"
                                className="form-control mr-2"
                                placeholder="New Mission"
                                value={this.state.name}
                                onChange={(e) => {
                                    this.setState({name: e.target.value})
                                }}
                            />
                            <button className="btn btn-success">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
