import React, { useState,useEffect,useRef } from 'react'

function TodoForm(props) {

    const inputRef = useRef(null)
   
    useEffect(() => {
        inputRef.current.focus()
    })

const [input, setInput] = useState('')

const handleChange = e => {
    setInput(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random() * 10000),
        text:input
    });

    setInput("");
};

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" placeholder="add a todo" value={input} name="text" className='todoInput' onChange={handleChange} ref={inputRef}/>
        <button className='todoButton' >Add</button>
    </form>
  )
}

export default TodoForm