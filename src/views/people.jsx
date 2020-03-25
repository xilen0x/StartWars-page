import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const People = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Characters</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.people ?
                            store.people.results.map((elem, i) => {
                                console.log(elem)
                                return (
                                    <div className="col-md-4 mb-2" key={i}>
                                        <div className="card">
                                            <img src="http://placehold.it/500x250" className="card-img-top" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{elem.name}</h5>
                                                <p className="card-text">Age :{elem.birth_year}</p>
                                                <p className="card-text">Gender :{elem.gender}</p>
                                                <Link to={"/people/"+elem.name} className="btn btn-primary">More...</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            : (
                                <div className="col-md-12 text-center">
                                    <div className="spinner-grow text-light" role="status">
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
export default People;