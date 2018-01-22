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


const Service = ({icon, title, tooltipItems}) => {
    return (
        <div className="service">
            <span className="service-tooltip">
                <ul>
                    {tooltipItems.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </span>
            <div className="service-container">
                <img className="service-icon" src={icon} alt="An icon of tools" />
            </div>
            <h4>{title}</h4>  
        </div>
    )
}
const Services = () => {
    return (
        <div className="section services">
            <ScrollableAnchor id={"services"}>
                <h3 className="title">Services</h3>
            </ScrollableAnchor>
            <p>Id timeam copiosae mandamus vel, mea appetere instructior no. Quem case delenit ei pro, id admodum mandamus usu.</p>
            <hr />
            <Fade bottom>
                <ul className="grid">
                    <li>
                        <Service
                            icon={iconGeneralBuilding}
                            title="General Building"
                            tooltipItems={["Item 1", "Item 2", "Item 3"]}
                        />
                    </li>
                    <li>
                        <Service
                            icon={iconRenovations}
                            title="Renovations"
                            tooltipItems={["Item 1", "Item 2"]}
                        />
                    </li>
                    <li>
                        <Service
                            icon={iconExtensions}
                            title="Extensions"
                            tooltipItems={["Item 1", "Item 2"]}
                        />
                    </li>
                    <li>
                        <Service
                            icon={iconKitchens}
                            title="Kitchens"
                            tooltipItems={["Item 1", "Item 2"]}
                        />
                    </li>
                    <li>
                        <Service
                            icon={iconBathrooms}
                            title="Bathrooms"
                            tooltipItems={["Item 1", "Item 2"]}
                        />
                    </li>
                    <li>
                        <Service
                            icon={iconCarpentry}
                            title="Carpentry"
                            tooltipItems={["Item 1", "Item 2"]}
                        />
                    </li>
                    <li>
                        <Service
                            icon={iconUtilityRooms}
                            title="Utility Rooms"
                            tooltipItems={["Item 1", "Item 2"]}
                        />
                    </li>
                    <li>
                        <Service
                            icon={iconTiling}
                            title="Tiling"
                            tooltipItems={["Item 1", "Item 2"]}
                        />
                    </li>
                </ul>
            </Fade>
        </div>
    )
}

export default Services;