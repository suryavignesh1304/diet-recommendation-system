export interface Person {
    age: number;
    height: number;
    weight: number;
    gender: 'Male' | 'Female';
    activity: string;
    meals_calories_perc: {
        breakfast: number;
        lunch: number;
        dinner: number;
        snack: number;
    };
    weight_loss_option: string;
    weight_loss: number;
}

