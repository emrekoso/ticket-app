"use client";
import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const res= await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex flex-col gap-5">
            <div>
                <h1>enter ur details</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="email"/>
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
                    <button>login</button>
                    {error && (
                        <div>
                            {error}
                        </div>
                    )}
                    <Link href={"/register"}>Dont you have an account?
                        <span className="underline">Register!</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;