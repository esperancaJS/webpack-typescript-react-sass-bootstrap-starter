import * as React from "react";

import BackArrowSVG from "@shared/Icons/BackArrow.svg";
import LinkSVG from "@shared/Icons/Link.svg";
import CalendarSVG from "@shared/Icons/Calendar.svg";
import LocationSVG from "@shared/Icons/Location.svg";
import AddNotificationSVG from "@shared/Icons/AddNotification.svg";
import Header from "@shared/Header";
import VoteGraph1 from "@shared/VoteGraph1";

import './style.sass';

export default function Profile() {
    const [isRepresenting, setIsRepresenting] = React.useState(false);

    const defaults = {
        name: null,
        flexSize: 1,
        forPercentage: 70,
        userVote: true,
        userDelegatedVotes: null
    };

    const byApprovalOnOtherTopics = [
        {
            ...defaults,
            name: "Equality",
            flexSize: 7,
            forPercentage: 70
            // forPercentageOnOther: 90
        },
        {
            ...defaults,
            name: "BLM",
            flexSize: 5,
            forPercentage: 60
            // forPercentageOnOther: 50
        },
        {
            ...defaults,
            name: "LGBT Rights",
            forPercentage: 90,
            flexSize: 3
            // forPercentageOnOther: 40
        },
        {
            ...defaults,
            name: "Libertarianism",
            forPercentage: 40,
            flexSize: 1,
            userVote: false
        },
        {
            ...defaults,
            name: "Mercantilism",
            forPercentage: 30,
            flexSize: 1,
            userVote: false
        }
    ];

    return (
        <>
            <div className="top border-bottom">
                <BackArrowSVG />
                <div className="top-text-container">
                    <div>Dan Price</div>
                </div>
            </div>
            <div className="profile-top">
                <div className="cover" />
                <div className="profile-avatar bg"></div>
                <div className="profile-buttons-container">
                    <div className="button_">
                        <AddNotificationSVG />
                    </div>
                    <div
                        onClick={() => setIsRepresenting(!isRepresenting)}
                        className={`button_ ${isRepresenting ? "selected" : ""}`}
                    >
                        {isRepresenting ? "Represents You" : "Delegate Opinions To"}
                    </div>
                </div>
            </div>
            <h2 className="profile-name">Dan Price</h2>
            <p className="profile-handle">@DanPriceSeattle</p>
            <div className="profile-description">
                I cut my CEO pay by a million dollars so all workers could make at
                least $70,000 per year. <br />
                <br />
                Author of WORTH IT - buy it for your boss from a small bookstore
            </div>
            <div className="profile-icons-container d-flex">
                <div>
                    <LocationSVG />
                    <div>Seattle, WA</div>
                </div>
                <div>
                    <LinkSVG />
                    <a
                        href="//instagram.com/danpriceseattle"
                        target="_blank"
                        rel="noreferrer"
                    >
                        instagram.com/danpriceseattle
                    </a>
                </div>
                <div>
                    <CalendarSVG />
                    <div>Joined November 2013</div>
                </div>
            </div>
            <div className="profile-stats-container">
                <div>
                    <b>1,063</b> Representing Dan
                </div>
                <div>
                    <b>229.1K</b> Represented by Dan
                </div>
            </div>

            <div>
                {byApprovalOnOtherTopics.map((l, i) => (
                    <>
                        <br />
                        <div className="bar-container">
                            <div className="bar-wrapper" style={{ flex: l.flexSize }}>
                                <VoteGraph1 key={`b-${i}`} {...l} />
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}
