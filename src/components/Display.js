import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
const Display=(props)=>{
 if(props.todos)
 {
 return props.todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => props.removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => props.somethingeditreqd(todo.id, todo.text)}
          className='edit-icon'
        />
      </div>
    </div>
  ));}
 return (
 	<>
 	</>
 	)
}
export default Display;