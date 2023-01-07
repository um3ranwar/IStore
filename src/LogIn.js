import React, { useState } from "react";

function Login(){
  const onSubmit = (e) => {
    e.preventDefault()}
return(
  <div className="container mt-5 ">
    <form className="form112" onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input className="form-control" type="password" id="name" required />
      </div>
        <p><input type="checkbox" />{" "}{" "}Remember me</p>
      <button className="btn btn-dark" type="submit">
        Login
      </button>

      </form>
      </div>


);

};
export default Login;
