import { plat } from "../assets/plats";
import styles from "./App.module.css";
import { GroceriesListItem } from "./GroceriesListItem";

interface Props {  
  generateGroceries: (menus: plat[]) => string[];
  menuShortlist: plat[];
}



export const GroceriesList = ({generateGroceries, menuShortlist}: Props) => {

  return (
    <div className={styles.listeCourses}>
      <h2>Liste des courses</h2>
      <ul>
        {generateGroceries(menuShortlist).map((ingredient: string) => (
          <li key={ingredient}>
            <GroceriesListItem label={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
};
