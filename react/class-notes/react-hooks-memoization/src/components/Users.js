import React, {memo} from 'react';
import UserItem from './UserItem';


const Users = ({users, add}) => {
    console.log("Rendering: Users Comp!");
    return (
        <div className="users">
            <button id="add-button" onClick={() => add()}>Add User</button>
            {users?.map(user => {
                return <UserItem key={user.id} user={user} add={null} />
            })}
        </div>
    )
}

export default memo(Users);

