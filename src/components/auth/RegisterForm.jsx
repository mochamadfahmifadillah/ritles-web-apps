import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("REGISTER DATA:", form);

    const result = await register(form);

    console.log("REGISTER RESULT:", result);

    if (result.success) {
      console.log("Register berhasil");
      navigate("/login");
    } else {
      alert(result.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
    >
      <h1 className="text-2xl font-bold text-center">
        Create Account
      </h1>

      <input
        type="text"
        name="full_name"
        placeholder="Nama Lengkap"
        value={form.full_name}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border rounded-xl px-4 py-3"
      />

      <button
        type="submit"
        className="w-full bg-primary text-white rounded-xl py-3"
      >
        Register
      </button>

      <button
        type="button"
        onClick={() => navigate("/login")}
        className="w-full text-primary"
      >
        Sudah punya akun? Login
      </button>
    </form>
  );
}