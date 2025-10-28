import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
 const No = [ 
  {
    int: 1,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    Para: "Boost your productivity with smart tools.",
    btn: "Learn More"
  },
  { 
    int: 2,
    img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    Para: "Stay organized and manage your tasks efficiently.",
    btn: "Get Started"
  },
  {
    int: 3,
    img: "https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    Para: "Collaborate seamlessly with your team.",
    btn: "Explore"
  },
  {
    int: 4,
    img: "https://picsum.photos/200?random=4",
    Para: "Access your work anytime, anywhere.",
    btn: "Try Now"
  },
  {
    int: 5,
    img: "https://picsum.photos/200?random=5",
    Para: "Experience smooth and secure workflow operations.",
    btn: "View Features"
  },
  {
    int: 6,
    img: "https://picsum.photos/200?random=6",
    Para: "Join millions using our platform for success.",
    btn: "Sign Up"
  }
];

  return (
    <div className='h-full p-4 flex w-3/4 flex-nowrap overflow-x-auto  '>
      {No.map(function(card, idx){
      return <RightCard key={idx} card={card}/>
      })}
    </div>
  )
}

export default RightContent
