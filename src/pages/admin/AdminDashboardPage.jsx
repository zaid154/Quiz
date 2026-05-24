import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button.jsx";
import SectionHeader from "../../components/ui/SectionHeader.jsx";
import { api } from "../../services/api.js";

const fallbackStats = {
  totalUsers: 0,
  totalQuizzes: 0,
  totalAttempts: 0,
  revenue: 0,
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(fallbackStats);

  useEffect(() => {
    api
      .get("/quizzes/admin/stats")
      .then(({ data }) => setStats(data.stats))
      .catch(() => setStats(fallbackStats));
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Admin"
          title="Dashboard"
          text="Manage quizzes, monitor users, track attempts, and prepare paid quiz revenue flows."
        />
        <Link to="/admin/quizzes">
          <Button variant="accent">Manage quizzes</Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Users" value={stats.totalUsers} />
        <StatCard label="Quizzes" value={stats.totalQuizzes} />
        <StatCard label="Attempts" value={stats.totalAttempts} />
        <StatCard label="Revenue" value={`₹${stats.revenue}`} />
      </div>
    </main>
  );
}

function StatCard({ label, value }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-4 text-4xl font-black text-slate-950">{value}</p>
    </section>
  );
}
