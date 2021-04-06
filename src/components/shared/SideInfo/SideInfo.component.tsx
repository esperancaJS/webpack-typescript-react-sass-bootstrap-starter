import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import {
    voteList
} from "@state/Mock/Votes";

import './style.sass';
import SideVote from "./SideVote";


export const SideInfo: FunctionComponent<{}> = ({ }) => {
    return (
        <>
            <div className="sideInfo">
                <h3>Trending</h3>

                {[
                    { name: "From Nearby" },
                    { name: "From Your Representative" },
                    { name: "From Your Followers" },
                    { name: "[Your Age Group]" },
                    { name: "[Your Occupation]" },
                    { name: "From People who also voted ['For'] on ['Wtv']" },
                ].map(({ name }) => (
                    <div className="sideInfoSection">

                        <Link className="d-flex mb-3" to="/vote/equal rights">
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
            </div>
        </>
    );
}

