import React, { FunctionComponent } from 'react';

import VoteGraph1 from "@shared/VoteGraph1";
import './style.sass';

export const VoteWrapper: FunctionComponent<{
    l: any, introMessage?: string, showIntroMessage?: boolean, showColorLegend?: boolean
}> = ({
    l, introMessage, showIntroMessage, showColorLegend
}) => {

        const [userVote, setUserVote] = React.useState(null);
        const handleUserVote = (vote: string) => {
            if (vote === userVote) {
                setUserVote(null)
            } else {
                setUserVote(vote);
            }
        }

        return (
            <div className="mt-3">
                {showIntroMessage && (
                    <small className="do-you d-flex mb-n1">{introMessage || 'Do you approve'}</small>
                )}
                <div className="bar-wrapper mb-3">
                    <VoteGraph1 key={`d-${l.name}`} {...l} showNameInside={false} />
                </div>

                {showColorLegend && (
                    <div className="d-flex color-legend">
                        <div>
                            <small>Direct For</small><div className="color forDirect"></div>
                        </div>
                        <div>
                            <small>Delegated For</small><div className="color for"></div>
                        </div>
                        <div>
                            <small>Direct Against</small><div className="color againstDirect"></div>
                        </div>
                        <div>
                            <small>Delegated Against</small><div className="color against"></div>
                        </div>
                    </div>
                    
                )}

                <div className="d-flex d-flex justify-content-between mt-n2">
                    <div
                        onClick={() => handleUserVote('for')}
                        className={`button_ small ${userVote === 'for' && 'selected'}`}
                    >
                        For
                </div>
                    <div
                        onClick={() => handleUserVote('against')}
                        className={`button_ small ${userVote === 'against' && 'selected'}`}
                    >
                        Against
                </div>
                </div>
            </div>
        );
    }

