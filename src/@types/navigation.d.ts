export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newMeal: undefined;
      feedback: {
        inDiet: boolean;
      };
      mealDetail: {
        mealId: number;
      };
      editMeal: {
        mealId: number;
      };
    }
  }
}
