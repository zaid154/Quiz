import { createContext, useContext, useMemo, useState } from "react";
import { api } from "../services/api.js";

const AuthContext = createContext(null);

const savedUser = localStorage.getItem("quiz_user");

export function AuthProvider({ children }) {
  const [user, setUser] = useState(savedUser ? JSON.parse(savedUser) : null);

  async function login(credentials) {
    const { data } = await api.post("/auth/login", credentials);
    localStorage.setItem("quiz_token", data.token);
    localStorage.setItem("quiz_user", JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  }

  async function register(payload) {
    const { data } = await api.post("/auth/register", payload);
    localStorage.setItem("quiz_token", data.token);
    localStorage.setItem("quiz_user", JSON.stringify(data.user));
    setUser(data.user);
    return data.user;
  }

  function logout() {
    localStorage.removeItem("quiz_token");
    localStorage.removeItem("quiz_user");
    setUser(null);
  }

  const value = useMemo(
    () => ({
      isAdmin: user?.role === "admin",
      isAuthenticated: Boolean(user),
      login,
      logout,
      register,
      user,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
