import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import './style.sass';
import Chart from "./chart.svg";

export const VoteGraph1: FunctionComponent<{
    name: string | null;
    forCount: number;
    againstCount: number;
    // forPercentageOnOther?: number | null;
    userVote: boolean | null;
    userDelegatedVotes:
    | [
        {
            avatar: string;
            vote: boolean;
        }
    ]
    | null;
}> = ({
    name,
    forCount = 0,
    againstCount= 0,
    // forPercentageOnOther = null,
    userVote = null,
    userDelegatedVotes = null
}) => {
        return (
            <>
                {name && (<Link to="/Vote_v1"><p
                    className="mb-0 text-truncate"
                    title={name}
                >{name}</p></Link>)}
                <Chart
                    name={name}
                    forCount={forCount}
                    againstCount={againstCount}
                    userVote={userVote}
                    userDelegatedVotes={userDelegatedVotes}
                />
                {/* <div className="d-flex d-flex justify-content-between">
                    <p className="mb-0">{forPercentage}</p>
                    <p className="mb-0">{100 - forPercentage}</p>
                </div> */}
            </>
        );
    }

