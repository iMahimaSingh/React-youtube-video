import React from "react";
import UserCards from "./UserCards";
import "./index.css";
function App() {
 const users=[{name:"Mahima",role:"Developer", bio:"loves coding"},{name:"Indrani", role:"AI-engineer",bio:"loves to learn about AI tools"}];
  return (
    <div className=" min-h-screen bg-gray-100 flex flex-col align-item-center">
      <h1 className="text-xl">Lets learns props!</h1>
      <div className="grid grid-col-1 md:grid-col-2">
       {/* {passing the props} */}
       {users.map((user,index)=>(
        < UserCards key={index} name={user.name} role={user.role} bio={user.bio}/>
       ))}
      </div>
    </div>
  )
}

export default App
