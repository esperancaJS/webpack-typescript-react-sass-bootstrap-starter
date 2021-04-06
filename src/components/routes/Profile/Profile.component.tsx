import * as React from "react";

import BackArrowSVG from "@shared/Icons/BackArrow.svg";
import LinkSVG from "@shared/Icons/Link.svg";
import CalendarSVG from "@shared/Icons/Calendar.svg";
import LocationSVG from "@shared/Icons/Location.svg";
import AddNotificationSVG from "@shared/Icons/AddNotification.svg";
import DropSVG from "@shared/Icons/Drop.svg";
import Header from "@shared/Header";
import VoteGraph1 from "@shared/VoteGraph1";
import { profileVotes } from "@state/Mock/Votes";

import './style.sass';

export default function Profile() {
    const [isRepresenting, setIsRepresenting] = React.useState(false);

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
                    {/* <div className="button_">
                        <AddNotificationSVG />
                    </div> */}
                    <div
                        onClick={() => setIsRepresenting(!isRepresenting)}
                        className={`button_ ${isRepresenting ? "selected" : ""}`}
                    >
                        {isRepresenting ? "Represents You" : "Delegate Votes To"}
                        <span className="ml-2 mr-1 mt-n2"> 
                            <DropSVG />
                        </span>
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

            <hr />

            <h3>Dan's Opinions</h3>

            <div>
                {profileVotes.map((l, i) => (
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
