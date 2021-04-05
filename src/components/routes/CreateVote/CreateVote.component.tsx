import * as React from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize';

import BackArrowSVG from "@shared/Icons/BackArrow.svg";
import Header from "@shared/Header";
import VoteGraph1 from "@shared/VoteGraph1";

import "./style.sass";

const startTextOptions = [
    "Do you approve of",
    "Do you believe in",
    "Do you like",
    "Do you want"
];

export default function CreateVote() {
    const { handleSubmit, register, setValue, watch } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            startText: startTextOptions[0],
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

    return (
        <>
            <Header title="Launch Poll" />
            <form className="voteForm" onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("startText", {
                        required: "Required"
                    })}
                    onClick={() => setNextStartText()}
                />
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
