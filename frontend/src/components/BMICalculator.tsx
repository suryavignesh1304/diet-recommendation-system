import React from 'react';
import { Person } from '../types/Person';

interface BMICalculatorProps {
    person: Person;
}

export const BMICalculator: React.FC<BMICalculatorProps> = ({ person }) => {
    const calculateBMI = () => {
        const bmi = person.weight / ((person.height / 100) ** 2);
        return bmi.toFixed(2);
    };

    const getBMICategory = (bmi: number) => {
        if (bmi < 18.5) return { category: 'Underweight', color: 'text-red-500' };
        if (bmi < 25) return { category: 'Normal', color: 'text-green-500' };
        if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-500' };
        return { category: 'Obesity', color: 'text-red-500' };
    };

    const bmi = parseFloat(calculateBMI());
    const { category, color } = getBMICategory(bmi);

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">BMI Calculator</h2>
            <p className="text-xl mb-2">Your BMI: {bmi} kg/m²</p>
            <p className={`text-xl font-bold ${color}`}>{category}</p>
            <p className="mt-2">Healthy BMI range: 18.5 kg/m² - 25 kg/m²</p>
        </div>
    );
};

