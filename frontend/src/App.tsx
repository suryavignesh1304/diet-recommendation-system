import React, { useState } from 'react';
import { UserForm } from './components/UserForm';
import { BMICalculator } from './components/BMICalculator';
import { CalorieCalculator } from './components/CalorieCalculator';
import { DietRecommendation } from './components/DietRecommendation';
import { Person } from './types/Person';

const App: React.FC = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleSubmit = async (formData: Person) => {
    setPerson(formData);
    // TODO: Call API to get recommendations
    // const response = await fetch('http://localhost:8080/predict/', ...);
    // setRecommendations(response.data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Automatic Diet Recommendation System</h1>
      <UserForm onSubmit={handleSubmit} />
      {person && (
        <>
          <BMICalculator person={person} />
          <CalorieCalculator person={person} />
          <DietRecommendation person={person} recommendations={recommendations} />
        </>
      )}
    </div>
  );
};

export default App;

