import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import './style.sass';

export const SideInfo: FunctionComponent<{}> = ({}) => {
    return (
        <>
          <div className="sideInfo">
            <Link to="/vote/equal rights">
                Trending
            </Link>
            <Link to="/vote/equal rights">
                Trending Nearby
            </Link>
            <Link to="/vote/equal rights">
                Trending among Representors
            </Link>
            <Link to="/vote/equal rights">
                Trending among Following
            </Link>
            <Link to="/vote/equal rights">
                Trending among Your Age Group
            </Link>
            <Link to="/vote/equal rights">
                Trending among Your Occupation
            </Link>
            <Link to="/vote/equal rights">
                Trending among People with similar Votes
            </Link>
        </div>
        </>
    );
}

