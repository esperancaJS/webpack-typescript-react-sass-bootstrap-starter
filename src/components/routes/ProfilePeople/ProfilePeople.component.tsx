import React, { FunctionComponent } from 'react';
import Header from "@shared/Header";
import { Link, useParams } from "react-router-dom";

import PersonInList from '@shared/PersonInList'

import './style.sass';

export const ProfilePeople: FunctionComponent<{}> = ({ }) => {

    let { which } = useParams<any>();

    return (
        <>
            <Header title="Dan Price" noBottom={true} />
            <ul className="nav d-flex justify-content-around mt-1 mb-n4 mx-n3">
                <li className="nav-item">
                    <Link className={`nav-link ${which === 'representing' && 'active'}`} to="/profile-people/representing">
                        <b>1,063</b> Representing Dan
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${which === 'represented' && 'active'}`} to="/profile-people/represented">
                        <b>229.1K</b> Represented by Dan
                    </Link>
                </li>
            </ul>
            <hr />

            <div className="mt-n2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
                    <PersonInList />
                ))}
            </div>
        </>
    );
}

