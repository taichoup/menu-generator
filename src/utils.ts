import { getEnumName, Groceries } from "./assets/ingredients";
import { Dish, Seasons } from "./assets/plats";

export const getCurrentSeason = (): Seasons => {
  const currentMonth = new Date().getMonth();
  if (currentMonth < 4) {
    return Seasons.WINTER;
  }
  if (currentMonth < 7) {
    return Seasons.SPRING;
  }
  if (currentMonth < 10) {
    return Seasons.SUMMER;
  }
  return Seasons.FALL;
};


  // un peu du gâchis, mais bon (todo: repenser les data structures ?)
  export const generateGroceries = (menus: Dish[]): Groceries => {

    const ingredients = menus.flatMap((menu) => menu.ingredients);

    return ingredients.reduce((acc: Groceries, currentIngredient: string) => {
      const ingredientType = getEnumName(currentIngredient);
      
      if (ingredientType) {

        // - 1 if not yet added
        const ingredientIndexInGroceries = acc[ingredientType]
          .findIndex(item => item.name === currentIngredient);

        if (ingredientIndexInGroceries >= 0) {
          // if item already in list, increment its count
          acc[ingredientType][ingredientIndexInGroceries].count += 1;
        } else {
          
          // if not, add it
          acc[ingredientType]
            .push({ name: currentIngredient, count: 1 });
        }
      }
      return acc;
    }, {
      alcools: [],
      condiments: [],
      fromages: [],
      fruits: [],
      féculents: [],
      graines: [],
      laitages: [],
      légumes: [],
      misc: [],
      oléagineux: [],
      poisson: [],
      surgelés: [],
      viande: [],
    } as Groceries)
    
  }

  export const getEmoji = (category: keyof Groceries): string => {
    switch (category) {
      case "alcools":
        return String.fromCodePoint(0x1f377); // 🍷
      case "condiments":
        return String.fromCodePoint(0x1f9c2); // 🧂
      case "fromages":
        return String.fromCodePoint(0x1f9c0); // etc.
      case "fruits":
        return String.fromCodePoint(0x1f95d);
      case "féculents":
        return String.fromCodePoint(0x1f35d);
      case "graines":
        return String.fromCodePoint(0x1f35a);
      case "laitages":
        return String.fromCodePoint(0x1f95b);
      case "légumes":
        return String.fromCodePoint(0x1f966);
      case "oléagineux":
        return String.fromCodePoint(0x1f95c);
      case "misc":
        return String.fromCodePoint(0x1f344);
      case "poisson":
        return String.fromCodePoint(0x1f41f);
      case "surgelés":
        return String.fromCodePoint(0x2744);
      case "viande":
        return String.fromCodePoint(0x1f969);
    }
  };