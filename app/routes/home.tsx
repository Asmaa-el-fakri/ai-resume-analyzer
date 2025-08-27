import type {Route} from "./.+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/routes/constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "../../lib/puter";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Resumind" },
        { name: "description", content: "Smart feedback for your dream job!" },
    ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate('/auth?next=/');
        }
    }, [auth.isAuthenticated, navigate]); // Removed 'next' from dependencies

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />

            <section className="main-section">
                <div className="page-heading py-60">
                    <h1>Track your Applications & Resum Rating </h1>
                    <h2> Review your submissions and check AI-powered feedback.</h2>
                </div>
            </section>

            {resumes.length > 0 && (
                <div className="resmes-section">
                    {resumes.map((resume) => (
                        <ResumeCard key={resume.id} resume={resume}/>
                    ))}
                </div>
            )}
        </main>
    );
}