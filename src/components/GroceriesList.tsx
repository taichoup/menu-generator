import { Groceries } from "../assets/ingredients";
import { Dish } from "../assets/plats";
import { getEmoji } from "../utils";
import styles from "./App.module.css";
import { GroceriesListItem } from "./GroceriesListItem";

interface Props {  
  generateGroceries: (menus: Dish[]) => Groceries;
  menuShortlist: Dish[];
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
