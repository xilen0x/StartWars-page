import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Vehicles = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Vehicles</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.vehicles ?
                            store.vehicles.results.map((elem, i) => {
                                return (
                                    <div className="col-md-4 mb-2" key={i}>
                                        <div className="card">
                                            <img src="http://placehold.it/300x150" className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{elem.name}</h5>
                                                <p className="card-text">Manufacturer : {elem.manufacturer}</p>
                                                <Link to="/vehicles" className="btn btn-primary">More...</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : (
                                <div className="col-md-12 text-center">
                                    <div className="spinner-grow" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    )
}
export default Vehicles;