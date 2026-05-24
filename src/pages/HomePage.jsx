import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

const features = [
  "JWT authentication",
  "Admin quiz CRUD",
  "MongoDB models",
  "Razorpay-ready payments",
  "Protected routes",
  "Responsive Tailwind UI",
];

export default function HomePage() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200 ring-1 ring-white/15">
              Professional MERN Quiz Platform
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl">
              Build, sell, and manage premium quizzes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A full-stack foundation with admin login, MongoDB quiz management, protected APIs,
              and a payment-ready architecture for premium quiz access.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quizzes">
                <Button variant="accent">Browse quizzes</Button>
              </Link>
              <Link to="/login">
                <Button variant="soft" className="bg-white/10 text-white ring-white/15 hover:bg-white/20">
                  Admin login
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <h2 className="text-xl font-black text-white">Admin credentials</h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <p><span className="font-bold text-white">Email:</span> zaidquiz@gmail.com</p>
              <p><span className="font-bold text-white">Password:</span> Zaid@123456</p>
            </div>
            <p className="mt-5 rounded-2xl bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
              Admin is seeded automatically when MongoDB connects and the server starts.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Platform features"
          title="Resume-ready full-stack architecture"
          text="Start with the critical pieces first: secure auth, admin CRUD, protected APIs, and payment-ready backend services."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="rounded-3xl border border-slate-200 bg-white p-6 font-bold text-slate-800 shadow-sm">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
