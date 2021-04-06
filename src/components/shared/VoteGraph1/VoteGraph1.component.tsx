import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import './style.sass';
import Chart from "./chart.svg";

export const VoteGraph1: FunctionComponent<{
    name: string | null;
    forDirectCount: number;
    forCount: number;
    againstDirectCount: number;
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
    group?: string;
}> = ({
    name,
    forDirectCount = 0,
    forCount = 0,
    againstDirectCount = 0,
    againstCount = 0,
    // forPercentageOnOther = null,
    userVote = null,
    userDelegatedVotes = null,
    group = null
}) => {
        return (
            <>
                {name && (<Link to={`/${group ? ('groupBy/' + group) : 'vote/'}${name}`}><p
                    className="mb-0 text-truncate"
                    title={name}
                >{name}{group && '?'}</p></Link>)}
                <Chart
                    name={name}
                    forDirectCount={forDirectCount}
                    forCount={forCount}
                    againstDirectCount={againstDirectCount}
                    againstCount={againstCount}
                    userVote={userVote}
                    userDelegatedVotes={userDelegatedVotes}
                />
            </>
        );
    }

