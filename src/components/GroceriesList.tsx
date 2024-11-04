import { Groceries } from "../assets/ingredients";
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

  const groceries = generateGroceries(menuShortlist);

  return (
    <div className={styles.listeCourses}>
      <h2>Liste des courses</h2>
      <div>
        {Object.keys(groceries).map((category) => {
          return(
            <div key={category}>
              <h4>{category}</h4>
              <ul>
                {groceries[category as keyof Groceries].map(ingredient => (
                  <li key={ingredient}>
                    <GroceriesListItem label={ingredient} />
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  );
};
