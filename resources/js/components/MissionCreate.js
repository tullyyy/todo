import React, {Component} from 'react';

export default class MissionCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    // 2) handle submit of the form
    handleFormSubmit = (e) => {
        e.preventDefault();

        // 3) send data to API
        fetch('/api/missions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(data => {

                this.props.handleCreated(data);
            })

        console.log('test');
    };

    render() {
        return (
            <div className="card mb-4" >
                <div className="card-body">

                    {/* 1) turn the input and the button into the actual form */}
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="d-flex">

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
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
