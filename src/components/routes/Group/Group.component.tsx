import React, { FunctionComponent } from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from "@shared/Header";
import LinkSVG from "@shared/Icons/Link.svg";
import CalendarSVG from "@shared/Icons/Calendar.svg";
import LocationSVG from "@shared/Icons/Location.svg";
import { profileVotes } from "@state/Mock/Votes";
import VoteWrapper from "@shared/VoteWrapper";
import LockSVG from "@shared/Icons/Lock.svg";
import WorldSVG from "@shared/Icons/World.svg";
import WorldlockSVG from "@shared/Icons/Worldlock.svg";
import PersonInList from '@shared/PersonInList'
import GroupInList from "@shared/GroupInList";

import './style.sass';

export const Group: FunctionComponent<{}> = ({ }) => {

    let { groupName, section } = useParams<any>();

    const [isRepresenting, setIsRepresenting] = React.useState(false);
    const [isJoined, setIsJoined] = React.useState(false);

    return (
        <>
            <Header title={groupName} />


            <div className="profile-top">
                <div className="cover" />
                {/* <div className="profile-avatar bg"></div> */}
                <div className="profile-buttons-container">
                    {/* <div className="button_">
                        <AddNotificationSVG />
                    </div> */}
                    <div
                        onClick={() => setIsJoined(!isJoined)}
                        className={`button_ ${isJoined ? "selected" : ""}`}
                    >
                        {isJoined ? "Joined" : "Join"}
                    </div>
                    <div
                        onClick={() => setIsRepresenting(!isRepresenting)}
                        className={`button_ ${isRepresenting ? "selected" : ""}`}
                    >
                        {isRepresenting ? "Represents You" : "Delegate Votes To"}
                    </div>
                </div>
            </div>
            <h2 className="profile-name mt-n5">
                {groupName}
                <div className="d-inline ml-1">
                    {/* <LockSVG /> */}
                    <WorldSVG />
                    {/* <WorldlockSVG /> */}
                </div>
            </h2>
            <p className="profile-handle">@{groupName.replace(" ", "")}</p>
            <div className="profile-description">
                A community of locals and expats. That own flats in Algarve.
                For personal use, Airbnb, long term renting or whatever.
            </div>
            <div className="profile-icons-container d-flex">
                <div>
                    <LocationSVG />
                    <div>Seattle, WA</div>
                </div>
                <div>
                    <LinkSVG />
                    <a
                        href="#"
                    // target="_blank"
                    // rel="noreferrer"
                    >
                        instagram.com/{groupName}
                    </a>
                </div>
                <div>
                    <CalendarSVG />
                    <div>Started November 2013</div>
                </div>
            </div>
            <div className="profile-stats-container">
                <Link to={`/group/${groupName}/members`}>
                    <b>1.3k</b> Members
                </Link>
                <Link to="/profile-people/represented" className="ml-2">
                    <b>459</b> Represented by {groupName}
                </Link>
            </div>


            <ul className="nav d-flex justify-content-around mt-1 mb-n4 mx-n3">
                <li className="nav-item">
                    <Link className={`nav-link ${section === 'votes' && 'active'}`} to={`/group/${groupName}/votes`}>
                        <b>263</b> Votes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${section === 'members' && 'active'}`} to={`/group/${groupName}/members`}>
                        <b>1.3K</b> Members
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${section === 'subgroups' && 'active'}`} to={`/group/${groupName}/subgroups`}>
                        <b>16</b> Sub Groups
                    </Link>
                </li>
            </ul>


            <hr />

            { section === 'votes' && (
                <div>
                    {profileVotes.map((l, i) => (
                        <VoteWrapper l={l} />
                    ))}
                </div>
            )}
            { section === 'members' && (
                <div className="mt-n2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
                        <PersonInList />
                    ))}
                </div>
            )}
            { section === 'subgroups' && (
                <div className="mt-n2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
                        <GroupInList />
                    ))}
                </div>
            )}

        </>
    );
}

