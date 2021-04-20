import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import './style.sass';
import Chart from "./chart.svg";

export const VoteGraph1: FunctionComponent<{
    name: string | null;
    subname: string | null;
    showNameInside?: boolean;
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
    showQuestionMarkInName?: boolean;
}> = ({
    name,
    subname,
    showNameInside,
    forDirectCount = 0,
    forCount = 0,
    againstDirectCount = 0,
    againstCount = 0,
    // forPercentageOnOther = null,
    userVote = null,
    userDelegatedVotes = null,
    group = null,
    showQuestionMarkInName = false
}) => {
        return (
            <>
                {name && !showNameInside && (
                    <Link className="white text-truncate mb-0 grid" to={`/${group ? ('group/' + group + '/') : 'vote/'}${name}`}>
                        {subname ? (
                            <span
                                className="mb-0 text-truncate"
                                title={name+" "+subname}
                            >
                                <span className="light">{name}</span> {subname}{showQuestionMarkInName && '?'}
                            </span>
                        ) : (
                            <span
                                className="mb-0 text-truncate"
                                title={name}
                            >
                                {name}{showQuestionMarkInName && '?'}
                            </span>
                        )}
                    </Link>
                )}
                <Chart
                    name={name}
                    showNameInside={showNameInside}
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

