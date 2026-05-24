import { useEffect, useState } from "react";
import Button from "../../components/ui/Button.jsx";
import FormInput from "../../components/ui/FormInput.jsx";
import SectionHeader from "../../components/ui/SectionHeader.jsx";
import { api } from "../../services/api.js";

const initialForm = {
  title: "",
  description: "",
  difficulty: "Easy",
  duration: 30,
  passingMarks: 50,
  price: 0,
  isPublished: true,
};

export default function ManageQuizzesPage() {
  const [form, setForm] = useState(initialForm);
  const [quizzes, setQuizzes] = useState([]);
  const [message, setMessage] = useState("");

  async function loadQuizzes() {
    const { data } = await api.get("/quizzes/admin");
    setQuizzes(data.quizzes);
  }

  useEffect(() => {
    loadQuizzes().catch(() => setQuizzes([]));
  }, []);

  function updateField(event) {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function createQuiz(event) {
    event.preventDefault();
    setMessage("");

    try {
      await api.post("/quizzes", {
        ...form,
        duration: Number(form.duration),
        passingMarks: Number(form.passingMarks),
        price: Number(form.price),
        questions: [
          {
            text: "Sample question: What is React?",
            options: ["Library", "Database", "Language", "OS"],
            correctAnswer: 0,
            explanation: "React is a JavaScript library for building UI.",
          },
        ],
      });
      setForm(initialForm);
      setMessage("Quiz created successfully.");
      await loadQuizzes();
    } catch (error) {
      setMessage(error.response?.data?.message || "Quiz creation failed.");
    }
  }

  async function deleteQuiz(id) {
    await api.delete(`/quizzes/${id}`);
    await loadQuizzes();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Admin"
        title="Manage quizzes"
        text="Create MongoDB quizzes now. Dynamic question builder, CSV import, thumbnails, and bulk management can be added next."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">
        <form onSubmit={createQuiz} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-slate-950">Add quiz</h2>
          <div className="mt-5 grid gap-4">
            <FormInput id="title" label="Title" name="title" value={form.title} onChange={updateField} required />
            <label className="grid gap-1.5 text-sm font-semibold text-slate-800">
              <span>Description</span>
              <textarea
                name="description"
                value={form.description}
                onChange={updateField}
                required
                className="min-h-28 rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-950 outline-none focus:border-slate-950 focus:ring-4 focus:ring-slate-200"
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput id="duration" label="Duration" name="duration" type="number" value={form.duration} onChange={updateField} />
              <FormInput id="price" label="Price" name="price" type="number" value={form.price} onChange={updateField} />
            </div>
            <label className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <input type="checkbox" name="isPublished" checked={form.isPublished} onChange={updateField} />
              Publish quiz
            </label>
          </div>
          {message ? <p className="mt-4 rounded-2xl bg-cyan-50 p-3 text-sm font-bold text-cyan-800">{message}</p> : null}
          <Button type="submit" className="mt-6 w-full">Create quiz</Button>
        </form>

        <section className="grid gap-4">
          {quizzes.map((quiz) => (
            <article key={quiz._id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-950">{quiz.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {quiz.isPublished ? "Published" : "Draft"} · ₹{quiz.price} · {quiz.questions.length} questions
                  </p>
                </div>
                <Button variant="soft" onClick={() => deleteQuiz(quiz._id)}>Delete</Button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
