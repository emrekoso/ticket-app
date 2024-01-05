"use client"
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {faHouse, faTicket, faUser} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "next-auth/react";
import {useSession} from "next-auth/react";

const Navigation = () => {

    const {data:session} = useSession();

    return (
        <nav className="flex justify-between bg-navigation p-4">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <FontAwesomeIcon icon={faHouse} className="icon"/>
                </Link>
                <Link href="/Ticket/new">
                    <FontAwesomeIcon icon={faTicket} className="icon"/>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <p className="text-default-text">{session?.user?.email}</p>
                <FontAwesomeIcon icon={faUser} className="icon"/>
                <button onClick={() => signOut()} className="text-white">log out</button>
            </div>

        </nav>

    );
};

export default Navigation;