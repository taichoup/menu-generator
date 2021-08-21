import React, { useState } from 'react';
import { ListeDeCoursesItem } from './ListeDeCoursesItem';
import { DifficultyValues, plats, plat, tags } from '../assets/plats';
import styles from './App.module.css';

const MENUS_TO_GENERATE = 14;

enum daysOfTheWeek {
  MONDAY = 'lundi',
  TUESDAY = 'mardi',
  WEDNESDAY = 'mercredi',
  THURSDAY = 'jeudi',
  FRIDAY = 'vendredi',
  SATURDAY = 'samedi',
  SUNDAY = 'dimanche'
};

function App() {

  const [menus, setMenus] = useState<plat[]>();
  const [settingVeggie, setSettingVeggie] = useState(false);
  const [settingVegan, setSettingVegan] = useState(false);
  const [settingGlutenFree, setSettingGlutenFree] = useState(false);
  const [difficulty, setDifficulty] = useState('');

  const handleGenerateMenus = () => {
    const menus: plat[] = 
      [...plats]
        .sort(() => Math.random() - Math.random())
        .slice(0, MENUS_TO_GENERATE)
        // y a un souci là. Parfois ça ne génère pas assez de menus. Ce qu'il faudrait quand ça filtre trop, c'est que ça répète les menus pour en avoir le bon nombre
        .filter(plat => difficulty ? plat.difficulty === difficulty : plat)
        .filter(plat => settingVeggie ? plat?.tags?.includes(tags.VEGGIE) : plat)
        .filter(plat => settingVegan ? plat?.tags?.includes(tags.VEGAN) : plat)
        .filter(plat => settingGlutenFree ? plat?.tags?.includes(tags.GLUTEN_FREE) : plat);
    setMenus(menus);
  }

  const generateListeDeCourses = (menus: plat[]) => {
    const ingredients = menus.flatMap(menu => menu.ingredients);
    const dedupedIngredients = new Set(ingredients);
    return Array.from(dedupedIngredients).sort();
  };

  const handleVeggieSettingChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setSettingVeggie(!settingVeggie);
  };

  const handleVeganSettingChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setSettingVegan(!settingVegan);
  };

  const handleGlutenSettingChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setSettingGlutenFree(!settingGlutenFree);
  };

  const handleDifficultySettingChange = (event: React.FormEvent) => {
    setDifficulty((event.currentTarget as HTMLInputElement).value);
  };


return (
  <div className={styles.App}>
    <section>
      <form className={styles.settings}>
        <div className={styles.settingsGroup}>
          <h4>Restrictions :</h4>
          <div>
            <input type="checkbox" id="settings_veggie" onChange={handleVeggieSettingChange} />
            <label htmlFor="settings_veggie">{tags.VEGGIE}</label>
          </div>
          <div>
            <input type="checkbox" id="settings_vegan" onChange={handleVeganSettingChange} />
            <label htmlFor="settings_vegan">{tags.VEGAN}</label>
          </div>
          <div>
            <input type="checkbox" id="settings_nogluten" onChange={handleGlutenSettingChange} />
            <label htmlFor="settings_nogluten">{tags.GLUTEN_FREE}</label>
          </div>
        </div>
        <div className={styles.settingsGroup}>
          <h4>Difficulté :</h4>
          <div>
            <input type="radio" id="difficulty_casual" name="difficulty" value="casual" onChange={handleDifficultySettingChange} />
            <label htmlFor="difficulty_casual">{DifficultyValues.CASUAL}</label>
          </div>
          <div>
            <input type="radio" id="difficulty_medium" name="difficulty" value="medium" onChange={handleDifficultySettingChange} />
            <label htmlFor="difficulty_medium">{DifficultyValues.MEDIUM}</label>
          </div>
          <div>
            <input type="radio" id="difficulty_hard" name="difficulty" value="fancy" onChange={handleDifficultySettingChange} />
            <label htmlFor="difficulty_hard">{DifficultyValues.FANCY}</label>
          </div>
        </div>
      </form>
      <div className={styles.buttonWrapper}>
        <button onClick={handleGenerateMenus}>Générer les menus</button>
      </div>
      {menus && (
      <table className={styles.schedule}>
        <thead>
          <tr>
            <td>{daysOfTheWeek.MONDAY}</td>
            <td>{daysOfTheWeek.TUESDAY}</td>
            <td>{daysOfTheWeek.WEDNESDAY}</td>
            <td>{daysOfTheWeek.THURSDAY}</td>
            <td>{daysOfTheWeek.FRIDAY}</td>
            <td>{daysOfTheWeek.SATURDAY}</td>
            <td>{daysOfTheWeek.SUNDAY}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {menus
              .slice(0,7)
              .map(m => <td>{m.name}</td>)
            }
          </tr>
          <tr>
            {menus
              .slice(7)
              .map(m => <td>{m.name}</td>)
            }
          </tr>
        </tbody>
      </table>
      )}
      {menus && (
        <div className={styles.listeCourses}>
          <h2>Liste des courses</h2>
          <ul>
            {generateListeDeCourses(menus).map(ingredient => <li><ListeDeCoursesItem label={ingredient} /></li>)}
          </ul>
        </div>
      )}
        
    </section>
  </div>
  );
}

export default App;
