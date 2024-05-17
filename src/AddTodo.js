
export default function AddToDo({addTodo,handleAddText,addText}){

  return(
    <>
    <div className="addTodo">
        <label htmlFor="todo" className="label">
          NEW ToDo       
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
    </>
  );
}