import React from 'react';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    matchScore: number;
    onClick?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, matchScore, onClick }) => {
    return (
        <div
            className="job-card border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{company}</p>
            <p className="text-sm text-gray-500">{location}</p>
            <div className="mt-2">
                <span className="text-sm font-medium">Match Score: </span>
                <span className="text-sm font-bold text-green-600">{matchScore}%</span>
            </div>
        </div>
    );
};

export default JobCard;