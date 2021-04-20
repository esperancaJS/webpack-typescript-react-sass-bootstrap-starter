import React, { FunctionComponent } from 'react';
import { useHistory } from "react-router-dom";

import BackArrowSVG from "@shared/Icons/BackArrow.svg";

import './style.sass';

export const Header: FunctionComponent<{ title: string, noBottom?: boolean }> = ({ title, noBottom }) => {

    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    return (
        <div className={`top ${!noBottom && 'border-bottom'}`}>
            <div onClick={goBack} role="button">
                <BackArrowSVG />
            </div>
            <div className="top-text-container">
                <div>{title}</div>
            </div>
        </div>
    );
}

