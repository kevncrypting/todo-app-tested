const TodoItem = ({ task, onDeleteTask }) => {
    const handleDeleteTask = () => {
        onDeleteTask(task);
    };

    return (
        <article>
            <span>{task}</span>
            <button onClick={handleDeleteTask}>Delete</button>
        </article>
    );
};

export default TodoItem;
