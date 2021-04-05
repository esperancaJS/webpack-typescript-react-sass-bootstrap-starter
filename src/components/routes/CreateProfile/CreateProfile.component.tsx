import * as React from "react";
import { useForm } from "react-hook-form";

import Header from "@shared/Header";
import BackArrowSVG from "@shared/Icons/BackArrow.svg";

export default function CreateProfile() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (values: any) => console.log(values);

    return (
        <>
            <Header title="A bit about you" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && errors.email.message}

                <input
                    {...register("username", {
                        required: "Required",
                        validate: (value) => value !== "admin" || "Nice try!"
                    })}
                    name="username"
                />
                {errors.username && errors.username.message}

                <button type="submit">Submit</button>

                <pre>{JSON.stringify(errors, null, 2)}</pre>
            </form>
        </>
    );
}
