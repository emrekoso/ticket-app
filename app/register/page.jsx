import React from 'react';
import RegisterForm from "@/app/components/RegisterForm";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const Register = async () => {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");
    return (
        <div>
            <RegisterForm/>
        </div>
    );
};

export default Register;