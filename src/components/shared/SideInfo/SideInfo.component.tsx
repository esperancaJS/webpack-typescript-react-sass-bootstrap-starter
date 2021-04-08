import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import {
    voteList
} from "@state/Mock/Votes";

import './style.sass';
import SideVote from "@shared/SideVote";


export const SideInfo: FunctionComponent<{}> = ({ }) => {
    return (
        <>
            <div className="sideInfo d-none d-md-block">
                <h3>Trending</h3>

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
                    <div className="sideInfoSection">

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
            </div>
        </>
    );
}

