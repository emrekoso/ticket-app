import DeleteBlock from "@/app/(components)/DeleteBlock";
import PriorityDisplay from "@/app/(components)/PriorityDisplay";
import ProgressBar from "@/app/(components)/ProgressBar";
import Status from "@/app/(components)/Status";
import Link from "next/link";

const TicketCard = ({ticket}) => {

    const formatTimestamp = (timestamp) => {
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            min: "2-digit",
            hour12: true
        }

        const date = new Date(timestamp)
        const formattedDate = date.toLocaleString("en-TR", options);

        return formattedDate;
    }
    return (
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay priority={ticket.priority}/>
                <div className="ml-auto">
                    <DeleteBlock id={ticket._id} />
                </div>
            </div>
            <Link href={`/Ticket/${ticket._id}`} style={{
                display:"contents"
            }}>
                <h4>{ticket.title}</h4>
                <hr className="h-px border-0 bg-page mb-2"/>
                <p className="whitespace-pre-wrap">{ticket.description}</p>
                <div className="flex-grow"></div>
                <div className="flex mt-2">
                    <div className="flex flex-col">
                        <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
                        <ProgressBar progress={ticket.progress}/>
                    </div>
                    <div className="ml-auto flex items-end">
                        <Status status={ticket.status}/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TicketCard;