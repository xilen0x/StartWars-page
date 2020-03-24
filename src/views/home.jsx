import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Home = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    console.log(store.people);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            store.people != null ?
                                (
                                    <div className="mt-5"><h1>cuerpo</h1></div>
                                ) : (
                                    <div className="spinner-grow" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;