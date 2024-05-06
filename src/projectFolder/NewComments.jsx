import React from 'react'
import { useSelector } from 'react-redux'


const NewComments = () => {

  const newComment = useSelector((state)=>state.newComments.comments )

  return (
    <div className='commentSection'>
        Comments: 
        {newComment.map((item, index)=>{
          return(
            <div key={index}>
                {item}
            </div>
          )
        })}
 
    </div>
  )
}

export default NewComments