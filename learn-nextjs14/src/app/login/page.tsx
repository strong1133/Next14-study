"use client";

import {signIn} from "next-auth/react";
import {useState} from "react";
import {AuthError} from "next-auth";
import { useFormState } from "react-dom"
import {authenticate} from "@/app/login/actions";



export default function Page() {
    const [count, setCount] = useState(0)
    const [errorMsg, dispatch] = useFormState(authenticate, undefined)
    return (
        <div>
            <h1>Login</h1>
            <form className="flex flex-col" action={dispatch}>
                <input className="bg-blue-300 text-black" name="id"></input>
                <input className="bg-yellow-300 text-black" name="password" type="password"></input>
                <button>
                    Log In
                </button>
                <p>{errorMsg}</p>
            </form>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount((count) => count + 1)}>Click me</button>
            </div>
        </div>

    );
}

