import React from "react";

const UsersList = (props) => {
    return (
        <ul className="lista">
            {props.users.map(currentUser => 
                <li 
                key={currentUser.id} 
                onClick={() => props.removeUser(currentUser.id, currentUser.name)}>
                    {currentUser.name}
                </li>
            )}
        </ul>
    )
}

export default UsersList;