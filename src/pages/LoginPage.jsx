import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import FormInput from "../components/ui/FormInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "zaidquiz@gmail.com",
    password: "Zaid@123456",
  });
  const [error, setError] = useState("");

  function updateField(event) {
    setError("");
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const user = await login(form);
      navigate(user.role === "admin" ? "/admin" : "/quizzes");
    } catch (apiError) {
      setError(apiError.response?.data?.message || "Login failed");
    }
  }

  return (
    <main className="mx-auto grid min-h-[calc(100vh-80px)] max-w-md place-items-center px-4 py-12">
      <form onSubmit={handleSubmit} className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-black text-slate-950">Login</h1>
        <p className="mt-2 text-sm text-slate-600">Use admin credentials to open dashboard.</p>

        <div className="mt-6 grid gap-4">
          <FormInput id="email" label="Email" name="email" type="email" value={form.email} onChange={updateField} />
          <FormInput id="password" label="Password" name="password" type="password" value={form.password} onChange={updateField} />
        </div>

        {error ? <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}

        <Button type="submit" className="mt-6 w-full">Login</Button>
        <p className="mt-4 text-center text-sm text-slate-600">
          New user? <Link to="/register" className="font-bold text-slate-950">Register</Link>
        </p>
      </form>
    </main>
  );
}
