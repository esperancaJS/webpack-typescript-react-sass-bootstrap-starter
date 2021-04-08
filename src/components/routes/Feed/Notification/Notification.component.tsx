import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import VoteWrapper from "@shared/VoteWrapper";
import './style.sass';

export const Notification: FunctionComponent<{ v: any }> = ({ v }) => {

    const [userVote, setUserVote] = React.useState(null);
    const handleUserVote = (vote: string) => {
        if (vote === userVote) {
            setUserVote(null)
        } else {
            setUserVote(vote);
        }
    }

    return (
        <>
            <div className="d-flex relative">
                <Link to="/profile">
                    <div className="small-avatar bg"></div>
                </Link>
                <div className="flex-fill">
                    <p className="mb-n1">
                        <Link to="/profile">
                            <b>{v.who.name}</b>
                            <small className="ml-1">{v.who.handle}</small>
                        </Link>
                        <div className="badge ml-1">Represents You</div>
                    </p>
                    <p className="mb-0">{v.message} <Link to="/vote/equal%20rights"><b className="white">{v.name}</b></Link></p>
                    <small className="d-flex mb-2">3 days ago</small>
                </div>
            </div>
            <div>
                <VoteWrapper l={{...v, name: ''}} />
            </div>
            <hr />
        </>
    );
}

