import React, { useState } from 'react';
import { dishes, Dish, Tags } from '../assets/plats';
import styles from './App.module.css';
import { MenuTable } from './MenuTable';
import { GroceriesList } from './GroceriesList';
import { MainForm } from './MainForm';
import { generateGroceries, getCurrentSeason } from '../utils';

function App() {

  const [menus, setMenus] = useState<Dish[]>();
  const [menuQty, setMenuQty] = useState(14);
  const [settingVeggie, setSettingVeggie] = useState(false);
  const [settingVegan, setSettingVegan] = useState(false);
  const [settingGlutenFree, setSettingGlutenFree] = useState(false);
  const [settingSeasonal, setSettingSeasonal] = useState(false);
  const [difficulty, setDifficulty] = useState('casual');

  const handleGenerateMenus = (menuQty: number) => {
    const menus: Dish[] = [...dishes]
      .reduce<Dish[]>((prev, curr) => {
        if (curr.difficulty !== difficulty) {
          return prev;
        }
        if (settingVeggie && !curr?.tags?.includes(Tags.VEGGIE)) {
          return prev;
        }
        if (settingVegan && !curr?.tags?.includes(Tags.VEGAN)) {
          return prev;
        }
        if (settingGlutenFree && !curr?.tags?.includes(Tags.GLUTEN_FREE)) {
          return prev;
        }
        if (
          settingSeasonal &&
          !(curr?.seasons === "all") &&
          !curr?.seasons.includes(getCurrentSeason())
        ) {
          return prev;
        }
        return prev.concat(curr);
      }, [])
      .sort(() => Math.random() - Math.random())
      .slice(0, menuQty); // we have to sort before slicing even if it's a shame for perfs because otherwise we'll always get the same menus
    setMenus(menus);
  }

  const handleVeggieSettingChange = () => {
    setSettingVeggie(!settingVeggie);
  };

  const handleSeasonalSettingChange = () => {
    setSettingSeasonal(!settingSeasonal);
  }

  const handleVeganSettingChange = () => {
    setSettingVegan(!settingVegan);
  };

  const handleGlutenSettingChange = () => {
    setSettingGlutenFree(!settingGlutenFree);
  };

  const handleDifficultySettingChange = (event: React.FormEvent) => {
    setDifficulty((event.currentTarget as HTMLInputElement).value);
  };

  const handleMenuQtyChange = (newValue: number) => {
    setMenuQty(newValue);
  };

  // array with the qty of days corresponding to the qty of menus
  // (2 menus per day)
  // this is 1-indexed to facilitate string interpolation below
  const daysInTable = Array.from(Array(Math.ceil(menuQty / 2)).keys()).map(elt => elt + 1);
  const lunchesQty = Math.ceil(menuQty / 2);
  const dinnersQty = Math.floor(menuQty / 2);

return (
  <div className={styles.App}>
    <section>
      <MainForm
        handleDifficultySettingChange={handleDifficultySettingChange}
        handleGenerateMenus={handleGenerateMenus}
        handleGlutenSettingChange={handleGlutenSettingChange}
        handleMenuQtyChange={handleMenuQtyChange}
        handleSeasonalSettingChange={handleSeasonalSettingChange}
        handleVeganSettingChange={handleVeganSettingChange}
        handleVeggieSettingChange={handleVeggieSettingChange}
        menuQty={menuQty}
      />
      {menus ? (
        <MenuTable
          menus={menus}
          daysInTable={daysInTable}
          lunchesQty={lunchesQty}
          dinnersQty={dinnersQty}
        />
      ) : null}
      {menus ? (
        <GroceriesList
          generateGroceries={generateGroceries}
          menuShortlist={menus.slice(0, menuQty)}
        />
      ) : null}
    </section>
  </div>
);
}

export default App;
