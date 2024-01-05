import User, {connectMongoDB} from "@/app/(model)/Auth";
import {NextResponse} from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id");
        console.log("user:", user)
        return NextResponse.json({user});
    } catch (err) {
        console.log(err)
    }
}