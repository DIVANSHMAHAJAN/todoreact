import React, { useState,useEffect } from 'react';
import TodoForm from './TodoForm';
import Display from './Display';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo,addTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value:''
  });
  console.log("rerendering todo");
  const submitUpdate = value => {
    console.log("inside submission func of todo.js");
    updateTodo(edit.id, value);
    
    console.log("after sending update data to todolist")
    setEdit({
      id: null,
      value:''
    });
  };
  const somethingeditreqd=(id,text)=>{
    console.log("value");
    console.log(id);
    console.log(text);
    console.log("bi");
    setEdit({ id: id, value:text }); //formfunc(true);
   
  }
  

  if (edit.id)
  {
    console.log("sending to formfunc");
    //formfunc(true);
    //tryingfunc(true);
    console.log("seding to todoform edit data");
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  
   return (
    <>
     <TodoForm onSubmit={addTodo} />  
     <Display todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} somethingeditreqd={somethingeditreqd}/>
     </>
    
    )
 
};
    
export default Todo;