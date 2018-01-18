import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import { Fade } from 'react-reveal';

import iconGeneralBuilding from '../images/general-building.svg';
import iconRenovations from '../images/renovations.svg';
import iconExtensions from '../images/extensions.svg';
import iconKitchens from '../images/kitchens.svg';
import iconBathrooms from '../images/bathrooms.svg';
import iconCarpentry from '../images/carpentry.svg';
import iconUtilityRooms from '../images/utility-rooms.svg';
import iconTiling from '../images/tiling.svg';

const Services = () => {
    return (
        <div className="section services">
            <ScrollableAnchor id={"services"}>
                <h3 className="title">Services</h3>
            </ScrollableAnchor>
            <p>Id timeam copiosae mandamus vel, mea appetere instructior no. Quem case delenit ei pro, id admodum mandamus usu.</p>
            <hr />
            <ul className="grid">
                
                <li>
                    <Fade left delay={0}>
                        <div className="service-container">
                            <img className="service-icon" src={iconGeneralBuilding} alt="An icon of tools" />
                        </div>
                        <h4>General Building</h4>
                    </Fade>
                </li>
                <li>
                    <Fade bottom delay={0}>
                        <div className="service-container">
                            <img className="service-icon" src={iconRenovations} alt="An icon of a shower" />
                        </div>
                        <h4>Renovations</h4>
                    </Fade>
                </li>
                <li>
                    <Fade bottom delay={0}>
                        <div className="service-container">
                            <img className="service-icon" src={iconExtensions} alt="An icon of a brick wall" />
                        </div>
                        <h4>Extensions</h4>
                    </Fade>
                </li>
                <li>
                    <Fade right delay={0}>
                        <div className="service-container">
                            <img className="service-icon" src={iconKitchens} alt="An icon of a kitchen" />
                        </div>
                        <h4>Kitchens</h4>
                    </Fade>
                </li>
                <li>
                    <Fade left>
                        <div className="service-container">
                            <img className="service-icon" src={iconBathrooms} alt="An icon of a shower" />
                        </div>
                        <h4>Bathrooms</h4>
                    </Fade>
                </li>
                <li>
                    <Fade bottom>
                        <div className="service-container">
                            <img className="service-icon" src={iconCarpentry} alt="An icon of a saw" />
                        </div>
                        <h4>Carpentry</h4>
                    </Fade>
                </li>
                <li>
                    <Fade bottom>
                        <div className="service-container">
                            <img className="service-icon" src={iconUtilityRooms} alt="An icon of a washing machine" />
                        </div>
                        <h4>Utility Rooms</h4>
                    </Fade>
                </li>
                <li>
                    <Fade right>
                        <div className="service-container">
                            <img className="service-icon" src={iconTiling} alt="An icon of tiles" />
                        </div>
                        <h4>Tiling</h4>
                    </Fade>
                </li>
            </ul>
        </div>
    )
}

export default Services;