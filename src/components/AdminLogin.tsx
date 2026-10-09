import React, { useState } from 'react';
import { SouleLogo } from './SouleLogo';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
  AlertCircle,
  KeyRound,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import {
  verifyAdminLogin,
  getExpectedAdminUsername,
  getExpectedAdminPassword
} from '../cms/adminAuth';

interface AdminLoginProps {
  onSuccess: () => void;
  onBackToStore: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onSuccess, onBackToStore }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      const res = verifyAdminLogin(username, password, rememberMe);
      if (res.success) {
        setIsLoading(false);
        onSuccess();
      } else {
        setIsLoading(false);
        setError(res.error || 'Authentication failed. Please verify credentials.');
      }
    }, 250);
  };

  const handleUseQuickDevFill = () => {
    setUsername(getExpectedAdminUsername());
    setPassword(getExpectedAdminPassword());
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center items-center px-4 py-12 selection:bg-[#0CB581]/20">
      {/* Top back navigation */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <button
          onClick={onBackToStore}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-black transition-colors px-3 py-2 rounded-lg hover:bg-neutral-200/60 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Storefront</span>
        </button>
      </div>

      <div className="w-full max-w-md space-y-6">
        {/* Brand header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-neutral-200/80 mb-2">
            <SouleLogo size={36} color="#0CB581" showText={false} />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 text-white text-[10px] font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3 h-3 text-[#0CB581]" />
            <span>Protected Area</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-neutral-900">
            soule CMS Portal
          </h1>
          <p className="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
            Administrative access for managing footwear inventory, Firestore data, and Cloud Storage assets.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-900/5 p-6 sm:p-8 space-y-6">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-shake">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{error}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                Admin Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="e.g. admin"
                  autoComplete="username"
                  className="w-full text-xs pl-10 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                  Admin Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="w-full text-xs pl-10 pr-10 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-700 cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900 w-3.5 h-3.5 cursor-pointer"
                />
                <span className="text-xs text-neutral-600 font-medium">Keep me logged in</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
            >
              {isLoading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <KeyRound className="w-3.5 h-3.5 text-[#0CB581]" />
                  <span>Sign In to soule CMS</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="text-center text-[11px] text-neutral-400 space-y-1">
          <div>soule Performance Footwear · CMS Security Layer</div>
          <div className="text-[10px] text-neutral-400 font-mono">
            Firestore: shoes_data · Storage: shoes_product/
          </div>
        </div>
      </div>
    </div>
  );
};
