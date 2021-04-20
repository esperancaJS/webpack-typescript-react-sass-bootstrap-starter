import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { DiscussionEmbed } from 'disqus-react';
import numeral from 'numeral';
import ReactTooltip from 'react-tooltip';

import VoteGraph1 from "@shared/VoteGraph1";
import Header from "@shared/Header";
import DropPlusSVG from "@shared/Icons/Drop+.svg";
import {
    defaults,
    byGroups,
    votesBy,
    onSubTopics
} from "@state/Mock/Votes";
import SubVote from '@shared/SubVote';
import GroupSvg from "@shared/Icons/Group.svg";

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

    const stats = (({ forCount, againstCount, forDirectCount, againstDirectCount }) => {
        const forPercentage = (!forCount && !againstCount) ? 50 : ((forCount / (forCount + againstCount)) * 100);
        const forDirectPercentage = (forDirectCount / (forCount + againstCount)) * 100 || 50;
        const forDelegatedPercentage = ((forCount - forDirectCount) / (forCount + againstCount)) * 100;
        const againstPercentage = 100 - forPercentage;
        const againstDirectPercentage = (againstDirectCount / (forCount + againstCount)) * 100 || 50;
        const againstDelegatedPercentage = ((againstCount - againstDirectCount) / (forCount + againstCount)) * 100;

        return {
            forDelegatedPercentage,
            forDirectPercentage,
            againstDelegatedPercentage,
            againstDirectPercentage
        }
    })({
        forCount: defaults.forCount,
        againstCount: defaults.againstCount,
        forDirectCount: defaults.forDirectCount,
        againstDirectCount: defaults.againstDirectCount,
    })

    return (
        <>
            <ReactTooltip place="bottom" type="dark" effect="solid" />
            <Header title="Opinion Poll" />

            <h2 className="mb-0 mt-4">Do you approve</h2>
            <h2 className="mb-2 white"><b>{voteName}</b>?</h2>

            <div>
                {/* <h4 onClick={() => openStats("Vote")}>Opinions</h4> */}
                <div className="bar-wrapper">
                    <VoteGraph1 {...defaults} />
                </div>

                <div className="d-flex color-legend mt-2 mb-n2">
                    <div>
                        <small>Direct For</small><div className="color forDirect count">{stats.forDirectPercentage.toFixed(0)}%</div>
                    </div>
                    <div>
                        <small>Delegated For</small><div className="color for count">{stats.forDelegatedPercentage.toFixed(0)}%</div>
                    </div>
                    <div>
                        <small>Direct Against</small><div className="color againstDirect count">{stats.againstDirectPercentage.toFixed(0)}%</div>
                    </div>
                    <div>
                        <small>Delegated Against</small><div className="color against count">{stats.againstDelegatedPercentage.toFixed(0)}%</div>
                    </div>
                </div>

                <div className="d-flex d-flex justify-content-between mt-4">
                    <div className="d-flex align-items-center">
                        <div
                            onClick={() => handleUserVote('for')}
                            className={`button_ ${userVote === 'for' && 'selected'}`}
                        >
                            For
                            <div className="d-flex ml-3 my-n2 mr-n1">
                                <Link to="/profile" className="vote-avatar avatar-1 for ml-n2 d-none d-md-block"></Link>
                                <div className="vote-avatar count for ml-n2">{3}</div>
                            </div>
                        </div>
                        <div className="d-flex ml-2">
                            {/* <Link to="/profile" className="vote-avatar avatar-1 for ml-n2"></Link> */}
                            <Link to="/profile" className="vote-avatar avatar-2 for ml-n2 d-none d-md-block"></Link>
                            <Link to="/profile" className="vote-avatar avatar-3 for ml-n2 d-none d-md-block"></Link>
                            <div className="vote-avatar count for ml-n2">{numeral(defaults.forCount).format('0a')}</div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex ml-2">
                            <Link to="/profile" className="vote-avatar avatar-4 against ml-n2 d-none d-md-block"></Link>
                            {/* <Link to="/profile" className="vote-avatar avatar-5 against ml-n2 d-none d-md-block"></Link> */}
                            <Link to="/profile" className="vote-avatar avatar-6 against ml-n2 d-none d-md-block"></Link>
                            {/* <div className="vote-avatar avatar-1 ml-n2" /> */}
                            <div className="vote-avatar count against ml-n2">{numeral(defaults.againstCount).format('0a')}</div>
                        </div>
                        <div
                            onClick={() => handleUserVote('against')}
                            className={`button_ ${userVote === 'against' && 'selected'}`}
                        >
                            Against
                            <div className="d-flex ml-3 my-n2 mr-n1">
                                <Link to="/profile" className="vote-avatar avatar-5 against ml-n2 d-none d-md-block"></Link>
                                <div className="vote-avatar count against ml-n2">{1}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 d-flex align-items-center">
                    <GroupSvg />
                    <Link to="/group/Algarve Flats" className="badge ml-1">Algarve Flats</Link>
                    <Link to="/group/Algarve" className="badge ml-1">Algarve</Link>
                    <Link to="/group/Algarve Flats" className="badge ml-1">Deloitte Deserters</Link>
                    <Link to="/group/Algarve Flats" className="badge ml-1">💩s</Link>
                    <div className="badge ml-1">+3</div>
                    <Link to="#" className="button_ small mb-0">
                        +
                    </Link>
                </div>

                <br />

                <h3>Sub polls</h3>
                <div className="bar-container-horizontal">
                    {onSubTopics.map((l, i) => (
                        <SubVote
                            l={{ ...l, name: voteName }}
                            i={i}
                        />
                    ))}
                    <div className="d-flex justify-content-center mt-3" data-tip="Create Sub Poll">
                        <Link to="/create-sub-vote/Equal Rights" className="button_ icon-contain inverted">
                            <DropPlusSVG />
                        </Link>
                    </div>
                </div>


                <hr />

                <h3>Votes by</h3>

                <br />
                <div>
                    <h5 onClick={() => openStats("Your Groups")}>Your Groups</h5>
                    <div className="bar-container">
                        {byGroups.yourGroup.map((l, i) => (
                            <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                                <VoteGraph1 key={`a-${i}`} {...l} group="YourGroup" />
                            </div>
                        ))}
                    </div>

                    <br />
                    <h4 onClick={() => openStats("Your Representatives")}>Your Representatives</h4>
                    <div className="bar-container">
                        {byGroups.yourRepresentatives.map((l, i) => (
                            <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                                <VoteGraph1 key={`a-${i}`} {...l} group="YourRepresentatives" />
                            </div>
                        ))}
                    </div>

                    <br />
                    <h4 onClick={() => openStats("People you Follow")}>People you Follow</h4>
                    <div className="bar-container">
                        {byGroups.yourRepresentatives.map((l, i) => (
                            <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                                <VoteGraph1 key={`a-${i}`} {...l} group="YourFollowees" />
                            </div>
                        ))}
                    </div>

                    <br />
                    <h4 onClick={() => openStats("Location")}>Locations</h4>
                    <div className="bar-container">
                        {byGroups.location.map((l, i) => (
                            <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                                <VoteGraph1 key={`a-${i}`} {...l} group="Location" />
                            </div>
                        ))}
                    </div>

                    <br />
                    <h4 onClick={() => openStats("Age Groups")}>Age Groups</h4>
                    <div className="bar-container">
                        {byGroups.age.map((l, i) => (
                            <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                                <VoteGraph1 key={`a-${i}`} {...l} group="Age Groups" />
                            </div>
                        ))}
                    </div>

                    <br />
                    <h4 onClick={() => openStats("Location")}>Occupations</h4>
                    <div className="bar-container">
                        {byGroups.occupation.map((l, i) => (
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
                        {byGroups.approvalOnOtherTopics.map((l, i) => (
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
                </div>

            </div>

            <br />
            <hr />
            <div>
                <h3>Converstation</h3>

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
