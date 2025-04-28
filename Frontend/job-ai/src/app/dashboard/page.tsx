import React from 'react';
import Navbar from "../../components/Navbar"; // Adjust the path if necessary

const DashboardPage = () => {
    const analyzedData = {
        name: "John Doe",
        skills: ["JavaScript", "React", "TypeScript", "Node.js"],
        experience: [
            {
                company: "TechCorp",
                role: "Frontend Developer",
                duration: "2 years",
            },
            {
                company: "WebSolutions",
                role: "Junior Developer",
                duration: "1 year",
            },
        ],
        education: "Bachelor's in Computer Science",
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <header className="bg-orange-500 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <p className="mt-2 text-lg">
                        View your AI-analyzed resume data and insights.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">AI-Analyzed Resume Data</h2>
                </section>

                {/* Name Section */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-orange-500">Name</h3>
                    <p className="text-gray-700">{analyzedData.name}</p>
                </section>

                {/* Skills Section */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-orange-500">Skills</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {analyzedData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>

                {/* Experience Section */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-orange-500">Experience</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {analyzedData.experience.map((job, index) => (
                            <li key={index}>
                                <strong>{job.role}</strong> at {job.company} ({job.duration})
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Education Section */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-orange-500">Education</h3>
                    <p className="text-gray-700">{analyzedData.education}</p>
                </section>
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

export default DashboardPage;