'use client';

import React, { useState } from 'react';
import Navbar from "../../components/Navbar"; // Adjust the path if necessary

const UploadPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            setMessage(`Selected file: ${event.target.files[0].name}`);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        try {
            setUploading(true);
            setMessage(null);

            const response = await fetch('/api/resume/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setMessage('Resume uploaded successfully!');
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Failed to upload resume.');
            }
        } catch (error) {
            setMessage('An error occurred while uploading the resume.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <header className="bg-orange-500 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold">Upload Your Resume</h1>
                    <p className="mt-2 text-lg">
                        Let AI analyze your resume and match you to the best jobs.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Upload Your Resume Below
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Supported formats: PDF, DOC, DOCX
                    </p>
                </section>

                <section className="bg-orange-100 shadow-md rounded-lg p-6 text-center">
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="block mx-auto mb-4 text-gray-700"
                    />
                    {file && (
                        <p className="text-gray-800 font-medium mb-4">
                            Selected file: {file.name}
                        </p>
                    )}
                    <button
                        onClick={handleUpload}
                        disabled={uploading}
                        className="bg-orange-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                    {message && (
                        <p className="mt-4 text-gray-800 font-medium">{message}</p>
                    )}
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

export default UploadPage;