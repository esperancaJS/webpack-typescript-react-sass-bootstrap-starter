import * as React from "react";

import VoteGraph1 from "@shared/VoteGraph1";
import Header from "@shared/Header";
import BackArrowSVG from "@shared/Icons/BackArrow.svg";
import { DiscussionEmbed } from 'disqus-react';

export default function Vote() {
    const defaults = {
        name: null,
        flexSize: 1,
        forCount: 0,
        againstCount: 0,
        userVote: null,
        userDelegatedVotes: null
    };

    const byLocation = [
        {
            ...defaults,
            name: "Lisbon",
            flexSize: 5,
            // forPercentage: 60
        },
        {
            ...defaults,
            name: "London",
            flexSize: 4,
            // forPercentage: 90,
            userVote: null
        },
        {
            ...defaults,
            name: "Other",
            // forPercentage: 50,
            flexSize: 1,
            userVote: null
        }
    ];

    const byAge = [
        {
            ...defaults,
            name: "10-18",
            flexSize: 3,
            // forPercentage: 90
        },
        {
            ...defaults,
            name: "19-25",
            flexSize: 4,
            // forPercentage: 80,
            userVote: null
        },
        {
            ...defaults,
            name: "26-35",
            // forPercentage: 70,
            flexSize: 3,
            userVote: null
        },
        {
            ...defaults,
            name: "36-50",
            // forPercentage: 60,
            flexSize: 3,
            userVote: null
        },
        {
            ...defaults,
            name: "Other",
            // forPercentage: 50,
            flexSize: 1,
            userVote: null
        }
    ];

    const byOccupation = [
        {
            ...defaults,
            name: "Student",
            flexSize: 5,
            // forPercentage: 90
        },
        {
            ...defaults,
            name: "Sales",
            flexSize: 4,
            // forPercentage: 50,
            userVote: null
        },
        {
            ...defaults,
            name: "Doctor",
            flexSize: 3,
            // forPercentage: 70,
            userVote: null
        },
        {
            ...defaults,
            name: "IT",
            flexSize: 3,
            // forPercentage: 90,
            userVote: null
        },
        {
            ...defaults,
            name: "Lobbyist",
            flexSize: 2,
            // forPercentage: 20,
            userVote: null
        },
        {
            ...defaults,
            name: "Other",
            // forPercentage: 50,
            flexSize: 1,
            userVote: null
        }
    ];

    const byApprovalOnOtherTopics = [
        {
            ...defaults,
            name: "Equality",
            flexSize: 7,
            // forPercentage: 70,
            // forPercentageOnOther: 90,
            userVote: true
        },
        {
            ...defaults,
            name: "BLM",
            flexSize: 5,
            // forPercentage: 60,
            // forPercentageOnOther: 50,
            userVote: true
        },
        {
            ...defaults,
            name: "LGBT Rights",
            // forPercentage: 90,
            flexSize: 3,
            // forPercentageOnOther: 40,
            userVote: true
        },
        {
            ...defaults,
            name: "Other",
            // forPercentage: 50,
            flexSize: 1
        }
    ];

    const votesBy = [
        {
            ...defaults,
            name: "Direct",
            // forPercentage: 70,
            flexSize: 12,
            userVote: null
        },
        {
            ...defaults,
            name: "Joe Bidden",
            flexSize: 7,
            // forPercentage: 100,
            userVote: null
        },
        {
            ...defaults,
            name: "Trump",
            flexSize: 4,
            // forPercentage: 0,
            userVote: null
        },
        {
            ...defaults,
            name: "Bonno",
            // forPercentage: 100,
            flexSize: 3,
            userVote: null
        }
    ];

    const onSubTopics = [
        {
            ...defaults,
            name: "Equal Rights Amoung Genders",
            flexSize: 8,
            // forPercentage: 90,
            // forPercentageOnOther: 70,
            userVote: true
        },
        {
            ...defaults,
            name: "Equal Rights accross all Ages",
            flexSize: 4,
            // forPercentage: 60,
            // forPercentageOnOther: 50,
            userVote: true
        },
        {
            ...defaults,
            name: "Other",
            // forPercentage: 80,
            flexSize: 1
        }
    ];

    const openStats = (for_: any) => {
        alert(`TODO: open stats for ${for_}`);
    };

    return (
        <>
            <Header title="Poll" />

            <h1>
                Do you approve of
                <br />
                <b>Equal Rights</b>?
            </h1>

            <div>
                {/* <h4 onClick={() => openStats("Vote")}>Opinions</h4> */}
                <div className="bar-wrapper">
                    <VoteGraph1 {...defaults} />
                </div>

                <div className="d-flex d-flex justify-content-between mt-4">
                    <div
                        onClick={() => {}}
                        className="button_"
                    >
                        Vote For
                    </div>
                    <div
                        onClick={() => {}}
                        className="button_"
                    >
                        Vote Against
                    </div>
                </div>

                <hr />

                <h2>Statistics</h2>

                <br />
                <h4 onClick={() => openStats("Location")}>By Location</h4>
                <div className="bar-container">
                    {byLocation.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`a-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Location")}>By Age</h4>
                <div className="bar-container">
                    {byAge.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`a-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Location")}>By Occupation</h4>
                <div className="bar-container">
                    {byOccupation.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`a-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Approval on other topics")}>
                    By approval on other topics
                </h4>
                <div className="bar-container">
                    {byApprovalOnOtherTopics.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`b-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Votes By")}>Votes by</h4>
                <div className="bar-container">
                    {votesBy.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`c-${i}`} {...l} />
                        </div>
                    ))}
                </div>

                <br />
                <h4 onClick={() => openStats("Votes on sub topics")}>
                    Votes on sub topics
                </h4>
                <div className="bar-container">
                    {onSubTopics.map((l, i) => (
                        <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                            <VoteGraph1 key={`d-${i}`} {...l} />
                        </div>
                    ))}
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
