import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <h2 className="text-xl font-black text-slate-950">QuizMaster</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            A MERN quiz platform with secure auth, admin quiz management, MongoDB APIs,
            and Razorpay-ready paid quiz architecture.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">Platform</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link className="hover:text-slate-950" to="/">Home</Link>
            <Link className="hover:text-slate-950" to="/quizzes">Quizzes</Link>
            <Link className="hover:text-slate-950" to="/admin">Admin</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">Stack</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            React, React Router, Tailwind CSS, Node.js, Express, MongoDB, JWT, bcrypt,
            and Razorpay integration hooks.
          </p>
        </div>
      </div>
    </footer>
  );
}
