import React, { FunctionComponent, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

import './style.sass';
import Header from "@shared/Header";
import { voteList } from "@state/Mock/Votes";
import VoteGraph1 from "@shared/VoteGraph1";
import VoteWrapper from "@shared/VoteWrapper";

const groups = {
    "your": ["representatives", "followers"],
    "location": ["London", "Lisbon"],
    "Age Group": ["10-18", "19-25"],
    "Occupation": ["Student", "Sales", "Doctor", "IT", "Lobbyist"],
};

export const Group: FunctionComponent<{}> = ({ }) => {

    let { groupType, groupFilter } = useParams<any>();

    return (
        <>
            <Header title="Grouping By:" />

            <div className="d-flex justify-content-between align-items-center mt-3">
                <h3 className="m-0">
                    <span className="toggleableText">{groupType}</span>
                    ・
                    <span className="toggleableText">{groupFilter}</span>
                </h3>
                <div className="toggleableText">
                    trending
                </div>
            </div>

            <hr />

            <div className="bar-container-horizontal">
                {voteList.map((l, i) => (
                    <VoteWrapper l={l} />
                ))}
            </div>
        </>
    );
}

