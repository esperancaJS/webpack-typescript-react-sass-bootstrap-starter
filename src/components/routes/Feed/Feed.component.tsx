import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import Header from "@shared/Header";
import { feedNotificationVotes } from "@state/Mock/Votes";

import Notification from './Notification';
import './style.sass';

export const Feed: FunctionComponent<{}> = ({ }) => {
    return (
        <>
            <Header title="Your Feed" />

            <br />

            {feedNotificationVotes.map((l, i) => (
                <Notification v={l} />
            ))}
        </>
    );
}

