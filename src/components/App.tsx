import React, { useState } from 'react';
import { plats, plat, tags, Seasons } from '../assets/plats';
import styles from './App.module.css';
import { MenuTable } from './MenuTable';
import { GroceriesList } from './GroceriesList';
import { MainForm } from './MainForm';
import { getEnumName, Groceries, Ingredients } from '../assets/ingredients';

function App() {

  const [menus, setMenus] = useState<plat[]>();
  const [menuQty, setMenuQty] = useState(14);
  const [settingVeggie, setSettingVeggie] = useState(false);
  const [settingVegan, setSettingVegan] = useState(false);
  const [settingGlutenFree, setSettingGlutenFree] = useState(false);
  const [settingSeasonal, setSettingSeasonal] = useState(false);
  const [difficulty, setDifficulty] = useState('');

  const getCurrentSeason = (): Seasons => {
    const currentMonth = new Date().getMonth();
    if (currentMonth < 4) {
      return Seasons.WINTER;
    }
    if (currentMonth < 7) {
      return Seasons.SPRING
    }
    if (currentMonth < 10) {
      return Seasons.SUMMER
    }
    return Seasons.FALL;
  }

  const handleGenerateMenus = (menuQty: number) => {
    const menus: plat[] = 
      [...plats]
        .sort(() => Math.random() - Math.random())
        .slice(0, menuQty)
        // y a un souci là. Parfois ça ne génère pas assez de menus. Ce qu'il faudrait quand ça filtre trop, c'est que ça répète les menus pour en avoir le bon nombre
        .filter(plat => difficulty ? plat.difficulty === difficulty : plat)
        .filter(plat => settingVeggie ? plat?.tags?.includes(tags.VEGGIE) : plat)
        .filter(plat => settingVegan ? plat?.tags?.includes(tags.VEGAN) : plat)
        .filter(plat => settingGlutenFree ? plat?.tags?.includes(tags.GLUTEN_FREE) : plat)
        .filter(plat => settingSeasonal ? plat.seasons === 'all' || plat.seasons.includes(getCurrentSeason()) : plat);
    setMenus(menus);
  }


  // un peu du gâchis, mais bon (todo: repenser les data structures ?)
  const generateGroceries = (menus: plat[]): Groceries => {

    const ingredients = menus.flatMap((menu) => menu.ingredients);

    return ingredients.reduce((prev: Groceries, curr: string) => {
      const ingredientType = getEnumName(curr);
      if (ingredientType) {
        return {
          ...prev,
          [ingredientType]: prev[ingredientType] 
            ? prev[ingredientType].concat(curr as Ingredients) 
            : [curr]
        } 
      }
      return prev;
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

  const handleMenuQtyChange = (event: React.FormEvent) => {
    setMenuQty(Number((event.currentTarget as HTMLInputElement).value));
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
