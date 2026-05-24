import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import Button from "../ui/Button.jsx";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Quizzes", to: "/quizzes" },
];

export default function Navbar() {
  const { isAdmin, isAuthenticated, logout, user } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white">
            Q
          </span>
          <div>
            <p className="text-base font-black leading-none text-slate-950">QuizMaster</p>
            <p className="text-xs font-semibold text-slate-500">MERN quiz platform</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-slate-100 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {isAdmin ? (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-950"
                }`
              }
            >
              Admin
            </NavLink>
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="hidden text-sm font-bold text-slate-600 sm:inline">{user.name}</span>
              <Button variant="soft" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
