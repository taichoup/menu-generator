import { useState } from "react";
import { DifficultyLevel, tags } from "../assets/plats";
import styles from "./App.module.css";

interface Props {
  handleDifficultySettingChange: (event: React.FormEvent) => void;
  handleGenerateMenus: (menuQty: number) => void;
  handleMenuQtyChange: (event: React.FormEvent) => void;
  handleGlutenSettingChange: () => void;
  handleVeganSettingChange: () => void;
  handleVeggieSettingChange: () => void;
  menuQty: number;
}

export const MainForm = ({
    handleDifficultySettingChange,
    handleGenerateMenus,
    handleGlutenSettingChange,
    handleMenuQtyChange,
    handleVeganSettingChange,
    handleVeggieSettingChange,
    menuQty,
}: Props) => {
  return (
    <>
      <form className={styles.settings} id="settings_form">
        <div className={styles.settingsGroup}>
          <h4>Restrictions :</h4>
          <div>
            <input
              type="checkbox"
              id="settings_veggie"
              onChange={handleVeggieSettingChange}
            />
            <label htmlFor="settings_veggie">{tags.VEGGIE}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="settings_vegan"
              onChange={handleVeganSettingChange}
            />
            <label htmlFor="settings_vegan">{tags.VEGAN}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="settings_nogluten"
              onChange={handleGlutenSettingChange}
            />
            <label htmlFor="settings_nogluten">{tags.GLUTEN_FREE}</label>
          </div>
        </div>
        <div className={styles.settingsGroup}>
          <h4>Difficulté :</h4>
          <div>
            <input
              type="radio"
              id="difficulty_casual"
              name="difficulty"
              value="casual"
              onChange={handleDifficultySettingChange}
            />
            <label htmlFor="difficulty_casual">{DifficultyLevel.CASUAL}</label>
          </div>
          <div>
            <input
              type="radio"
              id="difficulty_medium"
              name="difficulty"
              value="medium"
              onChange={handleDifficultySettingChange}
            />
            <label htmlFor="difficulty_medium">{DifficultyLevel.MEDIUM}</label>
          </div>
          <div>
            <input
              type="radio"
              id="difficulty_hard"
              name="difficulty"
              value="fancy"
              onChange={handleDifficultySettingChange}
            />
            <label htmlFor="difficulty_hard">{DifficultyLevel.FANCY}</label>
          </div>
        </div>
        <div>
          <h4>Nombre de menus à générer :</h4>
          <div>
            <input
              type="range"
              id="settings_qty"
              onChange={handleMenuQtyChange}
              min="1"
              max="14"
              name="qty"
            />
            <span className={styles.menuQtyLabel}>{menuQty}</span>
          </div>
        </div>
      </form>
      <div className={styles.buttonWrapper}>
        <button onClick={() => handleGenerateMenus(menuQty)}>Générer les menus</button>
      </div>
    </>
  );
};
