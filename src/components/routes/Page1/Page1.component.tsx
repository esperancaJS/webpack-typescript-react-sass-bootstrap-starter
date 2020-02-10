import React from 'react';

import env from '@env';

console.log({ env });

export default function Page1() {
    return <>
        <p>Page1</p>

        <pre>{ JSON.stringify(env, null, 2) } </pre>

    </>;
}
