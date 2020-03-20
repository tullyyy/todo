import React, {Component} from 'react';

export default class Mission extends Component {
    render() {

        // creates variable `name` with the value from this.props.mission.name

        const {id, name, finished, tasks} = this.props.mission;

        return (
            <div className="card mb-4" >

                <div className="card-body">
                    <h2 className="card-title" style={{textDecoration: (finished ? 'line-through' : 'none')}}>{name}</h2>
                    <div>
                        <ul>
                            <li className="mb-4">
                                <div className="d-flex flex-row">
                                    <h4 className="mr-4">Active Task</h4>
                                    <button className="btn btn-primary mr-2">Finish</button>
                                    <button className="btn btn-warning mr-2">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </li>
                            <li className="mb-4">
                                <div className="d-flex flex-row">
                                    <input type="text" className="form-control mr-4" value="Edited Task"/>
                                    <button className="btn btn-warning">Update</button>
                                </div>
                            </li>
                            <li className="mb-4">
                                <div className="d-flex flex-row">
                                    <h4 className="mr-4" style={{textDecoration: 'line-through'}}>Finished Task</h4>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex flex-row">
                                    <input type="text" className="form-control mr-4" placeholder="New task"/>
                                    <button className="btn btn-success">Create</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-warning mr-2">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}
