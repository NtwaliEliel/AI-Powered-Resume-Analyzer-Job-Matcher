import React from 'react';
import Navbar from "../../components/Navbar"; // Adjust the path if necessary

interface Job {
    id: number;
    title: string;
    company: string;
    matchPercentage: number;
}

const jobs: Job[] = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', matchPercentage: 85 },
    { id: 2, title: 'Data Scientist', company: 'DataWorks', matchPercentage: 78 },
    { id: 3, title: 'Product Manager', company: 'Innovate Inc.', matchPercentage: 92 },
];

const JobsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <header className="bg-orange-500 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Recommended Jobs</h1>
                    <p className="mt-2 text-lg">
                        Explore jobs tailored to your skills and preferences.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <ul>
                    {jobs.map((job) => (
                        <li
                            key={job.id}
                            className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h2 className="text-xl font-semibold text-orange-500">{job.title}</h2>
                            <p className="text-gray-600">{job.company}</p>
                            <p className="text-green-500 font-medium">
                                Match: {job.matchPercentage}%
                            </p>
                        </li>
                    ))}
                </ul>
            </main>

            {/* Footer */}
            <footer className="bg-orange-500 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2025 Earn Your Dream Job. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default JobsPage;