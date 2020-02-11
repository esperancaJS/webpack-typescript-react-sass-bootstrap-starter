---
to: <%=cwd %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.component.js
---
import React from 'react';

import './style.sass';

export default function <%= h.changeCase.pascal(name) %>() {
    return (
        <>
            <p><%= name %></p>
        </>
    );
}

