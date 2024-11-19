import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display login errors
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Reset error state before attempting login

    try {
      const response = await axios.post(
        "http://localhost:3000/admin/login",
        { email, password },
        { withCredentials: true } // Allow cookies to be sent
      );

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
    <div className="login flex justify-center items-center mt-10">
      <div className="space-y-5 p-8 bg-stone-500 w-1/3 rounded-md">
        <h2 className="text-3xl font-semibold py-5 text-center">Admin Login</h2>
        {error && (
          <div className="bg-red-200 text-red-600 p-3 rounded-md">{error}</div>
        )}
        <input
          className="px-3 py-1 bg-slate-100 block outline-none rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="px-3 py-1 bg-slate-100 block outline-none rounded-md w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className={`bg-blue-600 px-12 py-1 rounded-md font-semibold text-white text-lg ml-24 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
