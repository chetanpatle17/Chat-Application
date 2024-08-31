import React from 'react'
import Sidebar from '../component/sidebar/Sidebar'
import MessageContainer from '../component/messages/MessageContainer'

const Home = () => {
  return (
    <div className="flex sm:h-[750px] md:h-[650px] rounded-lg overflow-hidden bg-gray-400">
      <Sidebar/>
      <MessageContainer />
    </div>
  )
}

export default Home