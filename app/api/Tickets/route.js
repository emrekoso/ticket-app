import Ticket from "@/app/(model)/Ticket";
import {NextResponse} from "next/server";

export async function POST(req) {

    try {
        const body = await req.json()
        const ticketData = body.formData
        await Ticket.create(ticketData)

        return NextResponse.json({message: "Ticket Created"}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Error2", error}, {status: 500});
    }
}

export async function GET() {
    try {
        const tickets = await Ticket.find();
        return NextResponse.json({tickets}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Error1", error}, {status: 500});

    }
}