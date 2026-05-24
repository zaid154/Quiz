const variants = {
  primary:
    "bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-300",
  success:
    "bg-emerald-500 text-slate-950 hover:bg-emerald-400 focus-visible:outline-emerald-200",
  soft:
    "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-100 focus-visible:outline-slate-300",
  accent:
    "bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:outline-cyan-200",
  link:
    "bg-transparent p-0 text-slate-700 shadow-none hover:text-slate-950 focus-visible:outline-slate-300",
};

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
