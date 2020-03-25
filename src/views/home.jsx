import React from 'react';
import People from './people.jsx'
import Vehicles from './vehicles.jsx';
import Planets from './planets.jsx';



const Home = props => {

    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../img/sw1.jpg" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="../img/sw2.png" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="../img/sw3.jpg" className="d-block w-100" alt="" />
                    </div>
                </div>
            </div>
            <People/>
            <Vehicles/>
            <Planets/>
        </>
    )
}

export default Home;