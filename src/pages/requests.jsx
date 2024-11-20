import React from "react";

function requests() {
  return (
    <div>
      <div className="register">
        <h1>Register Admin</h1>
        <form>
          <label>Username:</label>
          <input type="text" name="username" required />
          <br />
          <label>Phone:</label>
          <input type="text" name="phone" required />
          <br />
          <label>E-mail:</label>
          <input type="text" name="email" required />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default requests;
