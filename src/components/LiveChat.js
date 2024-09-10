import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, randomMessage } from '../utils/helper';

const LiveChat = () => {

    const [LiveMessage,setLiveMessage]=useState('')

    const dispatch=useDispatch();

    const ChatMessages=useSelector((store)=>store.chat.messages);
    
    useEffect(()=>{
        const i=  setInterval(()=>{

            console.log("API Polling");

            dispatch(addMessage({
                name:generateRandomName(),
                message:randomMessage(25)
            }))
  
          },1000);
  
          return ()=>clearInterval(i);
      },[])

  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {ChatMessages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}
        </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name:"Vineeth",
                message:LiveMessage,
            }))
            setLiveMessage('');   
    }} >
        <input type="text" className='w-96 px-2' value={LiveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value)
           
        }} />
        <button className='px-2 mx-2 bg-green-300 rounded-lg text-white'>Send</button>
    </form>
</>
  )
}

export default LiveChat