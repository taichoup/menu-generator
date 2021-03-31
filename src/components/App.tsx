import './App.css';
import { useState } from 'react';
import { ListeDeCoursesItem } from './ListeDeCoursesItem';
// import { plats, plat } from '../assets/plats';
import { openRecipes, openRecipe } from '../assets/open_recipes';


const MENUS_TO_GENERATE = 14;

function App() {

  const [menus, setMenus] = useState<openRecipe[]>();

  const handleGenerateMenus = () => {
    const menus: openRecipe[] = [...openRecipes].sort(() => Math.random() - Math.random()).slice(0, MENUS_TO_GENERATE);
    setMenus(menus);
  }

  const generateListeDeCourses = (menus: openRecipe[]) => {
    const ingredients = menus.flatMap(menu => menu.ingredients);
    const dedupedIngredients = new Set(ingredients);
    return Array.from(dedupedIngredients).sort();
  }


return (
    <div className="App">
      <section>
        {menus && (
        <table>
          <thead>
            <tr>
              <td>Lundi</td>
              <td>Mardi</td>
              <td>Mercredi</td>
              <td>Jeudi</td>
              <td>Vendredi</td>
              <td>Samedi</td>
              <td>Dimanche</td>
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
          <div className="listeCourses">
            <h2>Liste des courses</h2>
            <ul>
              {generateListeDeCourses(menus).map(ingredient => <li><ListeDeCoursesItem label={ingredient} /></li>)}
            </ul>
          </div>
        )}
        <button onClick={handleGenerateMenus}>Generate menus</button>
        <select>
          <option value='fat'>fatty</option>
          <option value='fat'>équilibré</option>
          <option value='fat'>healthy</option>
        </select>
      </section>
    </div>
  );
}

export default App;
