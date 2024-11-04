import { Groceries, GroceryItemType, Ingredient, AnyIngredient } from "../assets/ingredients";
import { plat } from "../assets/plats";
import styles from "./App.module.css";
import { GroceriesListItem } from "./GroceriesListItem";

interface Props {  
  generateGroceries: (menus: plat[]) => Groceries;
  menuShortlist: plat[];
}

export const GroceriesList = ({
  generateGroceries,
  menuShortlist
}: Props) => {

  const sortFn = (a: { name: string, count: number }, b: { name: string, count: number }) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  };

  const groceries = generateGroceries(menuShortlist);
  const getEmoji = (category: keyof Groceries): string => {
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
  }

  return (
    <div className={styles.listeCourses}>
      <h2>Liste des courses</h2>
      <div>
        {Object.keys(groceries).map((category) => {
          const categoryTitle = `${getEmoji(category as keyof Groceries)} ${
            category[0].toUpperCase()
          }${category.slice(1)}:`;
          return groceries[category as keyof Groceries].length ? (
            <div key={category}>
              <h4>{categoryTitle}</h4>
              <ul>
                {groceries[category as keyof Groceries]
                  .sort(sortFn)
                  .map((ingredient, idx) => (
                    <li key={`${ingredient.name}${idx}`}>
                      <GroceriesListItem label={ingredient.name} count={ingredient.count} />
                    </li>
                  )) 
                }
              </ul>
            </div>
          ) : null
        })}
      </div>
    </div>
  );
};
