import { Link } from "react-router-dom";
import ScoreCircle from "~/components/ScoreCircle";

interface Feedback {
    overallScore: number;
}

interface Resume {
    id: string;
    jobTitle: string;
    companyName: string;
    feedback?: Feedback;
    imagePath: string;
}

const ResumeCard = ({
                        resume: { id, jobTitle, companyName, feedback, imagePath },
                    }: {
    resume: Resume;
}) => {
    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card animate-in fade-in duration-1000 block rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform"
        >
            {/* Header */}
            <div className="resume-card-header flex justify-between items-center p-4">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">{companyName}</h2>
                    <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                </div>
                <div className="flex-shrink-0">
                    {feedback && <ScoreCircle score={feedback.overallScore} />}
                </div>
            </div>

            {/* Image */}
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={`/images/${imagePath}`}
                        alt="resume"
                        className="w-full h-[350px] max-sm:h-[250px] object-cover object-top"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/resume_01.png";
                        }}
                    />
                </div>
            </div>
        </Link>
    );
};

// Composant parent pour afficher plusieurs CVs
const ResumeList = () => {
    // Données de démonstration pour plusieurs CVs
    const resumes: Resume[] = [
        {
            id: "1",
            jobTitle: "Frontend Developer",
            companyName: "Google",
            feedback: { overallScore: 85 },
            imagePath: "resume_01.png"
        },
        {
            id: "2",
            jobTitle: "Cloud Engineer",
            companyName: "Microsoft",
            feedback: { overallScore: 55 },
            imagePath: "resume_02.png"
        },
        {
            id: "3",
            jobTitle: "UX Designer",
            companyName: "Apple",
            feedback: { overallScore: 92 },
            imagePath: "resume_03.png"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Review your submissions</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumes.map((resume) => (
                    <ResumeCard key={resume.id} resume={resume} />
                ))}
            </div>
        </div>
    );
};

export default ResumeList;