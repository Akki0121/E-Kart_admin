import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display login errors
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/admin/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data.message);

      window.location.href = "/admin/dashboard";
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred during login."
      );
      console.error("Login error:", error);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="login flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-slate-200 p-8 rounded-lg shadow-md w-96 space-y-4 flex flex-col justify-center"
      >
        <h2 className="text-3xl font-semibold py-5 text-center">Admin Login</h2>
        {error && (
          <div className="bg-red-200 text-red-600 p-3 rounded-md">{error}</div>
        )}
        <input
          className="px-3 py-1 bg-slate-100 block outline-none rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="px-3 py-1 bg-slate-100 block outline-none rounded-md w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          className={`bg-blue-600 px-12 py-1 rounded-md font-semibold text-white text-lg  ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
          type="submit"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className=" text-center text-sm">
          Don't have an Account ?{" "}
          <Link className="text-orange-800 text-md" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
