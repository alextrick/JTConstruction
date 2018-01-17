import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';


const Services = () => {
    return (
        <div className="section services">
            <ScrollableAnchor id={"services"}><h3 className="title">Services</h3></ScrollableAnchor>
            <p>Id timeam copiosae mandamus vel, mea appetere instructior no. Quem case delenit ei pro, id admodum mandamus usu.</p>
            <hr />
            <ul className="grid">
                <li>
                    <div className="service-container">
                    </div>
                    <h4>General Building</h4>
                </li>
                <li>
                    <div className="service-container">
                    </div>
                    <h4>Renovations</h4>
                </li>
                <li>
                    <div className="service-container">
                    </div>
                    <h4>Extensions</h4>
                </li>
                <li>
                    <div className="service-container">
                    </div>
                    <h4>Kitchens</h4>
                </li>
                <li>
                    <div className="service-container">
                    </div>
                    <h4>Bathrooms</h4>
                </li>
                <li>
                    <div className="service-container">
                    </div>
                    <h4>Carpentry</h4>
                </li>
                <li>
                    <div className="service-container">
                    </div>
                    <h4>Utility Rooms</h4>
                </li>
                <li>
                    <div className="service-container">
                    </div>
                    <h4>Tiling</h4>
                </li>
            </ul>
        </div>
    )
}

export default Services;