
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    // Check if the credentials match the specific user
    if (email === "edetgabriel49@gmail.com" && password === "1234gabriel") {
      const user = {
        id: '1',
        name: 'Gabriel',
        email: email,
      };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast("Login successful!");
      return true;
    } else {
      toast("Invalid email or password", {
        description: "Please check your credentials and try again.",
        duration: 3000,
      });
      return false;
    }
  };

  const register = (name: string, email: string, password: string) => {
    // This is a mock registration - in a real app, you would send to a backend
    const mockUser = {
      id: Date.now().toString(),
      name,
      email,
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
