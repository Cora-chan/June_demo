import TodoForm from './TodoForm'
import Todo from './Todo'
import React, {useState} from 'react'

function TodoList() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(todo,...todos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo =>todo.id !==id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos)
    }

    const updateTodo = (todoId, newValue) =>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id ===todoId ? newValue : item)));
    };
  
    return (
    <div className='todoApp'>
        <h1>What is the plan</h1>
        <TodoForm  onSubmit={addTodo}/>
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
    
  )
}

export default TodoList