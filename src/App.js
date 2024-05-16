import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState({ todoTitle: " ", isEditing: false });
 
  const edit = () => {
    //수정 버튼을 누르면, input창이 뜨고 삭제버튼이 사라진다
    //다시 수정버튼을 누르면 저장된다.
    ///=>변수를 객체로 변형해줘야 isEdting을 추가할 수 있다
    setTodo({ ...todo, isEditing: !todo.isEditing });
  };
  const handleText = (e) => {
    setTodo({ ...todo, todoTitle: e.target.value });
    console.log(e.target.value);
    
  };
  return (
    <div>
      <h1>My To Dos</h1>
      <label htmlFor="newTodo">add Todo</label>
      <input
        value={newTodo}
        id="newTodo"
        type="text"
        size="50"
        placeholder=" Please Add ToDo..."
      ></input>
      <button >추가</button>

      <ul>
      {todo.isEditing ? (
            <>
              <input
                value={todo.todoTitle}
                type="text"
                size={50}
                onChange={handleText}
              ></input>
              <button onClick={edit}>저장</button>
            </>
          ) : (
            <>
              <p>{todo.todoTitle}</p>
              <button onClick={edit}>수정</button>
              <button>삭제</button>
            </>
          )}
      </ul>
    </div>
  );
}

export default App;
