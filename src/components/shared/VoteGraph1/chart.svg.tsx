import * as React from "react";
import numeral from 'numeral';

export default function Chart({
    name,
    forCount,
    againstCount,
    userVote = null,
    userDelegatedVotes = null
}: {
    name: string | null;
    forCount: number,
    againstCount: number,
    userVote: boolean | null;
    userDelegatedVotes:
    | [
        {
            avatar: string;
            vote: boolean;
        }
    ]
    | null;
}) {
    const navigateTo = (to: any) => {
        alert(`TODO: navigate to ${to}`);
    };

    const voteOn = (vote: any) => {
        alert(`TODO: vote on ${vote}`);
    };

    const forPercentage = (forCount / (forCount + againstCount)) * 100 || 50;

    return (
        <svg className="chart1" width="100%" height="100%">
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
                fill="green"
            />
            <rect
                className="against"
                x={forPercentage + "%"}
                width={100 - forPercentage + "%"}
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
                        <svg x="0" y="25">
                            <circle
                                cx="20"
                                cy="20"
                                r="13"
                                fill="url(#image)"
                                strokeWidth="2"
                            />
                        </svg>
                    ) : (
                        <svg x={100 + "%"} y="25" style={{ overflow: "visible" }}>
                            <circle
                                cx="-20"
                                cy="20"
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
                            onClick={() => voteOn("for")}
                        >
                            For
                        </text>
                    </svg>
                    <svg x={forPercentage + "%"} y="0">
                        <text
                            y="20"
                            x="5"
                            className="svgText"
                            onClick={() => voteOn("against")}
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

            {/* Count texts */}
            <svg x={forPercentage + "%"} y="60%">
                <text
                    y="20"
                    x="5"
                    className="svgText small"
                    onClick={() => voteOn("against")}
                >
                    {numeral(againstCount).format('0a')}
                </text>
            </svg>
            <svg
                x={forPercentage + "%"}
                y="60%"
                style={{ overflow: 'visible' }}
            >
                <text
                    y="20"
                    x={-6 - (`${numeral(forCount).format('0a')}`.length * 5.19)} //5.19
                    className="svgText small"
                    onClick={() => voteOn("against")}
                >
                    {numeral(forCount).format('0a')}
                </text>
            </svg>

        </svg>
    );
}
