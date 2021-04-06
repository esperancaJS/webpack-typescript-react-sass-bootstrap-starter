import React, { FunctionComponent } from 'react';

import VoteGraph1 from "@shared/VoteGraph1";
import './style.sass';

export const SubVote: FunctionComponent<{i: number, l: any }> = ({ i, l }) => {

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
            <small className="do-you mb-n2">Do you approve of</small>
            <div className="bar-wrapper-horizontal mb-3" style={{ width: 100 - i * 10 + '%' }}>
                <VoteGraph1 key={`d-${i}`} {...l} />
            </div>

            <div className="d-flex d-flex justify-content-between mt-n2">
                <div
                    onClick={() => handleUserVote('for')}
                    className={`button_ small ${userVote === 'for' && 'selected'}`}
                >
                    Vote For
                </div>
                <div
                    onClick={() => handleUserVote('against')}
                    className={`button_ small ${userVote === 'against' && 'selected'}`}
                >
                    Vote Against
                </div>
            </div>

        </>
    );
}

