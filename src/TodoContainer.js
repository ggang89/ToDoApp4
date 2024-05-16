import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export default function TodoContainer() {
  const [addTodo, setAddTodo] = useState("");
 
  
  const [todoList, setTodoList] = useState([ ]);

  //새로운 값 추가 버튼
  const addText = () => {
    const newArr = {
      id: uuidv4(),
      todoTitle: addTodo,
      isEditing: false,
    };
    
    setTodoList([newArr,...todoList ]);
    setAddTodo("");
    //새로운 ToDo넣어주고 input창 비우기
  };
  const handleAddText = (e) => {
   
    setAddTodo(e.target.value);
    
  };

  const edit = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };
  const del = (id) => {
    const newList = todoList.filter((t) => {
      return t.id !== id;
    });
    setTodoList(newList);
  };
 
  const handleTextInList = (e, id) => {
    const newText = todoList.map((t) => {
     
      if (id === t.id) {
        return { ...t, todoTitle: e.target.value };
      } else {
        return t;
      }
    });
    setTodoList(newText);
  };
  return (
    <>
      <div className="addTodo">
        <label htmlFor="todo" className="label">
          NEW ToDo{" "}
        </label>
        <input
          id="todo"
          type="text"
          size="48"
          value={addTodo}
          placeholder="Add Todo..."
          onChange={handleAddText}
        ></input>
        <button onClick={addText} className="btn">
          추가
        </button>
      </div>

      <ul className="todolistBox">
        {todoList.map((t) => (
          <TodoList
            key={t.id}
            isEditing={t.isEditing}
            todoTitle={t.todoTitle}
            edit={() => edit(t.id)}
            del={() => del(t.id)}
            handleText={(e) => handleTextInList(e, t.id)}
          />
        ))}
      </ul>
    </>
  );
}
