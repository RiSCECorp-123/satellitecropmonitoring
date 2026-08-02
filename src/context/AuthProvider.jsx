import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  // restore user after page refresh
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (name, password) => {
    if (name?.trim() && password?.trim()) {
      setUser({ name: name.trim(), role: "farmer" });
      return true;
    }
    return false;
  };

  const register = (name, password) => {
    if (name?.trim() && password?.trim()) {
      setUser({ name: name.trim(), role: "farmer" });
      return true;
    }
    return false;
  };

  const loginAsGuest = () => {
    setUser({ name: "Guest", role: "guest" });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isGuest: user?.role === "guest",
        login,
        register,
        loginAsGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
