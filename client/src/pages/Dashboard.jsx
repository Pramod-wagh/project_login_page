import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
                <h1 className="text-2xl font-bold mb-4 text-pat-dark">Please log in to view the dashboard.</h1>
                <button
                    onClick={() => navigate('/login')}
                    className="px-8 py-3 rounded-xl font-bold bg-[#1e40af] text-white hover:bg-[#1e293b] transition-all shadow-md active:scale-95 border border-white/10"
                >
                    Go to Login
                </button>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex flex-col text-slate-900"
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
                <button
                    onClick={handleLogout}
                    className="px-7 py-2 rounded-xl bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white font-black shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transform hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
                >
                    Logout
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 relative">
                <div className="glass p-10 rounded-2xl shadow-2xl text-center max-w-2xl w-full border border-white/40">
                    <div className="w-24 h-24 bg-white text-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-indigo-100 shadow-xl text-4xl font-black">
                        {user.name ? user.name.charAt(0).toUpperCase() : 'P'}
                    </div>

                    <h2 className="text-4xl font-extrabold text-[#1e293b] mb-4 tracking-tight">
                        Welcome <span className="text-[#1e40af] font-black uppercase tracking-tighter">{user.name || 'Student'}</span> to PAT system
                    </h2>

                    <p className="text-slate-600 mb-10 text-lg font-medium">
                        Your centralized portal for recruitment, analytics, and career growth.
                    </p>

                    <div className="grid grid-cols-2 gap-6 text-left">
                        <div className="p-5 bg-white/60 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Status</p>
                            <p className="font-bold text-green-600 flex items-center gap-2 text-lg">
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                                Active Account
                            </p>
                        </div>
                        <div className="p-5 bg-white/60 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-2">User ID</p>
                            <p className="font-mono font-black text-[#1e40af] text-xl">#PAT-{user.userId.toString().padStart(4, '0')}</p>
                        </div>
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

export default Dashboard;
