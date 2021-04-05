import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";

export default function useSearchParams() {
    const location = useLocation();
    const history = useHistory();

    const allSearchParams = Object.fromEntries(new URLSearchParams(location.search)) as {
        theme?: '1' | '2' | '3',
    };

    const getNewSearchParamsString = ({
        keysToRemove,
        paramsToAdd
    }: {
        keysToRemove?: Array<string>,
        paramsToAdd?: Object
    }) =>
        new URLSearchParams(Object.entries({
            ...allSearchParams,
            ...paramsToAdd
        })
            .filter(([k, v]) => !keysToRemove?.includes(k))
            .reduce((p, [k, v]) => ({ ...p, [k]: v }), {})).toString();

    const updateParams = ({ search }: { search: string }) =>
        history.push({
            pathname: location.pathname,
            search
        })

    return {
        allSearchParams,
        getNewSearchParamsString,
        updateParams
    };
}