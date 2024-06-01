import TasksItem from "./TasksItem";
import { Task } from "../../App";

const Tasks = ( {
    tasks,
    toggleDone,
    handleDelete
}: {
    tasks: Task[];
    toggleDone: (id:string, done:boolean) => void;
    handleDelete: (id:string) => void;    
} ) => {
    return (
        <div className="flex flex-col gap-2">
            {tasks.length ? (
            tasks.map((filter) => (
               <TasksItem 
               key={filter.id} 
               name={filter.name}
               done={filter.done}
               id={filter.id}
               toggleDone={toggleDone}
               handleDelete={handleDelete} 
               />  
            ))
            ) : (
                <span className="text-green-100">No Task Yet!</span>
            )
        }
           
        </div>
    );
};


export default Tasks;

