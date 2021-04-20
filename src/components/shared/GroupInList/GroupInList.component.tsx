import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import LockSVG from "@shared/Icons/Lock.svg";
import WorldSVG from "@shared/Icons/World.svg";
import WorldlockSVG from "@shared/Icons/Worldlock.svg";

import './style.sass';

export const GroupInList: FunctionComponent<{}> = ({ }) => {

    const [isRepresenting, setIsRepresenting] = React.useState(false);
    const [isJoined, setIsJoined] = React.useState(false);

    return (
        <div className="d-flex relative border-bottom py-3 mx-n3 px-3">
            <Link to="/group/Algarve Flats/votes">
                <div className="small-avatar avatar-1 bg"></div>
            </Link>
            <div className="flex-fill">
                <div className="mb-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <Link to="/group/Algarve Flats/votes"><b>Algarve Flats</b></Link>
                        {/* <small className="mt-n1">@DanPriceSeattle</small> */}
                        <div className="ml-1">
                            {/* <LockSVG /> */}
                            <WorldSVG/>
                            {/* <WorldlockSVG /> */}
                        </div>
                    </div>
                    <div className="d-flex">
                        <div
                            onClick={() => setIsJoined(!isJoined)}
                            className={`button_ small mb-0 ${isJoined ? "selected" : ""}`}
                        >
                            {isJoined ? "Joined" : "Join"}
                        </div>
                        <div
                            onClick={() => setIsRepresenting(!isRepresenting)}
                            className={`button_ small mb-0 ${isRepresenting ? "selected" : ""}`}
                        >
                            {isRepresenting ? "Represents You" : "Delegate Votes To"}
                        </div>
                    </div>
                </div>
                <small className="d-flex mb-0">
                    A community of locals and expats. That own flats in Algarve.
                    For personal use, Airbnb, long term renting or whatever.
                </small>
                <div className="d-flex ml-2 mt-2">
                    {/* <Link to="/profile" className="vote-avatar avatar-1 for ml-n2"></Link> */}
                    <Link to="/profile" className="vote-avatar avatar-2 ml-n2"></Link>
                    <Link to="/profile" className="vote-avatar avatar-3 ml-n2"></Link>
                    <Link to="/profile" className="vote-avatar avatar-1 ml-n2"></Link>
                    <Link to="/profile" className="vote-avatar avatar-4 ml-n2"></Link>
                    <Link to="/profile" className="vote-avatar avatar-5 ml-n2"></Link>
                    <div className="vote-avatar count ml-n2">{18}</div>
                </div>
            </div>
        </div>
    );
}

