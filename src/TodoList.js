import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInputField from "./TodoInputField";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        "Buy more coffee beans",
        "Empty compost bin",
    ]);

    const handleAddTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task])
    }

    return (
        <>
            <TodoInputField onAddTask={handleAddTask} />

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
