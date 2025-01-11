import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ user }) => {
  return (
    <div className="">
      <div className="card m-3" style={{ padding: "20px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&s"
          className="card-img-top bg-white"
          alt="User"
          style={{ height: "90px", width: "90px" }}

        />
        <div className="card-body" style={{ minHeight: "180px" }}>
          <h5 className="card-title fs-1 fw-semibold">{user.first_name} {user.last_name}</h5>

          <p className="card-text" style={{ color: "#555555" }}><FontAwesomeIcon icon={faLocationDot} className="me-2" />  {user.city}</p>

          <hr style={{ border: "none", borderTop: "1px solid gray", margin: "20px 0" }} />
          <div className="d-flex align-items-center flex-row justify-content-between">
          <div className="d-flex justify-content-between flex-column ">
          <p className="fw-semibold " style={{ fontSize: "19px", color: "black", margin: "0" }}>
              <FontAwesomeIcon icon={faPhone} className="me-1" /> {user.contact_number}
            </p>
            <div className="" style={{ fontSize: "14px", color: "gray", margin: "0" }}>
              Available on phone
            </div>
          </div>
          <button type="button" class="btn btn-dark py-2 px-4 fs-5">Fetch Details</button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default UserCard;
