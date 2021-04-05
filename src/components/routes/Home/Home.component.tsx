import React, { FunctionComponent } from 'react';

import Header from "@shared/Header";

import './style.sass';

export const Home: FunctionComponent<{}> = ({}) => {
    return (
        <>
            <Header title="Home" />
            
            <p>Home</p>
        </>
    );
}

