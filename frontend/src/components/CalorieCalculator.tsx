import React from 'react';
import { Person } from '../types/Person';

interface CalorieCalculatorProps {
    person: Person;
}

export const CalorieCalculator: React.FC<CalorieCalculatorProps> = ({ person }) => {
    const calculateBMR = () => {
        if (person.gender === 'Male') {
            return 10 * person.weight + 6.25 * person.height - 5 * person.age + 5;
        } else {
            return 10 * person.weight + 6.25 * person.height - 5 * person.age - 161;
        }
    };

    const calculateCalories = () => {
        const activities = [
            "Little/no exercise",
            "Light exercise",
            "Moderate exercise (3-5 days/wk)",
            "Very active (6-7 days/wk)",
            "Extra active (very active & physical job)",
        ];
        const weights = [1.2, 1.375, 1.55, 1.725, 1.9];
        const weight = weights[activities.indexOf(person.activity)];
        return calculateBMR() * weight;
    };

    const maintainCalories = calculateCalories();
    const plans = [
        { name: "Maintain weight", weight: 1, loss: "-0 kg/week" },
        { name: "Mild weight loss", weight: 0.9, loss: "-0.25 kg/week" },
        { name: "Weight loss", weight: 0.8, loss: "-0.5 kg/week" },
        { name: "Extreme weight loss", weight: 0.6, loss: "-1 kg/week" },
    ];

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
            <p className="mb-4">
                The results show a number of daily calorie estimates that can be used as a guideline for how many calories to consume each day to maintain, lose, or gain weight at a chosen rate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {plans.map((plan) => (
                    <div key={plan.name} className="bg-gray-100 p-4 rounded">
                        <h3 className="font-bold mb-2">{plan.name}</h3>
                        <p>{Math.round(maintainCalories * plan.weight)} Calories/day</p>
                        <p className="text-sm text-gray-600">{plan.loss}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

