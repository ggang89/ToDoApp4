import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState({ todoTitle: " ", isEditing: false });
  const [todoList, setTodoList] = useState([
    {
      id: "id1",
      todoTitle: "Todo App 만들기",
      isEditing: false,
    },
    { id: "id2", todoTitle: "REACT 공식문서 공부", isEditing: false },
  ]);
  const edit = () => {
    setTodo({ ...todo, isEditing: !todo.isEditing });
  };
  const handleText = (e) => {
    setTodo({ ...todo, todoTitle: e.target.value });
    console.log(e.target.value);
    
  };
  return (
    <>
      <div className="addTodo">
        <label htmlFor="todo">NEW ToDo </label>
        <input
          id="todo"
          type="text"
          size="50"
          placeholder="Add Todo..."
        ></input>
        <button>추가</button>
      </div>

      <ul className="todolistBox">
        {todoList.map(t=>(
          <TodoList
          isEditing={todo.isEditing}
          todoTitle={todo.todoTitle}
          edit={edit}
          handleText={handleText}
        />
        ))}
        
        <li className="todolist">
          <p>{todo.todoTitle}</p>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </>
  );
}