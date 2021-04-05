import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import HomeSvg from "@shared/Icons/Home.svg";
import DropSvg from "@shared/Icons/Drop.svg";
import DropPlusSVG from "@shared/Icons/Drop+.svg";
import NotificationSvg from "@shared/Icons/Notification.svg";
import ProfileSvg from "@shared/Icons/Profile.svg";
import BookmarkSvg from "@shared/Icons/Bookmark.svg";
import AnalyticsSvg from "@shared/Icons/Analytics.svg";

import './style.sass';

export const SideMenu: FunctionComponent<{}> = ({ }) => {
    return (
        <div className="sideMenu">
            <Link to="/home">
                <DropSvg />
            </Link>
            <Link to="/feed">
                <HomeSvg />
            </Link>
            <Link to="/vote">
                <NotificationSvg />
            </Link>
            <Link to="/profile">
                <ProfileSvg />
            </Link>
            <Link to="/vote">
                <BookmarkSvg />
            </Link>
            <Link to="/vote">
                <AnalyticsSvg />
            </Link>
            <Link to="/create-vote" className="button_ inverted icon-contain">
                <DropPlusSVG />
            </Link>
            <Link to="/register">
                <div className="icon">Register</div>
            </Link>
        </div>
    );
}

