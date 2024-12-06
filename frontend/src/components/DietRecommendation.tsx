import React from 'react';
import { Person } from '../types/Person';

interface DietRecommendationProps {
    person: Person;
    recommendations: any[];
}

export const DietRecommendation: React.FC<DietRecommendationProps> = ({ person, recommendations }) => {
    if (recommendations.length === 0) {
        return null;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Diet Recommendations</h2>
            {/* TODO: Implement diet recommendations display */}
            <p>Recommendations will be displayed here once the API is integrated.</p>
        </div>
    );
};

