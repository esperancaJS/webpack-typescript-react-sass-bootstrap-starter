---
to: <%=cwd %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.tsx
---
import React, { FunctionComponent } from 'react';

import './style.sass';

export const <%= h.changeCase.pascal(name) %>: FunctionComponent<{}> = ({}) => {
    return (
        <>
            <p><%= name %></p>
        </>
    );
}

