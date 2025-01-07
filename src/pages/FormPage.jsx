import React, { useState } from "react";
import { postUserData } from "../utils/api";

const FormPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postUserData(formData).then(() => {
      alert("User data submitted successfully!");
      setFormData({ first_name: "", last_name: "", address: "", phone_number: "" });
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control my-2"
          placeholder="First Name"
          value={formData.first_name}
          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
