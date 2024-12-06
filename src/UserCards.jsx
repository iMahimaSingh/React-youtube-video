import React from"react";
const UserCards =({name,role,bio})=>{
    return(
        <div className="bg-gray-100 bg-shadow-gray-500 bg-rounded">
            <h1 className="text-bold">{name}</h1>
            <p className="text-sm">{role}</p>
            <p>{bio}</p>
        </div>

    )

}
export default UserCards;