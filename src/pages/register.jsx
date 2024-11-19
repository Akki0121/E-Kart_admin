import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost:3000/admin/register",
        {
          name,
          phone,
          email,
          password,
        }
      );

      setSuccess(response.data.message); // Display success message
      console.log("Registration successful:", response.data);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="register flex items-center justify-center h-screen">
      <div className="bg-slate-200 p-8 rounded-lg shadow-md w-96 space-y-4 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-center">Admin Register</h2>

        {error && (
          <div className="bg-red-200 text-red-600 p-3 rounded-md">{error}</div>
        )}
        {success && (
          <div className="bg-green-200 text-green-600 p-3 rounded-md">
            {success}
          </div>
        )}

        <div>
          <label htmlFor="name">Name</label>
          <input
            className="block outline-none px-2 py-1 rounded-md w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            className="block outline-none px-2 py-1 rounded-md w-full"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="block outline-none px-2 py-1 rounded-md w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="block outline-none px-2 py-1 rounded-md w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button
          className="px-3 py-1 bg-blue-500 rounded-md text-white font-semibold"
          onClick={handleRegister}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
