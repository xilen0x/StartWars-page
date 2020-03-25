import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';

const PeopleDetails = props => {
    const { store, actions } = useContext(Context);
    console.log(props)
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

                        !!store.people.results ?
                               store.people.results.map((elem, i) => {
                               
                               
                                    if (elem.name === props.match.params.name) { 

                                    return (
                                        <div className="col-lg-8 mb-10" key={i}>
                                            <div className="card">
                                                <img src="http://placehold.it/300x100" className="card-img-top" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{elem.name}</h5>
                                                    <p className="card-text">Age :{elem.birth_year}</p>
                                                    <p className="card-text">Gender :{elem.gender}</p>
                                                    {/* <Link to={"#"} className="btn btn-danger">Close</Link> */}
                                                    <button className="btn btn-danger" onClick={() => props.history.goBack()}>Go Back</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
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
export default withRouter(PeopleDetails);