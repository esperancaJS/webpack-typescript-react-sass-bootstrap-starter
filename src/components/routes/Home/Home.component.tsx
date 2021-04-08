import React, { FunctionComponent } from 'react';

import SubVote from '@shared/SubVote';
import VoteWrapper from "@shared/VoteWrapper";

import './style.sass';

export const Home: FunctionComponent<{}> = ({ }) => {
    return (
        <>
            {/* <Header title="Home" /> */}
            <br />
            <br />

            <h2>Welcome to <b className="white">Liquid Vote</b></h2>

            <p>The place for liquid voting.</p>

            <br />

            <h4>What is liquid voting?</h4>
            <p>A form of voting where you allow other people to vote for you.</p>
            <p>That said, you can still vote yourself or choose not to delegate votes to anyone.</p>

            <br />

            <h4>How do votes get delegated?</h4>
            <p>If you vote on an issue your vote's weight is 100% on your choice.</p>
            <p>
                But when you don't vote on an issue,
                your vote's weight gets split between people you
                choose to represent you.
            </p>

            <br />

            <div className="bar-container-horizontal">
                <VoteWrapper
                    l={{
                        name: 'Liquid Voting is Cool',
                        // showNameInside,
                        forDirectCount: 12000,
                        forCount: 35700,
                        againstDirectCount: 1430,
                        againstCount: 4500,
                        // forPercentageOnOther = null,
                        // userVote = null,
                        // userDelegatedVotes = null,
                        // group = null,
                        // showQuestionMarkInName = false
                        showQuestionMarkInName: true
                    }}
                    // i={0}
                    showIntroMessage={true}
                    introMessage="Do you Believe"
                />
            </div>
        </>
    );
}

