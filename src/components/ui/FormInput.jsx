export default function FormInput({ id, label, className = "", ...props }) {
  return (
    <label htmlFor={id} className="grid gap-1.5 text-sm font-semibold text-slate-800">
      <span>{label}</span>
      <input
        id={id}
        className={`h-11 rounded-xl border border-slate-200 bg-white px-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-200 ${className}`}
        {...props}
      />
    </label>
  );
}
