import React, { FunctionComponent } from 'react';

import BackArrowSVG from "@shared/Icons/BackArrow.svg";

import './style.sass';

export const Header: FunctionComponent<{ title: string }> = ({ title }) => {
    return (
        <div className="top border-bottom">
            <BackArrowSVG />
            <div className="top-text-container">
                <div>{title}</div>
            </div>
        </div>
    );
}

