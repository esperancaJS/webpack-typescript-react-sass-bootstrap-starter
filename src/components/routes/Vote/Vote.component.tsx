import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { DiscussionEmbed } from 'disqus-react';

import VoteGraph1 from "@shared/VoteGraph1";
import Header from "@shared/Header";
import DropPlusSVG from "@shared/Icons/Drop+.svg";
import {
    defaults,
    byLocation,
    byAge,
    byOccupation,
    byApprovalOnOtherTopics,
    votesBy,
    onSubTopics
} from "@state/Mock/Votes";

import SubVote from './SubVote';

export default function Vote() {

    let { voteName } = useParams<any>();

    const [userVote, setUserVote] = React.useState(null);

    const openStats = (for_: any) => {
        alert(`TODO: open stats for ${for_}`);
    };

    const handleUserVote = (vote: string) => {
        if (vote === userVote) {
            setUserVote(null)
        } else {
            setUserVote(vote);
        }
    }

    return (
        <>
            <Header title="Opinion Poll" />

            <h2 className="mb-0 mt-4">Do you approve of</h2>
            <h2 className="mb-4 white"><b>{voteName}</b></h2>

            <div>
                {/* <h4 onClick={() => openStats("Vote")}>Opinions</h4> */}
                <div className="bar-wrapper">
                    <VoteGraph1 {...defaults} />
                </div>

                <div className="d-flex d-flex justify-content-between mt-4">
                    <div
                        onClick={() => handleUserVote('for')}
                        className={`button_ ${userVote === 'for' && 'selected'}`}
                    >
                        Vote For
                    </div>
                    <div
                        onClick={() => handleUserVote('against')}
                        className={`button_ ${userVote === 'against' && 'selected'}`}
                    >
                        Vote Against
                    </div>
                </div>

                <hr />

                <h2>Statistics</h2>

                <br />
                <h4 onClick={() => openStats("Location")}>Locations</h4>
                <div className="bar-container">
                    {byLocation.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`a-${i}`} {...l} group="Location" />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Age Groups")}>Age Groups</h4>
                <div className="bar-container">
                    {byAge.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`a-${i}`} {...l} group="Age Groups" />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Location")}>Occupations</h4>
                <div className="bar-container">
                    {byOccupation.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`a-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Approval on other topics")}>
                    Correlations with other Votes
                </h4>
                <div className="bar-container">
                    {byApprovalOnOtherTopics.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`b-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Votes By")}>Voters</h4>
                <div className="bar-container">
                    {votesBy.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`c-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <hr />
                <h2>Votes on sub topics</h2>
                <div className="bar-container-horizontal">
                    {onSubTopics.map((l, i) => (
                        <SubVote
                            l={l}
                            i={i}
                        />
                    ))}
                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/create-sub-vote/Equal Rights" className="button_ icon-contain inverted">
                            <DropPlusSVG />
                        </Link>
                    </div>
                </div>
            </div>

            <br />
            <hr />
            <div>
                <h2>Converstation</h2>

                <DiscussionEmbed
                    shortname='enronavoider'
                    config={
                        {
                            url: `http://localhost:8080/`,
                            identifier: `http://localhost:8080/`,
                            title: 'test',
                        }
                    }
                >
                </DiscussionEmbed>
            </div>
        </>
    );
}
