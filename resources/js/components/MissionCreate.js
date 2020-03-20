import React, {Component} from 'react';

export default class MissionCreate extends Component {
    render() {
        return (
            <div className="card mb-4" >
                <div className="card-body">
                    <div className="d-flex">
                        <input type="text" className="form-control mr-2" placeholder="New Mission"/>
                        <button className="btn btn-success">Create</button>
                    </div>
                </div>
            </div>
        )
    }
}
