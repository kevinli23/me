import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";

import {menuIcons} from './Constants';

import "../css/scss/style.scss";

const IconSidebar = () => {
    return(
        <div className="sideicons">
            {/* {menuIcons.map((icon) => 
                <a href={icon.link} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={icon.icon} size="3x" fixedWidth />
                </a>
            )}
            <FontAwesomeIcon icon={faGripLinesVertical} size="3x" fixedWidth /> */}
        </div>
    )
};

export default IconSidebar;