import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from './redux/userSlice';


const UserForm = () => {
    const [userName, setUserName]= useState('')

    const dispatch = useDispatch()
   

    const userNameHandler =(e)=>{
        setUserName(e.target.value)
    }

const submitHandler =(e)=>{
    e.preventDefault()
    dispatch(addUsers(userName))
    setUserName("")
    
}

  return (
    <div >
        <form className='formSection' onSubmit={submitHandler}>
            <h4>User Name</h4>
            <div className="userInput">
                <input type="text" value={userName} onChange={userNameHandler}/>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm