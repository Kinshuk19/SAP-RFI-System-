import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  email: string;
  role: string;
}

interface AuthContextType {
  currentUser: User | null;
  userRole: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, role: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string, role: string) => {
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.find((user: any) => user.email === email);
    
    if (userExists) {
      throw new Error('User already exists with this email');
    }

    // Create new user
    const newUser = { email, password, role };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Set current user
    const user = { email, role };
    setCurrentUser(user);
    setUserRole(role);
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const login = async (email: string, password: string) => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find((u: any) => u.email === email && u.password === password);
    
    if (!user) {
      // Check if user exists but wrong password
      const userExists = existingUsers.find((u: any) => u.email === email);
      if (userExists) {
        throw new Error('Invalid password');
      } else {
        throw new Error('Please create an account first.');
      }
    }

    const currentUser = { email: user.email, role: user.role };
    setCurrentUser(currentUser);
    setUserRole(user.role);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  };

  const logout = async () => {
    setCurrentUser(null);
    setUserRole(null);
    localStorage.removeItem('currentUser');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setUserRole(user.role);
    }
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    userRole,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};