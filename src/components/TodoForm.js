import React, { useState, useEffect, useRef } from 'react';
function TodoForm(props) {
  console.log("rerendering todoform");
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [istouched,setistouched]=useState(false);
  const [isload,setreload]=useState(false);
  const inputRef = useRef(null);
  let isempty=input.trim().length===0;
  const handleChange = e => {
    //setistouched(true);
    setInput(e.target.value);
  };
 const manageblur=()=>{
  setistouched(true);
 }
  if(props.edit)
  {
    console.log("aagya value edit wala mera ");
    console.log(props.edit.value);
    console.log(input);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(!isempty)
    {
    if(props.edit)
    {
    console.log("sending edit data");
    }
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    //document.getElementById("input").blur();
    setistouched(false);
    setInput('');

    }
  };
  const todisable=isempty&&istouched;
  console.log("finding if edit there or not?");
  console.log(props.edit);
  if(props.edit)
  {

    return (
    <form onSubmit={handleSubmit} className='todo-form'>
          {console.log("kkkkkkkkkkkkkkkkkk")}
          {console.log(input)}
          <input
            placeholder='Update your item'
            value={input}//ye bind kara hai maine state ke saath isko per ye aa nhi rhi value
            onChange={handleChange}
            name='text'
            
            onBlur={manageblur}
            className='todo-input edit'
          />
          {console.log("inside render of props edit")}
          <button onClick={handleSubmit} disabled={todisable}>
            Update 
          </button>
          {isempty&&istouched&&<p style={{color:"white"}}>can't submit this</p>}  
        
      </form>
      )

  }
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      
        <div>

          <input
            placeholder='Add a todo'
            value={input}
            id="input"
            onChange={handleChange}
            name='text'
            className='todo-input'
            onBlur={manageblur}
           
          />
          {console.log("inside render of addtodo")}
          <button disabled={todisable} onClick={handleSubmit} >
            Add todo
          </button>
          </div>
          <div>
          {isempty&&istouched&&<p style={{color:"white"}}>can't submit this</p>}                                          
        </div>
        
    </form>
  );
}

export default TodoForm;