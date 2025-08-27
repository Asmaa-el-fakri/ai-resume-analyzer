import React, { useEffect } from "react";
import { useLocation, useNavigate, type Location, type NavigateFunction } from "react-router-dom";
import { usePuterStore } from "../../lib/puter";

export const getMeta = () => [
    { title: "resumind | Auth" },
    { name: "description", content: "Log into your account" }
];

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location: Location = useLocation();
    const next: string = location.search.split('?next=')[1];
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated ) {
            navigate(next);
        }
    }, [auth.isAuthenticated, next, navigate]);

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center p-4">
            <div className="shadow-lg border-2 border-gray-200 rounded-2xl bg-white/90 backdrop-blur-sm">
                <section className="flex flex-col gap-8 rounded-2xl p-8 md:p-10 w-full max-w-[900px]">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
                        <h2 className="text-gray-600">Log in to continue your job journey</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {isLoading ? (
                            <button
                                className="auth-button animate-pulse flex justify-center items-center"
                                disabled
                            >
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            auth.isAuthenticated ? (
                                <button className="auth-button" onClick={auth.signOut}>
                                    <p>Log out</p>
                                </button>
                            ) : (
                                <button className="auth-button" onClick={auth.signIn}>
                                    <p>Log in</p>
                                </button>
                            )
                        )}
                    </div>

                    {!auth.isAuthenticated && (
                        <p className="text-sm text-gray-500 text-center">
                            By logging in, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Auth;