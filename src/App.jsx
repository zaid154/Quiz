import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout.jsx";
import ProtectedRoute from "./components/routing/ProtectedRoute.jsx";
import PageLoader from "./components/feedback/PageLoader.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const RegisterPage = lazy(() => import("./pages/RegisterPage.jsx"));
const QuizListPage = lazy(() => import("./pages/QuizListPage.jsx"));
const AdminDashboardPage = lazy(() => import("./pages/admin/AdminDashboardPage.jsx"));
const ManageQuizzesPage = lazy(() => import("./pages/admin/ManageQuizzesPage.jsx"));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="quizzes" element={<QuizListPage />} />
          <Route element={<ProtectedRoute adminOnly />}>
            <Route path="admin" element={<AdminDashboardPage />} />
            <Route path="admin/quizzes" element={<ManageQuizzesPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
