'use client';

import { signOut, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

import { login } from '@/lib/auth';
import { auth } from '@/lib/firebase';

import Logo from '../../assets/png/logo.png';

import './LoginFlow.css';
import Image from 'next/image';

export default function LoginFlow({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(email, password);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="text-2xl font-bold">Login</h2>
        {error && <div className="login-error">{error}</div>}
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="login-button"
          type="submit"
          disabled={submitting}
        >
          {submitting ? 'Waiting ...' : 'Sign In'}
        </button>
      </form>
    );
  }

  return (
    <div className="auth-container">
      <div className="admin-header-container">
        <div className="admin-title">
          <Image priority width={40} height={40} src={Logo} alt="mobile-logo"/>
          Admin
        </div>
        <button
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
}
