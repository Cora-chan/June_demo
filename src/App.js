import React, { useState } from 'react'

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("")

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    setList([...list, newTodo])
    setInput("");

  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  return (
    <div>
      <h2>Todo list</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {
          list.map((todo) => (
            <li key = {todo.id}>
            {todo.todo}
            <button className='btn' onClick={(e) => deleteTodo(todo.id)}>delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App
