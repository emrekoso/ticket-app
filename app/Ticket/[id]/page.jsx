import React from 'react';
import TicketForm from "@/app/(components)/EditTicketForm";
import Navigation from "@/app/(components)/Navigation";

const getTicketById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("Failed to get ticket.")
    }

    return res.json();
}
const TicketPage = async ({params}) => {
    const EditMod = params.id !== "new";
    let updateTicketData = {}


    if (EditMod){
        updateTicketData = await getTicketById(params.id);
        updateTicketData = updateTicketData.foundTicket;
    } else {
        updateTicketData = {
            _id: "new"
        }
    }
    return (
        <div>
        <div>
            <Navigation/>
        </div>
        <div>
        <TicketForm ticket={updateTicketData}/>
        </div>
        </div>
    );
};

export default TicketPage;