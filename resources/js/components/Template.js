import React, {Component} from 'react';

export default class Template extends Component {
    render() {
        return (
            <div className="container">
                <h1>To Do Missions</h1>

                <div className="card mb-4" >
                    <div className="card-body">
                        <h2 className="card-title" style={{textDecoration: 'line-through'}}>Mission In Progress</h2>
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

                <div className="card mb-4" >
                    <div className="card-body">
                        <div className="d-flex mb-4">
                            <input type="text" className="form-control mr-2" value="Updating Mission"/>
                            <button className="btn btn-warning">Update</button>
                        </div>

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


                <div className="card mb-4" >
                    <div className="card-body">
                        <h2 className="card-title" style={{textDecoration: 'line-through'}}>Mission to be finished</h2>
                        <div>
                            <ul>

                                <li className="mb-4">
                                    <div className="d-flex flex-row">
                                        <h4 className="mr-4" style={{textDecoration: 'line-through'}}>Finished Task</h4>
                                        <button className="btn btn-danger">Delete</button>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex flex-row">
                                        <h4 className="mr-4" style={{textDecoration: 'line-through'}}>Finished Task 2</h4>
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
                        <button className="btn btn-primary mr-2">Finish</button>
                        <button className="btn btn-warning mr-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>

                <div className="card mb-4" >
                    <div className="card-body">
                        <h2 className="card-title" style={{textDecoration: 'line-through'}}>Finished mission</h2>
                        <div>
                            <ul>
                                <li className="mb-4">
                                    <div className="d-flex flex-row">
                                        <h4 className="mr-4" style={{textDecoration: 'line-through'}}>Finished Task</h4>
                                        <button className="btn btn-danger">Delete</button>
                                    </div>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex flex-row">
                                        <h4 className="mr-4" style={{textDecoration: 'line-through'}}>Finished Task 2</h4>
                                        <button className="btn btn-danger">Delete</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>

                <div className="card mb-4" >
                    <div className="card-body">
                        <div className="d-flex">
                            <input type="text" className="form-control mr-2" placeholder="New Mission"/>
                            <button className="btn btn-success">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
