import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo])
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/><br />
            <button onClick={addNewTask}> Add Task</button>
            <br /><br /><br />
            <hr />
            <h4>Task todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}