import React from 'react';
import Main from "@/app/components/Main";
import Navigation from "@/app/(components)/Navigation";

export default function Dashboard() {
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <div>
                <Main/>
            </div>
        </div>
    )
}