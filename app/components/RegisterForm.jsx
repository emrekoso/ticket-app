"use client"

import React, {useState} from 'react';
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
        }

        try {

            const resUserExists = await fetch('api/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });

            const {user} = await resUserExists.json();

            if (user){
                setError("User already exists.");
                return;
            }

            const res = await fetch('api/Register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password,
                }),
            });
            if (res.ok) {
                const form = e.target;
                form.reset();
                setError("");
                router.push("/")

            } else {
                console.log("User registering is failed.")
            }
        } catch (error) {
            console.log("Error during registering.", error)
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <div>
                <h1>register</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setName(e.target.value)} type="text" placeholder="name"/>
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="email"/>
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
                    <button>Register</button>

                    {error &&
                        (
                            <div>
                                {error}
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;