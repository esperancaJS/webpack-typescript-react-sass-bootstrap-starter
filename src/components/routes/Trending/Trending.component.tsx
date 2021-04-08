import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import Header from "@shared/Header";
import {
    voteList
} from "@state/Mock/Votes";
import SideVote from "@shared/SideVote";

import './style.sass';

export const Trending: FunctionComponent<{}> = ({ }) => {
    return (
        <>
            <Header title="Trending" />


            {[
                { name: "From [Work Group]" },
                { name: "From [Side Project Group]" },
                { name: "From Nearby" },
                { name: "From Your Representatives" },
                { name: "From People you Follow" },
                { name: "From [Your Age Group]" },
                { name: "From [Your Occupation]" },
                { name: "From People who also voted ['For'] on ['Something']" },
            ].map(({ name }) => (
                <div className="sideInfoSection my-3 mx-0">

                    <Link className="d-flex mb-3" to={`/group/group/${name}`}>
                        {name}
                    </Link>

                    <div className="bar-container-horizontal">
                        {voteList.map((l, i) => (
                            <SideVote
                                l={l}
                                i={i}
                            />
                        ))}
                    </div>
                </div>
            ))}


        </>
    );
}

