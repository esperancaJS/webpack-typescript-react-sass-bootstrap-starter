import React, { FunctionComponent } from 'react';

import Header from "@shared/Header";
import GroupInList from "@shared/GroupInList";

import './style.sass';

export const Groups: FunctionComponent<{}> = ({ }) => {
    return (
        <>
            <Header title="Your Groups" />

            <div>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
                    <GroupInList />
                ))}
            </div>
        </>
    );
}

