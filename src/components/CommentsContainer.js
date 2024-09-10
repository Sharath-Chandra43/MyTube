import React from 'react'


const commentsData=[
  {
    name:'Sharath Chandra',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
    replies:[],
  },
  {
    name:'Sharath Chandra',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
    replies:[],
  },
  {
    name:'Sharath Chandra',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
    replies:[
      {
        name:'Sharath Chandra',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
        replies:[
          {
            name:'Sharath Chandra',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
            replies:[
              {
                name:'Sharath Chandra',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
                replies:[],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name:'Sharath Chandra',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
    replies:[],
  },
  {
    name:'Sharath Chandra',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
    replies:[
      {
        name:'Sharath Chandra',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
        replies:[
          {
            name:'Sharath Chandra',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
            replies:[
              {
                name:'Sharath Chandra',
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus arcu urna, id elementum elit suscipit a.',
                replies:[],
              },
            ],
          },
        ],
      },
    ],
  },
]

const Comment=({data})=>{
  const {name,text,replies}=data;
  return (
  <div className='flex shadow-lg my-2 bg-gray-100 p-5 rounded-lg'>
    <img className='2-8 h-8' alt="user" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" />
    <div className='px-3'>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
    </div>
  </div>
  )
}


const CommentsList=({comments})=>{

  return comments.map((comment,index)=>(
    <div>
       <Comment key={index}  data={comment} />
    <div className='pl-5 border border-l-black ml-5'>
       <CommentsList comments={comment.replies}/>
    </div>
    </div>
      ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer