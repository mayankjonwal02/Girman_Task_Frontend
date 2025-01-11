import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { fetchUserData } from "../utils/api";
import "./results.css";

const SearchResults = ({ searchTerm , users , setUsers }) => {


  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" ">
     
      <div className="customgrid ">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user._id} user={user} />
          ))
        ) : (
          <p className="text-center">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
