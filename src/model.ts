export type Meal = {
  id: number;
  name: string;
  description: string;
  dateAndHour: Date;
  inDiet: boolean;
};

export type FormData = {
  name: string;
  description: string;
  date: Date;
  hour: Date;
  inDiet: boolean;
};

export type Statistics = {
  inDiet: boolean;
  percentInDiet: number;
  registeredMeals: number;
  mealsInDiet: number;
  mealsOutDiet: number;
  greaterMealSequency: number;
};
