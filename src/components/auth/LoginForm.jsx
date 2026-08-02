import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await login(email, password);

      console.log("LOGIN RESULT :", result);

      if (result.success) {
        // Dashboard adalah route "/"
        navigate("/", { replace: true });
        return;
      }

      setError(result.message || "Email atau password salah");
    } catch (err) {
      console.error("LOGIN ERROR :", err);
      setError("Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
            {error}
          </div>
        )}

        <div>
          <label className="text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white rounded-xl py-3 transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => navigate("/register")}
        className="mt-5 text-sm text-primary hover:underline"
      >
        Belum punya akun? Register
      </button>
    </div>
  );
}