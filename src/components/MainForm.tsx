import { DifficultyLevel, Tags } from "../assets/plats";
import styles from "./App.module.css";
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

interface Props {
  handleDifficultySettingChange: (event: React.FormEvent) => void;
  handleGenerateMenus: (menuQty: number) => void;
  handleMenuQtyChange: (event: React.FormEvent) => void;
  handleGlutenSettingChange: () => void;
  handleSeasonalSettingChange: () => void;
  handleVeganSettingChange: () => void;
  handleVeggieSettingChange: () => void;
  menuQty: number;
}

export const MainForm = ({
    handleDifficultySettingChange,
    handleGenerateMenus,
    handleGlutenSettingChange,
    handleMenuQtyChange,
    handleSeasonalSettingChange,
    handleVeganSettingChange,
    handleVeggieSettingChange,
    menuQty,
}: Props) => {
  return (
    <>
      <form className={styles.settings} id="settings_form">
        <div className={styles.settingsGroup}>
          <FormControl>
            <FormLabel>
              Options
            </FormLabel>
            {/* VEGGIE? */}
            <FormControlLabel
              label={Tags.VEGGIE}
              control={
                <Checkbox
                  onChange={handleVeggieSettingChange}
                  id="settings_veggie"
                />
              }
            />

            {/* VEGAN? */}
            <FormControlLabel
              label={Tags.VEGAN}
              control={
                <Checkbox
                  onChange={handleVeganSettingChange}
                  id="settings_vegan"
                />
              }
            />

            {/* GLUTEN-FREE? */}
            <FormControlLabel
              label={Tags.GLUTEN_FREE}
              control={
                <Checkbox
                  onChange={handleGlutenSettingChange}
                  id="settings_nogluten"
                />
              }
            />

            {/* SEASONAL? */}
            <FormControlLabel
              label="de saison"
              control={
                <Checkbox
                  onChange={handleSeasonalSettingChange}
                  id="settings_seasonal"
                />
              }
            />

          </FormControl>
        </div>
        <div className={styles.settingsGroup}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Difficulté</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="difficulty_casual"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="difficulty_casual"
                control={<Radio onChange={handleDifficultySettingChange} />}
                label={DifficultyLevel.CASUAL}
              />
              <FormControlLabel
                value="medium"
                control={<Radio onChange={handleDifficultySettingChange} />}
                label={DifficultyLevel.MEDIUM}
              />
              <FormControlLabel
                value="fancy"
                control={<Radio onChange={handleDifficultySettingChange} />}
                label={DifficultyLevel.FANCY}
              />
            </RadioGroup>
          </FormControl>
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
        {/* <button onClick={() => handleGenerateMenus(menuQty)}>Générer les menus</button> */}
        <Button variant="outlined" onClick={() => handleGenerateMenus(menuQty)}>
          Générer les menus
        </Button>
      </div>
    </>
  );
};
