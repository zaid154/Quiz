import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import FormInput from "../components/ui/FormInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  function updateField(event) {
    setError("");
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await register(form);
      navigate("/quizzes");
    } catch (apiError) {
      setError(apiError.response?.data?.message || "Registration failed");
    }
  }

  return (
    <main className="mx-auto grid min-h-[calc(100vh-80px)] max-w-md place-items-center px-4 py-12">
      <form onSubmit={handleSubmit} className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-black text-slate-950">Create account</h1>
        <div className="mt-6 grid gap-4">
          <FormInput id="name" label="Name" name="name" value={form.name} onChange={updateField} />
          <FormInput id="email" label="Email" name="email" type="email" value={form.email} onChange={updateField} />
          <FormInput id="password" label="Password" name="password" type="password" value={form.password} onChange={updateField} />
        </div>
        {error ? <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
        <Button type="submit" className="mt-6 w-full">Register</Button>
      </form>
    </main>
  );
}
