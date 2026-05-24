export default function PageLoader() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6">
      <div className="w-full max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="h-8 w-40 animate-pulse rounded bg-slate-800" />
          <div className="h-10 w-28 animate-pulse rounded-lg bg-slate-800" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-72 animate-pulse rounded-2xl bg-slate-800 md:col-span-2" />
          <div className="h-72 animate-pulse rounded-2xl bg-slate-800" />
        </div>
      </div>
    </main>
  );
}
