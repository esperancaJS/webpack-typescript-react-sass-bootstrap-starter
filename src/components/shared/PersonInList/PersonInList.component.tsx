import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import './style.sass';

export const PersonInList: FunctionComponent<{}> = ({ }) => {

    const [isRepresenting, setIsRepresenting] = React.useState(false);

    return (
        <div className="d-flex relative border-bottom py-2">
            <Link to="/profile">
                <div className="small-avatar bg"></div>
            </Link>
            <div className="flex-fill">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                    <Link to="/profile" className="d-flex flex-column">
                        <b>Dan Price</b>
                        <small className="mt-n1">@DanPriceSeattle</small>
                    </Link>
                    <div
                        onClick={() => setIsRepresenting(!isRepresenting)}
                        className={`button_ small mb-0 ${isRepresenting ? "selected" : ""}`}
                    >
                        {isRepresenting ? "Represents You" : "Delegate Votes To"}
                    </div>
                </div>
                <small className="d-flex mb-0">
                    I cut my CEO pay by a million dollars so all workers could make at
                    least $70,000 per year.
                    Author of WORTH IT - buy it for your boss from a small bookstore
                </small>
                <small>
                    Voted the same as you in <b className="white forDirect px-1 rounded">34</b> polls and different in <b className="white againstDirect px-1 rounded">12</b>
                </small>
            </div>
        </div>
    );
}

