import * as React from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize';
import { useParams } from 'react-router-dom';

import BackArrowSVG from "@shared/Icons/BackArrow.svg";
import Header from "@shared/Header";
import VoteGraph1 from "@shared/VoteGraph1";

import "./style.sass";

const startTextOptions = [
    "approve",
    "believe",
    "like",
    "want"
];

const textJoinOptions = [
    "for",
    "among",
    "across",
    "including",
    "excluding",
];

export default function CreateVote() {

    let { voteName } = useParams();

    const { handleSubmit, register, setValue, watch } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            startText: startTextOptions[0],
            textJoin: textJoinOptions[0],
            voteText: ""
        }
    });
    const onSubmit = (values: any) => alert(values);

    // const values = getValues();
    const watchAllFields = watch();

    const setNextStartText = () => {
        const index = startTextOptions.indexOf(watchAllFields.startText);
        const optionsLength = startTextOptions.length;

        setValue(
            "startText",
            startTextOptions[optionsLength === index + 1 ? 0 : index + 1]
        );
    };

    const setNextTextJoin = () => {
        const index = textJoinOptions.indexOf(watchAllFields.textJoin);
        const optionsLength = textJoinOptions.length;

        setValue(
            "textJoin",
            textJoinOptions[optionsLength === index + 1 ? 0 : index + 1]
        );
    };

    return (
        <>
            <Header title="Launch Opinion Poll" />
            <form className="voteForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex">
                    <h2 className="mb-0 mr-1 textAndInputWrapper">
                        Do you
                    </h2>
                    <input
                        {...register("startText", {
                            required: "Required"
                        })}
                        onClick={() => setNextStartText()}
                    />
                </div>
                {voteName && (
                    <div className="d-flex">
                        <h2 className="mb-0 mr-1 textAndInputWrapper">
                            <b>
                                {voteName}
                            </b>
                        </h2>
                        <input
                            {...register("textJoin", {
                                required: "Required"
                            })}
                            onClick={() => setNextTextJoin()}
                        />
                    </div>
                )}
                <TextareaAutosize
                    autoFocus
                    name="voteText"
                    value={watchAllFields.voteText + "?"}
                    onSelect={(e) => {
                        // move cursor to before "?"
                        if (e.target.value.length === e.target.selectionStart) {
                            e.target.selectionStart = e.target.value.length - 1;
                            e.target.selectionEnd = e.target.value.length - 1;
                        }
                    }}
                    onChange={(e) => {
                        // remove "?" from value
                        setValue(
                            "voteText",
                            e.target.value.replaceAll('?', '')
                        );
                    }}
                />

                {/* <div className="bar-wrapper py-2 pb-4">
                    <VoteGraph1 {...{
                        name: null,
                        flexSize: 1,
                        forCount: 0,
                        againstCount: 0,
                        userVote: null,
                        userDelegatedVotes: null
                    }} />
                </div> */}

                <div className="d-flex justify-content-end">
                    <button
                        className="button_"
                        type="submit"
                    >Launch Vote</button>
                </div>

                {/* <pre>{JSON.stringify(watchAllFields, null, 2)}</pre> */}
            </form>
        </>
    );
}
