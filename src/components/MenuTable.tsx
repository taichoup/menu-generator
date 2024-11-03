import { MenuEntry } from "./MenuEntry";
import { plat } from '../assets/plats';
import styles from "./App.module.css";
 
interface Props {
    menus: plat[];
    daysInTable: number[];
    lunchesQty: number;
    dinnersQty: number;
}

export const MenuTable = ({menus, daysInTable, lunchesQty, dinnersQty}: Props) => {
    return (
      <div className={styles.menuTable}>
        <table>
          <thead>
            <tr>
              {daysInTable.map((day) => (
                <td key={`j${day}`}>{`Jour ${day}`}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {menus
                .filter((menu, idx) => idx % 2 === 0)
                .map((menu) => (
                  <MenuEntry
                    source={menu.source || ""}
                    name={menu.name}
                    key={menu.name}
                  />
                ))
                .slice(0, lunchesQty)}
            </tr>
            <tr>
              {menus
                .filter((menu, idx) => idx % 2 === 1)
                .map((menu) => (
                  <MenuEntry
                    source={menu.source || ""}
                    name={menu.name}
                    key={menu.name}
                  />
                ))
                .slice(0, dinnersQty)}
            </tr>
          </tbody>
        </table>
      </div>
    );
}