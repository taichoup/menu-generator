import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import { MenuEntry } from "./MenuEntry";
import { plat } from "../assets/plats";
import styles from "./App.module.css";

interface Props {
  menus: plat[];
  daysInTable: number[];
  lunchesQty: number;
  dinnersQty: number;
}

export const MenuTable = ({
  menus,
  daysInTable,
  lunchesQty,
  dinnersQty,
}: Props) => {
  return (
    <div className={styles.menuTable}>
      <TableContainer>
        <Table>
          <TableHead>
            <tr>
              {daysInTable.map((day) => (
                <td key={`j${day}`}>{`Jour ${day}`}</td>
              ))}
            </tr>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
