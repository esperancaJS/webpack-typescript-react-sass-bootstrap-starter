import * as React from "react";
import { useHistory } from "react-router-dom";
import numeral from 'numeral';

export default function Chart({
    name,
    showNameInside,
    forDirectCount,
    forCount,
    againstDirectCount,
    againstCount,
    userVote = null,
    userDelegatedVotes = null
}: {
    name: string | null,
    showNameInside?: boolean,
    forDirectCount: number,
    forCount: number,
    againstDirectCount: number
    againstCount: number,
    userVote: boolean | null,
    userDelegatedVotes:
    | [
        {
            avatar: string;
            vote: boolean;
        }
    ]
    | null;
}) {

    const history = useHistory();

    const navigateTo = (to: any) => {
        history.push(`/vote/${to}`);
    };

    const forPercentage = (forCount / (forCount + againstCount)) * 100 || 50;
    const forDirectPercentage = (forDirectCount / (forCount + againstCount)) * 100 || 50;
    const againstPercentage = 100 - forPercentage;
    const againstDirectPercentage = (againstDirectCount / (forCount + againstCount)) * 100 || 50;

    return (
        <svg className={`chart1 ${name === null && 'main'}`} width="100%" height="100%">
            <defs>
                <pattern
                    id="image"
                    x="0%"
                    y="0%"
                    height="100%"
                    width="100%"
                    viewBox="0 0 30 30"
                >
                    <image
                        x="0%"
                        y="0%"
                        width="30"
                        height="30"
                        href="https://pbs.twimg.com/profile_images/1257731768569917440/DXgWC7tR_400x400.jpg"
                    ></image>
                </pattern>
            </defs>

            {/* recatangles */}
            <rect
                className="for"
                x="0%"
                width={forPercentage + "%"}
                height="100%"
            />
            <rect
                className="forDirect"
                x="0%"
                width={forDirectPercentage + "%"}
                height="100%"
            />
            <rect
                className="against"
                x={forPercentage + "%"}
                width={againstPercentage + "%"}
                height="100%"
            />
            <rect
                className="againstDirect"
                x={forPercentage + "%"}
                width={againstDirectPercentage + "%"}
                height="100%"
            />

            {/* {forPercentageOnOther !== null && (
                <>
                    <rect
                        className="for"
                        x="0%"
                        width={forPercentageOnOther + "%"}
                        height="60%"
                        fill="green"
                    />
                    <rect
                        className="against"
                        x={forPercentageOnOther + "%"}
                        width={100 - forPercentageOnOther + "%"}
                        height="60%"
                    />
                </>
            )} */}

            {/* Avatars */}
            {userVote !== null && (
                <>
                    {userVote ? (
                        <svg x="0" y="0">
                            <circle
                                className="avatar"
                                cx="20"
                                cy="16"
                                r="13"
                                fill="url(#image)"
                                strokeWidth="2"
                            />
                        </svg>
                    ) : (
                        <svg x={100 + "%"} y="0" style={{ overflow: "visible" }}>
                            <circle
                                className="avatar"
                                cx="-20"
                                cy="16"
                                r="13"
                                fill="url(#image)"
                                strokeWidth="2"
                            />
                        </svg>
                    )}
                </>
            )}

            {/* Top Left Texts */}
            {name === null ? (
                <>
                    <svg x="0" y="0">
                        <text
                            y="20"
                            x="5"
                            className="svgText"
                        >
                            For
                        </text>
                    </svg>
                    <svg x={forPercentage + "%"} y="0">
                        <text
                            y="20"
                            x="5"
                            className="svgText"
                        >
                            Against
                        </text>
                    </svg>
                </>
            ) : (
                // <svg x="0" y="0">
                //   <text
                //     y="20"
                //     x="5"
                //     className="svgText"
                //     onClick={() => navigateTo(name)}
                //   >
                //     {name}
                //   </text>
                // </svg>
                <></>
            )}

            {showNameInside && (
                <svg x="0" y="0">
                    <text
                        y="20"
                        x="5"
                        className="svgText"
                        onClick={() => navigateTo(name)}
                    >
                        {name}
                    </text>
                </svg>
            )}

            {/* Count texts */}
            <svg
                x={forPercentage + "%"}
                y="60%"
                style={{ overflow: 'visible' }}
            >
                <text
                    y="20"
                    x={-6 - (`${numeral(forCount).format('0a')}`.length * 5.19)} //5.19 - avg char length
                    className="svgText small"
                >
                    {numeral(forCount).format('0a')}
                </text>
            </svg>
            <svg
                x={forDirectPercentage + "%"}
                y="60%"
                style={{ overflow: 'visible' }}
            >
                <text
                    y="20"
                    x={-6 - (`${numeral(forDirectCount).format('0a')}`.length * 5.19)} //5.19 - avg char length
                    className="svgText small directCount"
                >
                    {numeral(forDirectCount).format('0a')}
                </text>
            </svg>
            <svg x={forPercentage + "%"} y="60%">
                <text
                    y="20"
                    x="5"
                    className="svgText small"
                >
                    {numeral(againstCount).format('0a')}
                </text>
            </svg>
            <svg x={forPercentage + againstDirectPercentage + "%"} y="60%">
                <text
                    y="20"
                    x="5"
                    className="svgText small directCount"
                >
                    {numeral(againstDirectCount).format('0a')}
                </text>
            </svg>
        </svg>
    );
}
