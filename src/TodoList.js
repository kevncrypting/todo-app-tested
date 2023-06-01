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

    const handleDeleteTask = (task) => {
        setTasks(prevTasks => prevTasks.filter(taskItem => taskItem !== task))
    }

    return (
        <>
            <TodoInputField onAddTask={handleAddTask} />

            <ul>
                {tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            <TodoItem task={task} onDeleteTask={handleDeleteTask}/>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default TodoList;
