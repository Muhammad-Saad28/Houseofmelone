"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface AuthContainerProps {
  initialMode?: "login" | "signup";
}

export default function AuthContainer({ initialMode = "login" }: AuthContainerProps) {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const router = useRouter();

  // Login State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Signup State
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");

  const [googleLoading, setGoogleLoading] = useState(false);

  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      setLoginError(error.message);
      setLoginLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess("");
    setSignupLoading(true);

    const names = signupName.trim().split(" ");
    const firstName = names[0] || "";
    const lastName = names.slice(1).join(" ") || "";

    const { data, error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (error) {
      setSignupError(error.message);
      setSignupLoading(false);
      return;
    }

    if (data.session) {
      router.push("/");
      router.refresh();
    } else {
      setSignupSuccess("Check your email to confirm your account.");
      setSignupLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setLoginError("");
    setSignupError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setLoginError(error.message);
      setSignupError(error.message);
      setGoogleLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setLoginError("");
    setSignupError("");
    setSignupSuccess("");
  };

  const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="relative w-full max-w-[850px] min-h-[550px] bg-white rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(58,41,32,0.12)] overflow-hidden flex border border-sand/40">

        {/* --- Sign In Form (Left Side) --- */}
        <div className={`absolute top-0 left-0 w-1/2 h-full px-10 sm:px-12 py-10 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLogin ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 -translate-x-10 pointer-events-none"}`}>
          <div className="w-full max-w-[380px] flex flex-col items-center">
            {/* Overline */}
            <p className="font-sans text-[0.5625rem] uppercase tracking-[0.25em] text-olive font-medium mb-5">
              Welcome back
            </p>
            <h1 className="font-serif font-light text-[2rem] md:text-[2.25rem] text-walnut leading-[1.1] tracking-[-0.02em] mb-8 text-center">
              Sign In
            </h1>

            {/* Google button */}
            <button
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              type="button"
              className="w-full max-w-[280px] flex items-center justify-center gap-3 py-3.5 border border-sand/60 rounded-full text-deep font-sans text-[0.8125rem] font-medium hover:border-walnut/40 hover:text-walnut hover:shadow-[0_2px_12px_-3px_rgba(58,41,32,0.1)] transition-all duration-300 disabled:opacity-50 mb-2"
            >
              <GoogleIcon />
              {googleLoading ? "Connecting..." : "Continue with Google"}
            </button>

            <div className="flex items-center gap-3 w-full my-5">
              <div className="flex-1 h-[1px] bg-sand/40" />
              <span className="font-sans text-[0.625rem] uppercase tracking-[0.12em] text-walnut/40 font-medium">or</span>
              <div className="flex-1 h-[1px] bg-sand/40" />
            </div>

            {loginError && (
              <p className="font-sans text-[0.75rem] text-red-600 mb-4 text-center font-medium">{loginError}</p>
            )}

            <form onSubmit={handleLogin} className="w-full flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-cream-dim/40 border border-sand/50 rounded-xl px-5 py-4 font-sans text-[0.875rem] text-deep placeholder-walnut/35 focus:outline-none focus:border-walnut/50 focus:bg-cream-dim/60 transition-all duration-300"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-cream-dim/40 border border-sand/50 rounded-xl px-5 py-4 font-sans text-[0.875rem] text-deep placeholder-walnut/35 focus:outline-none focus:border-walnut/50 focus:bg-cream-dim/60 transition-all duration-300"
              />

              <div className="flex justify-end w-full">
                <Link href="#" className="font-sans text-[0.6875rem] text-walnut/60 hover:text-walnut transition-colors duration-300">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-4 bg-walnut text-cream font-sans text-[0.6875rem] uppercase tracking-[0.22em] font-semibold hover:bg-deep transition-colors duration-300 disabled:opacity-70 rounded-xl mt-1"
              >
                {loginLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>

        {/* --- Sign Up Form (Right Side) --- */}
        <div className={`absolute top-0 right-0 w-1/2 h-full px-10 sm:px-12 py-10 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${!isLogin ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-10 pointer-events-none"}`}>
          <div className="w-full max-w-[340px] flex flex-col items-center">
            {/* Overline */}
            <p className="font-sans text-[0.5625rem] uppercase tracking-[0.25em] text-olive font-medium mb-3">
              New here?
            </p>
            <h1 className="font-serif font-light text-[2rem] md:text-[2.25rem] text-walnut leading-[1.1] tracking-[-0.02em] mb-6 text-center">
              Create Account
            </h1>

            {/* Google button */}
            <button
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              type="button"
              className="w-full max-w-[280px] flex items-center justify-center gap-3 py-3.5 border border-sand/60 rounded-full text-deep font-sans text-[0.8125rem] font-medium hover:border-walnut/40 hover:text-walnut hover:shadow-[0_2px_12px_-3px_rgba(58,41,32,0.1)] transition-all duration-300 disabled:opacity-50 mb-2"
            >
              <GoogleIcon />
              {googleLoading ? "Connecting..." : "Continue with Google"}
            </button>

            <div className="flex items-center gap-3 w-full my-5">
              <div className="flex-1 h-[1px] bg-sand/40" />
              <span className="font-sans text-[0.625rem] uppercase tracking-[0.12em] text-walnut/40 font-medium">or</span>
              <div className="flex-1 h-[1px] bg-sand/40" />
            </div>

            {signupError && (
              <p className="font-sans text-[0.75rem] text-red-600 mb-3 text-center font-medium">{signupError}</p>
            )}
            {signupSuccess && (
              <p className="font-sans text-[0.75rem] text-olive mb-3 text-center font-medium">{signupSuccess}</p>
            )}

            <form onSubmit={handleSignup} className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full name"
                required
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                className="w-full bg-cream-dim/40 border border-sand/50 rounded-xl px-5 py-4 font-sans text-[0.875rem] text-deep placeholder-walnut/35 focus:outline-none focus:border-walnut/50 focus:bg-cream-dim/60 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className="w-full bg-cream-dim/40 border border-sand/50 rounded-xl px-5 py-4 font-sans text-[0.875rem] text-deep placeholder-walnut/35 focus:outline-none focus:border-walnut/50 focus:bg-cream-dim/60 transition-all duration-300"
              />
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  minLength={8}
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full bg-cream-dim/40 border border-sand/50 rounded-xl px-5 py-4 font-sans text-[0.875rem] text-deep placeholder-walnut/35 focus:outline-none focus:border-walnut/50 focus:bg-cream-dim/60 transition-all duration-300"
                />
                <p className="font-sans text-[0.5625rem] text-walnut/45 mt-1.5 pl-1">
                  Minimum 8 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={signupLoading}
                className="w-full mt-1 py-4 bg-walnut text-cream font-sans text-[0.6875rem] uppercase tracking-[0.22em] font-semibold hover:bg-deep transition-colors duration-300 disabled:opacity-70 rounded-xl"
              >
                {signupLoading ? "Creating..." : "Create Account"}
              </button>
            </form>
          </div>
        </div>

        {/* --- Dark Overlay Slider --- */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-walnut text-cream transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center overflow-hidden z-20 ${isLogin ? "translate-x-full rounded-l-[2rem]" : "translate-x-0 rounded-r-[2rem]"}`}
          style={{
            boxShadow: isLogin ? "-12px 0 40px rgba(58,41,32,0.15)" : "12px 0 40px rgba(58,41,32,0.15)"
          }}
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

          <div className="relative w-full h-full flex items-center justify-center">
            {/* Panel shown when Login is active */}
            <div className={`absolute w-full px-10 sm:px-12 flex flex-col items-center text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLogin ? "opacity-100 translate-x-0 delay-100" : "opacity-0 -translate-x-12 pointer-events-none"}`}>
              <p className="font-sans text-[0.5625rem] uppercase tracking-[0.3em] text-cream/50 font-medium mb-5">
                House of Melone
              </p>
              <h2 className="text-[2rem] md:text-[2.25rem] font-serif font-light mb-8 text-cream leading-[1.1] tracking-[-0.01em]">
                Welcome back
              </h2>
              <Image
                src="/logo.png"
                alt="House of Melone Logo"
                width={64}
                height={64}
                className="mb-6 invert opacity-80 object-contain"
              />
              <p className="font-serif font-light text-[1.375rem] tracking-[0.02em] mb-10 text-cream/80">
                Sartorially considered.
              </p>
              <button
                onClick={toggleMode}
                className="px-8 py-3.5 border border-cream/30 text-cream font-sans text-[0.6875rem] uppercase tracking-[0.2em] font-medium hover:bg-cream hover:text-walnut transition-all duration-300 rounded-full"
              >
                Sign Up
              </button>
            </div>

            {/* Panel shown when Signup is active */}
            <div className={`absolute w-full px-10 sm:px-12 flex flex-col items-center text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${!isLogin ? "opacity-100 translate-x-0 delay-100" : "opacity-0 translate-x-12 pointer-events-none"}`}>
              <p className="font-sans text-[0.5625rem] uppercase tracking-[0.3em] text-cream/50 font-medium mb-5">
                House of Melone
              </p>
              <h2 className="text-[2rem] md:text-[2.25rem] font-serif font-light mb-8 text-cream leading-[1.1] tracking-[-0.01em]">
                Welcome
              </h2>
              <Image
                src="/logo.png"
                alt="House of Melone Logo"
                width={64}
                height={64}
                className="mb-6 invert opacity-80 object-contain"
              />
              <p className="font-serif font-light text-[1.375rem] tracking-[0.02em] mb-10 text-cream/80">
                Quietly refined. Distinctly yours.
              </p>
              <button
                onClick={toggleMode}
                className="px-8 py-3.5 border border-cream/30 text-cream font-sans text-[0.6875rem] uppercase tracking-[0.2em] font-medium hover:bg-cream hover:text-walnut transition-all duration-300 rounded-full"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
