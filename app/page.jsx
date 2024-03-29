import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/app/components/LoginForm";


export default async function Home() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard")

    return (
        <main>
            <LoginForm/>
        </main>
    )

}
