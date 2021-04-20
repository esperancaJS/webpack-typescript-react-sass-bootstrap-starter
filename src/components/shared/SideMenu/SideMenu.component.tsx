import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import HomeSvg from "@shared/Icons/Home.svg";
import RippleDrop from "@shared/Icons/RippleDrop.svg";
import DropPlusSVG from "@shared/Icons/Drop+.svg";
import NotificationSvg from "@shared/Icons/Notification.svg";
import ProfileSvg from "@shared/Icons/Profile.svg";
import ProfilePlusSvg from "@shared/Icons/Profile+.svg";
import TrendingSvg from "@shared/Icons/Trending.svg";
import GroupSvg from "@shared/Icons/Group.svg";

import './style.sass';

export const SideMenu: FunctionComponent<{}> = ({ }) => {
    return (
        <div className="sideMenu">
            <ReactTooltip place="bottom" type="dark" effect="solid" />
            <Link to="/home">
                <RippleDrop />
            </Link>
            <Link to="/group/your/representatives" data-tip="Home">
                <HomeSvg />
            </Link>
            <Link to="/feed" data-tip="Notifications">
                <NotificationSvg />
            </Link>
            <Link to="/trending" data-tip="Trending" className="d-block d-md-none">
                <TrendingSvg />
            </Link>
            <Link to="/groups" data-tip="Your Groups">
                <GroupSvg />
            </Link>
            {/* <Link to="/feed">
                <BookmarkSvg />
            </Link>
            <Link to="/feed">
                <AnalyticsSvg />
            </Link> */}
            <br />
            <br />
            <br />
            <br />
            <Link to="/profile" data-tip="Demo Profile">
                <ProfileSvg />
            </Link>
            <Link to="/create-vote" data-tip="Create Poll" className="button_ inverted icon-contain">
                <DropPlusSVG />
            </Link>
        </div>
    );
}

