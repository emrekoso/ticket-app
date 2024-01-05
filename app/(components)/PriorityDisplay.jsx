import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire} from "@fortawesome/free-solid-svg-icons";

const PriorityDisplay = ({priority}) => {
    return (
        <div className="flex justify-start align-baseline">
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 0 ? "text-red-400" : "text-slate-500"}`}/>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 1 ? "text-red-400" : "text-slate-500"}`}/>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 2 ? "text-red-400" : "text-slate-500"}`}/>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 3 ? "text-red-400" : "text-slate-500"}`}/>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 4 ? "text-red-400" : "text-slate-500"}`}/>
            <FontAwesomeIcon icon={faFire} className={`pr-1 ${priority > 5 ? "text-red-400" : "text-slate-500"}`}/>
        </div>
    );
};

export default PriorityDisplay;