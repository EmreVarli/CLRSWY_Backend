import React from 'react';


const UserItem = ({ user, add }) => {
  console.log("Rendering: User Item Comp!");
  return (
    <div className="useritem" onClick={() => null}>
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`}
        alt="random-avatar"
      />
      {user?.name}
    </div>
  );
};

export default UserItem;
