import SummaryItem from "./SummaryItem";
import { Task } from "../../App";


const Summary = ({ tasks }: {tasks: Task[] }) => {

    const total = tasks.length;
    const pending = tasks.filter((filter) => filter.done === false).length;
    const done = tasks.filter((filter) => filter.done === true).length;

    return (
        <>
        <div className="flex justify-between">
            <SummaryItem itemName={"Total"} itemValue={total} />
            <SummaryItem itemName={"To Do"} itemValue={pending} />
            <SummaryItem itemName={"Done"} itemValue={done} />
        </div>
        </>
    );
};

export default Summary;
