import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const result = await register(name, email, password);
        setLoading(false);
        if (result.success) {
            alert('Account created successfully! Please login.');
            navigate('/login');
        } else {
            setError(result.error);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-900/5"
            style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1), rgba(30, 41, 59, 0.3)), url('/src/assets/corporate_bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Header */}
            <header className="bg-[#0f172a]/95 backdrop-blur-xl h-20 flex items-center justify-between px-6 sm:px-12 text-white shadow-2xl z-50 border-b border-white/10">
                <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[#6366f1] to-[#1e40af] text-white p-2 rounded-xl font-black text-2xl shadow-lg transform -rotate-3 transition-transform hover:rotate-0 cursor-default">
                        PAT
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Placement Automation Tool
                        </span>
                        <div className="h-0.5 w-12 bg-[#6366f1] rounded-full"></div>
                    </div>
                </div>
                <div className="flex gap-5 font-bold">
                    <Link
                        to="/login"
                        className="px-7 py-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#1e40af] text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transform hover:-translate-y-0.5 transition-all"
                    >
                        Login
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 relative">
                <div className="w-full max-w-md glass p-8 rounded-2xl shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-pat-dark">Create Account</h1>
                        <p className="text-slate-600 mt-2 font-medium">Join the PAT ecosystem today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pat-accent focus:border-transparent transition-all bg-white/50"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pat-accent focus:border-transparent transition-all bg-white/50"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pat-accent focus:border-transparent transition-all bg-white/50"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <p className="text-red-600 text-sm font-medium bg-red-50 p-2 rounded border border-red-100">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 py-3 text-lg rounded-xl font-bold bg-[#1e40af] text-white hover:bg-[#1e293b] transition-all shadow-md active:scale-95 border border-white/10"
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm">
                        <span className="text-slate-600 font-medium">Already have an account? </span>
                        <Link to="/login" className="text-pat-blue font-bold hover:underline">Log In</Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-pat-dark/95 backdrop-blur-sm h-16 flex items-center justify-center text-slate-300 font-semibold uppercase tracking-widest text-sm z-10">
                Placement Automation Tool (PAT)
            </footer>
        </div>
    );
};

export default Register;
