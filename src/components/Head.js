import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cachesResults } from '../utils/searchSlice';


const Head = () => {
    const[searchQuery,setSearchQuery]=useState("");
    const[suggestioons,setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);


    const searchCache=useSelector((store)=>store.search)


    useEffect(()=>{

      const timer=setTimeout(()=>{ 
        
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }else{
            getSearchSuggestions()
        }
        },200) ;


      return ()=>{
        clearTimeout(timer);
      }
    },[searchQuery])

    const dispatch =useDispatch();

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }



    const getSearchSuggestions=async()=>{
        const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json= await data.json()
        setSuggestions(json[1])


        // update cache
        dispatch(cachesResults({
            [searchQuery]:json[1],
        }))
    }

    
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-1 '>
            <img 
                onClick={()=>toggleMenuHandler()}
                className='h-8 cursor-pointer' 
                alt="alt" 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'
             />
             <a href='/' >
            <img 
                className='h-12 w-auto mx-4' 
                src='https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png' alt="youtube" 
            />
            </a>
        </div>
    <div className='col-span-10 px-10'>
        <div>
        <input 
            value={searchQuery}
            type='text'
            className='w-1/2 border border-gray-400 p-2 rounded-l-full px-5'
            onChange={(e)=>setSearchQuery(e.target.value)} 
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}        
            />

        <button className='border border-gray-400 px-5 py-2 rounded-r-full '>
        🔍
        </button>
        </div>
        {showSuggestions && (<div className='absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-200'>
                  <ul>
                      {suggestioons.map(s => <li className='shadow-lg py-2 px-3 hover:bg-gray-200' key={s}>🔍 {s}</li>)}
                  </ul>
              

          </div>
        )}
    </div>
        <div className='col-span-1'>
                  <img
                      className='h-8'
                      alt="user"
                      src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" 
                  />
        </div>
    </div>
  )
}

export default Head