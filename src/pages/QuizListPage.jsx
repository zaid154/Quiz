import { useEffect, useState } from "react";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { api } from "../services/api.js";

export default function QuizListPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/quizzes")
      .then(({ data }) => setQuizzes(data.quizzes))
      .catch(() => setQuizzes([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Quizzes"
        title="Available quizzes"
        text="Published quizzes from MongoDB will appear here. Admin can create and publish them from dashboard."
      />

      {loading ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-64 animate-pulse rounded-3xl bg-slate-200" />
          ))}
        </div>
      ) : null}

      {!loading && quizzes.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <h2 className="text-xl font-black text-slate-950">No published quizzes yet</h2>
          <p className="mt-2 text-slate-600">Login as admin and create your first quiz.</p>
        </div>
      ) : null}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <article key={quiz._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-cyan-700">
                {quiz.difficulty}
              </span>
              <span className="text-sm font-bold text-slate-500">
                {quiz.price > 0 ? `₹${quiz.price}` : "Free"}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-black text-slate-950">{quiz.title}</h2>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{quiz.description}</p>
            <div className="mt-5 flex items-center justify-between text-sm font-bold text-slate-500">
              <span>{quiz.duration} min</span>
              <span>{quiz.questions?.length || 0} questions</span>
            </div>
            <Button className="mt-6 w-full" disabled>
              Start quiz coming next
            </Button>
          </article>
        ))}
      </div>
    </main>
  );
}
