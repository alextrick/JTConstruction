import React from 'react';

import iconPhone from '../images/phone.svg';

const PhoneButton = () => {
    return (
        <li className="header-phone" >
              <a href="tel:+447884444444" className="btn">
                <img className="header-phone-icon" src={iconPhone} alt="Phone number" />
                (+44)7884 444 444
              </a>
        </li>
    )
}

export default PhoneButton;