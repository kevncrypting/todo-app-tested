import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInputField from "./TodoInputField";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        "Buy more coffee beans",
        "Empty compost bin",
    ]);

    return (
        <>
            <TodoInputField />
            
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            <TodoItem task={task} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default TodoList;
