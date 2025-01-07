import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&s"
          className="card-img-top bg-white"
          alt="User"
          
        />
        <div className="card-body" style={{minHeight: "180px"}}>
          <h5 className="card-title">{user.first_name} {user.last_name}</h5>
          <p className="card-text">Address: {user.address}</p>
          <p className="card-text">Phone: {user.phone_number}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
