import React from "react"
import Sidebar from "../component/sidebar/Sidebar"
import MessageContainer from "../component/messages/MessageContainer"

const Home = () => {
    return (     
        <div className="flex sm:h-[650px] md:h-[650px] rounded-lg overflow-hidden bg-gray-500 ">
          <Sidebar />
          <MessageContainer />
        </div>
        
      )
}

export default Home