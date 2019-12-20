import React from 'react';

const Todos = ({todos, removeTodo}) =>{
    const totosList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="todo" onClick={() => {removeTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) 
    : (<p className="notodos center">U got no Todo's left!!</p>)


    return(
        <div className="totos collection">
            {totosList}
        </div>
    )
}

export default Todos