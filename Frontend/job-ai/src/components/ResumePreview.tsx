import React from 'react';

interface ResumePreviewProps {
    uploadedResume: string; // URL or base64 string of the uploaded resume
    extractedInfo: {
        name?: string;
        email?: string;
        phone?: string;
        skills?: string[];
        experience?: string[];
        education?: string[];
    };
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ uploadedResume, extractedInfo }) => {
    return (
        <div className="resume-preview">
            <h2>Resume Preview</h2>
            <div className="resume-container">
                {uploadedResume ? (
                    <iframe
                        src={uploadedResume}
                        title="Uploaded Resume"
                        style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}
                    />
                ) : (
                    <p>No resume uploaded.</p>
                )}
            </div>

            <h3>AI-Extracted Information</h3>
            <div className="extracted-info">
                <p><strong>Name:</strong> {extractedInfo.name || 'N/A'}</p>
                <p><strong>Email:</strong> {extractedInfo.email || 'N/A'}</p>
                <p><strong>Phone:</strong> {extractedInfo.phone || 'N/A'}</p>
                <p><strong>Skills:</strong> {extractedInfo.skills?.join(', ') || 'N/A'}</p>
                <p><strong>Experience:</strong></p>
                <ul>
                    {extractedInfo.experience?.length
                        ? extractedInfo.experience.map((exp, index) => <li key={index}>{exp}</li>)
                        : <li>N/A</li>}
                </ul>
                <p><strong>Education:</strong></p>
                <ul>
                    {extractedInfo.education?.length
                        ? extractedInfo.education.map((edu, index) => <li key={index}>{edu}</li>)
                        : <li>N/A</li>}
                </ul>
            </div>
        </div>
    );
};

export default ResumePreview;