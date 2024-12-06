import React, { useState } from 'react';
import { Person } from '../types/Person';

interface UserFormProps {
  onSubmit: (formData: Person) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Person>({
    age: 25,
    height: 170,
    weight: 70,
    gender: 'Male',
    activity: 'Little/no exercise',
    meals_calories_perc: {
      breakfast: 25,
      lunch: 35,
      dinner: 30,
      snack: 10,
    },
    weight_loss_option: 'Maintain weight',
    weight_loss: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="age" className="block mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="height" className="block mb-2">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block mb-2">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block mb-2">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="activity" className="block mb-2">Activity Level</label>
          <select
            id="activity"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Little/no exercise">Little/no exercise</option>
            <option value="Light exercise">Light exercise</option>
            <option value="Moderate exercise (3-5 days/wk)">Moderate exercise (3-5 days/wk)</option>
            <option value="Very active (6-7 days/wk)">Very active (6-7 days/wk)</option>
            <option value="Extra active (very active & physical job)">Extra active (very active & physical job)</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight_loss_option" className="block mb-2">Weight Loss Goal</label>
          <select
            id="weight_loss_option"
            name="weight_loss_option"
            value={formData.weight_loss_option}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Maintain weight">Maintain weight</option>
            <option value="Mild weight loss">Mild weight loss</option>
            <option value="Weight loss">Weight loss</option>
            <option value="Extreme weight loss">Extreme weight loss</option>
          </select>
        </div>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

