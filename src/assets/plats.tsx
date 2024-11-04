import {
    Alcools,
    AnyIngredient,
    Cereales,
    Condiments,
    Divers,
    Feculents,
    Fromages,
    Fruits,
    LaitagesDivers,
    Legumes,
    Oleagineux,
    Pates,
    Poisson,
    Surgeles,
    Viande,
} from './ingredients';

export enum DifficultyLevel {
    CASUAL = 'casual',
    MEDIUM = 'medium',
    FANCY = 'fancy'
};

export enum Seasons {
    WINTER = "winter",
    SPRING = "spring",
    SUMMER = "summer",
    FALL = "fall",
}

type Difficulty = DifficultyLevel | undefined;

export type Dish = {
    name: string,
    ingredients: (AnyIngredient | string)[], // ce "string" rend le typing bcp plus lâche partout, hélas...
    difficulty: Difficulty,
    course: 'entrée' | 'plat' | 'dessert' | 'cocktail' | 'goûter',
    seasons: Seasons[] | 'all'
    source?: string,
    tags?: Tags[]
}

export enum Tags {
    COLD = 'plat froid',
    FATTY = 'fatty',
    GLUTEN_FREE = 'pas de gluten',
    HEALTHY = 'healthy',
    HOT = 'plat chaud',
    KIDS = 'kids',
    NO_PORK = 'pas de porc',
    SAVORY = 'plat salé',
    SWEET = 'plat sucré',
    VEGAN = 'vegan',
    VEGGIE = 'végétarien',
};

export const dishes: Dish[] = [
  {
    name: "couscous",
    ingredients: [Feculents.SEMOULE, Legumes.LEGUMES_COUSCOUS],
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    seasons: "all",
  },
  {
    name: "nonozzola",
    ingredients: [
      Condiments.POIVRE,
      Feculents.PATES,
      Fromages.GORGONZOLA,
      Fromages.PARMESAN,
      LaitagesDivers.BEURRE,
      LaitagesDivers.CREME_FRAICHE,
      Divers.OEUFS,
      Viande.LARDONS,
    ],
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    tags: [Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.SPRING, Seasons.WINTER],
  },
  {
    name: "boeuf stroganoff",
    difficulty: DifficultyLevel.FANCY,
    ingredients: [
      Alcools.VIN_BLANC_SEC,
      Condiments.MOUTARDE,
      Condiments.OIGNONS,
      Condiments.PAPRIKA,
      Condiments.POIVRE,
      Condiments.SEL,
      Condiments.SUCRE,
      LaitagesDivers.BEURRE,
      LaitagesDivers.CREME_FRAICHE,
      Legumes.TOMATES_CONCENTRE,
      Divers.CHAMPI_PARIS,
      Viande.BOEUF_A_MIJOTER,
    ],
    course: "plat",
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "moussaka",
    difficulty: DifficultyLevel.MEDIUM,
    ingredients: [
      "viande hachée de mouton maigre ou boeuf",
      Condiments.AIL,
      Condiments.HUILE_OLIVE,
      Condiments.OIGNONS,
      Condiments.PERSIL,
      Condiments.SEL,
      Feculents.FARINE_BLE,
      Feculents.PATATES,
      Fromages.GRUYERE,
      LaitagesDivers.BEURRE,
      LaitagesDivers.LAIT,
      Legumes.AUBERGINES,
      Legumes.TOMATES_PUREE,
      Legumes.TOMATES,
      Divers.BOUILLON_CUBE,
      Divers.EAU,
      Divers.OEUFS,
    ],
    course: "plat",
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "paupiettes de dinde",
    difficulty: DifficultyLevel.MEDIUM,
    ingredients: [
      Condiments.AIL,
      Condiments.OIGNONS,
      Condiments.POIVRE,
      Condiments.SEL,
      Condiments.THYM,
      Legumes.TOMATES,
      Divers.BOUILLON_CUBE_VOLAILLE,
      Divers.CHAMPI_PARIS,
      Viande.DINDE_PAUPIETTES,
    ],
    course: "plat",
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "saucisse lentilles",
    difficulty: DifficultyLevel.CASUAL,
    ingredients: [
      Condiments.BOUQUET_GARNI,
      Condiments.OIGNONS,
      Feculents.LENTILLES_VERTES,
      Legumes.CAROTTES,
      Viande.LARDONS,
      Viande.SAUCISSES,
    ],
    course: "plat",
    tags: [Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.WINTER, Seasons.SPRING],
  },
  {
    name: "bortsch",
    difficulty: DifficultyLevel.MEDIUM,
    ingredients: [
      Condiments.CUMIN,
      Condiments.POIVRE,
      Condiments.SEL,
      Condiments.VINAIGRE,
      LaitagesDivers.CREME_AIGRE,
      Legumes.BETTERAVES_CUITES,
      Legumes.CHOU_ROUGE,
      Legumes.CHOU,
      Legumes.TOMATES_CONCENTRE,
      Divers.BOUILLON_CUBE,
    ],
    course: "plat",
    tags: [Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.WINTER, Seasons.SPRING],
  },
  {
    name: "velouté de potiron et carottes",
    difficulty: DifficultyLevel.MEDIUM,
    seasons: [Seasons.FALL, Seasons.WINTER],
    ingredients: [
      "crème liquide (facultatif)",
      Condiments.AIL,
      Condiments.HUILE_OLIVE,
      Condiments.OIGNONS,
      Condiments.PERSIL,
      Condiments.POIVRE,
      Condiments.SEL,
      LaitagesDivers.LAIT,
      Legumes.CAROTTES,
      Legumes.PATATES,
      Legumes.POTIRON,
      Divers.BOUILLON_CUBE_VOLAILLE,
    ],
    course: "plat",
    tags: [Tags.VEGGIE, Tags.GLUTEN_FREE, Tags.SAVORY],
  },
  {
    name: "rougail de richton",
    difficulty: DifficultyLevel.MEDIUM,
    ingredients: [
      "jus de citron vert",
      "pâte de cacahuète",
      "pâte de piment à la mangue toco",
      Condiments.AIL,
      Condiments.BOUQUET_GARNI,
      Condiments.CURCUMA,
      Condiments.GINGEMBRE,
      Condiments.OIGNONS,
      Condiments.PAPRIKA,
      Condiments.PIMENT,
      Condiments.POIVRE,
      Condiments.SEL,
      Feculents.RIZ,
      Legumes.TOMATES_PULPE,
      Viande.SAUCISSES_MONTBELIARD,
      Viande.SAUCISSES_MORTAUX,
    ],
    course: "plat",
    tags: [Tags.FATTY, Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "cookies de richton",
    difficulty: DifficultyLevel.CASUAL,
    course: "dessert",
    ingredients: [
      "fécule de maïs",
      "pépites de chocolat noir",
      "pralin",
      Condiments.SUCRE_ROUX,
      Feculents.FARINE_BLE,
      LaitagesDivers.BEURRE_DEMI_SEL,
      Divers.LEVURE_CHIMIQUE,
      Divers.OEUFS,
    ],
    seasons: "all",
    tags: [Tags.FATTY, Tags.SWEET],
  },
  {
    name: "patrick's cornbread",
    difficulty: DifficultyLevel.CASUAL,
    course: "dessert",
    ingredients: [
      Condiments.SUCRE,
      Feculents.FARINE_BLE,
      Feculents.FARINE_MAIS,
      LaitagesDivers.BEURRE_DEMI_SEL,
      Divers.LEVURE_CHIMIQUE,
      Divers.OEUFS,
    ],
    seasons: "all",
  },
  {
    name: "granité de monbazillac aux griottes",
    difficulty: DifficultyLevel.MEDIUM,
    course: "dessert",
    ingredients: [
      Alcools.VIN_BLANC_MONBAZILLAC,
      Condiments.MENTHE,
      Condiments.SUCRE_GLACE,
      Fruits.CITRONS,
      Fruits.ORANGES,
      Divers.OEUFS,
      Surgeles.GRIOTTES,
    ],
    tags: [Tags.SWEET],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "pizza",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.HUILE_OLIVE,
      Condiments.SEL,
      Feculents.FARINE_BLE,
      Fromages.GORGONZOLA,
      Fromages.MOZZARELLA,
      Divers.LEVURE_BOULANGER,
      Viande.CHORIZO,
      Viande.JAMBON,
    ],
    tags: [Tags.FATTY, Tags.KIDS, Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "tagliatelle bolo vitello e funghi",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.HUILE_OLIVE,
      Condiments.OIGNONS,
      Condiments.POIVRE,
      Feculents.FARINE_BLE,
      Fromages.PARMESAN,
      Legumes.CAROTTES,
      Legumes.CELERI,
      Divers.BOUILLON_CUBE,
      Divers.CHAMPI_PARIS,
      Pates.TAGLIATELLE,
      Viande.VEAU,
    ],
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "saucisses purée compote",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: ["compote", "purée", Viande.SAUCISSES],
    tags: [Tags.KIDS],
    seasons: "all",
  },
  {
    name: "steak riz épinards",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: ["steaks", Feculents.RIZ, Surgeles.EPINARDS],
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "lasagnes surgelées",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: [Surgeles.LASAGNES],
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "moussaka surgelée",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: [Surgeles.MOUSSAKA],
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "poisson bordelaise surgelé",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: ["féculent", "légume", Surgeles.POISSON_BORDELAISE],
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "risotto à la courge",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [Alcools.VIN_BLANC_SEC, Feculents.RIZ_RISOTTO, Legumes.COURGE],
    tags: [Tags.VEGAN, Tags.VEGGIE, Tags.SAVORY],
    seasons: [Seasons.FALL],
  },
  {
    name: "brandade surgelée",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: ["féculent", "légume", Surgeles.POISSON_BRANDADE],
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "spaghetti carbonara",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Fromages.PARMESAN,
      Divers.OEUFS,
      Pates.SPAGHETTI,
      Viande.LARDONS,
    ],
    tags: [Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.WINTER, Seasons.SPRING],
  },
  {
    name: "cordon bleu",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: ["cordon bleu", "féculent", "légume"],
    tags: [Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "courgettes farcies au quinoa et duxelle de champignons",
    difficulty: DifficultyLevel.FANCY,
    course: "plat",
    ingredients: [
      Condiments.AIL,
      Condiments.BASILIC,
      Condiments.CUMIN,
      Condiments.ECHALOTES,
      Condiments.HUILE_OLIVE,
      Condiments.PERSIL,
      Condiments.PIMENT_ESPELETTE,
      Feculents.QUINOA,
      Legumes.COURGETTES_RONDES,
      Legumes.TOMATES_SECHEES,
      Legumes.TOMATES,
      Divers.CHAMPI_PARIS,
    ],
    source:
      "https://chefsimon.com/gourmets/chef-simon/recettes/courgettes-farcies-au-quinoa-et-duxelles-de-champignons",
    tags: [Tags.VEGAN, Tags.VEGGIE, Tags.GLUTEN_FREE, Tags.SAVORY],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "soupe aux lentilles corail",
    difficulty: DifficultyLevel.CASUAL,
    course: "entrée",
    ingredients: [
      Condiments.CUMIN,
      Condiments.HUILE_OLIVE,
      Feculents.LENTILLES_CORAIL,
      Fruits.CITRONS,
      Legumes.CAROTTES,
      Legumes.POIREAU,
      Divers.BOUILLON_LEGUMES,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_soupe-aux-lentilles-corail_27918.aspx",
    tags: [Tags.VEGAN, Tags.VEGGIE, Tags.GLUTEN_FREE, Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.WINTER],
  },
  {
    name: "gratin de courgettes",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.AIL,
      Condiments.CIBOULETTE,
      Condiments.ECHALOTES,
      Condiments.MOUTARDE,
      Condiments.SEL,
      Fromages.GRUYERE,
      LaitagesDivers.CREME_FRAICHE,
      Legumes.COURGETTES,
      Viande.JAMBON_BLANC,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_gratin-de-courgette_80011.aspx",
    tags: [Tags.GLUTEN_FREE, Tags.SAVORY],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "soupe à la tomate et au basilic",
    difficulty: DifficultyLevel.MEDIUM,
    course: "entrée",
    ingredients: [
      Condiments.BASILIC,
      Condiments.HUILE_OLIVE,
      Condiments.OIGNONS,
      Condiments.POIVRE,
      Condiments.SEL,
      LaitagesDivers.CREME_FRAICHE,
      Legumes.TOMATES,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_soupe-a-la-tomate-et-au-basilic_41193.aspx",
    tags: [Tags.VEGGIE, Tags.GLUTEN_FREE, Tags.HEALTHY, Tags.SAVORY],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "salade piémontaise",
    difficulty: DifficultyLevel.CASUAL,
    course: "entrée",
    ingredients: [
      Cereales.MAIS,
      Condiments.PERSIL,
      Condiments.POIVRE,
      Condiments.SEL,
      Legumes.PATATES,
      Legumes.TOMATES,
      Divers.CORNICHONS,
      Divers.OEUFS,
      Viande.POULET_BLANC,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_salade-piemontaise-de-nath_33648.aspx",
    tags: [Tags.GLUTEN_FREE, Tags.SAVORY],
    seasons: [Seasons.SUMMER, Seasons.SPRING],
  },
  {
    name: "parfait aux fruits rouges",
    difficulty: DifficultyLevel.MEDIUM,
    course: "dessert",
    ingredients: [
      "fécule",
      Condiments.SUCRE_GLACE,
      Condiments.SUCRE,
      Fruits.CITRONS,
      Fruits.FRUITS_ROUGES_DIVERS,
      LaitagesDivers.CREME_LIQUIDE,
      Divers.OEUFS,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_parfait-aux-fruits-rouges_176113.aspx",
    tags: [Tags.VEGGIE, Tags.SWEET],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "tomates farcies / riz",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: [
      Condiments.FINES_HERBES,
      Condiments.HUILE_OLIVE,
      Condiments.OIGNONS,
      Feculents.RIZ,
      Fromages.GRUYERE,
      Legumes.TOMATES,
      Divers.OEUFS,
      Viande.BOEUF_HACHE,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_tomates-farcies-a-la-viande-hachee-faciles-et-rapides_92386.aspx",
    seasons: [Seasons.SUMMER],
    tags: [Tags.SAVORY],
  },
  {
    name: "mousse à la groseille",
    difficulty: DifficultyLevel.MEDIUM,
    course: "dessert",
    ingredients: [
      Condiments.SUCRE,
      Fruits.GROSEILLES,
      LaitagesDivers.CREME_FRAICHE,
      Divers.GELATINE,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_mousse-a-la-groseille_170265.aspx",
    seasons: [Seasons.SUMMER],
    tags: [Tags.SWEET],
  },
  {
    name: "poivrons farcis au thon et au quinoa",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.HUILE_OLIVE,
      Condiments.OIGNONS,
      Condiments.POIVRE,
      Condiments.SEL,
      Feculents.QUINOA,
      LaitagesDivers.CREME_FRAICHE,
      Legumes.POIVRON,
      Legumes.TOMATES,
      Divers.BOUILLON_CUBE,
      Poisson.THON,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_poivrons-farcis-au-thon-et-au-quinoa_63771.aspx",
    tags: [Tags.GLUTEN_FREE, Tags.NO_PORK, Tags.SAVORY],
    seasons: [Seasons.SUMMER, Seasons.FALL],
  },
  {
    name: "salade de riz végé",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: [
      Condiments.BASILIC,
      Condiments.HUILE_OLIVE,
      Condiments.POIVRE,
      Condiments.SEL,
      Feculents.RIZ,
      Fruits.CITRONS,
      Legumes.BETTERAVES_CUITES,
      Legumes.COURGETTES,
      Legumes.RADIS,
      Legumes.TOMATES_CERISE,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_salade-de-riz-vegetarienne_531273.aspx",
    tags: [Tags.VEGGIE, Tags.SAVORY],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "linguine al limone",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.AIL,
      Condiments.CHILI,
      Condiments.HUILE_OLIVE,
      Condiments.LAURIER,
      Condiments.MENTHE,
      Condiments.PAPRIKA,
      Condiments.SEL,
      Condiments.THYM,
      Fromages.PARMESAN,
      Fruits.CITRONS,
      Pates.LINGUINE,
    ],
    source: "https://www.youtube.com/watch?v=uCOERacO4YY",
    tags: [Tags.VEGGIE, Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.SPRING, Seasons.SUMMER],
  },
  {
    name: "welsh royal / frites",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Alcools.BIERE_BLONDE,
      Condiments.MOUTARDE,
      Feculents.PATATES,
      Fromages.CHEDDAR,
      Divers.OEUFS,
      Divers.PAIN_MIE,
      Viande.JAMBON_BLANC,
    ],
    source: "https://youtu.be/AgOgegDvQlE",
    tags: [Tags.FATTY, Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.WINTER],
  },
  {
    name: "babu-style Carbonnade",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Alcools.BIERE_BRUNE,
      Condiments.AIL,
      Condiments.CANNELLE,
      Condiments.CORIANDRE,
      Condiments.HUILE_OLIVE,
      Condiments.LAURIER,
      Condiments.MOUTARDE,
      Condiments.OIGNONS,
      Condiments.SUCRE_ROUX,
      Condiments.THYM,
      Fruits.POMMES,
      LaitagesDivers.BEURRE,
      Divers.BOUILLON_CUBE_BOEUF,
      Viande.BOEUF_JOUE,
    ],
    tags: [Tags.SAVORY, Tags.FATTY, Tags.NO_PORK],
    seasons: [Seasons.FALL, Seasons.WINTER, Seasons.SPRING],
  },
  {
    name: "chili con carne maison",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.AIL,
      Condiments.BASILIC,
      Condiments.CARDAMOME,
      Condiments.CUMIN,
      Condiments.HUILE_OLIVE,
      Condiments.LAURIER,
      Condiments.OIGNONS_BLANCS,
      Condiments.OIGNONS_ROUGES,
      Condiments.PIMENT_JALAPENO,
      Condiments.POIVRE,
      Condiments.SEL,
      Condiments.THYM,
      Feculents.HARICOTS_ROUGES,
      Feculents.RIZ,
      Legumes.MAIS,
      Legumes.POIVRON_JAUNE,
      Legumes.POIVRON_ROUGE,
      Legumes.POIVRON_VERT,
      Legumes.TOMATES_COULIS,
      Legumes.TOMATES,
      Divers.TORTILLAS,
      Viande.BOEUF_HACHE,
    ],
    source: "https://youtu.be/CbLbzXst104",
    tags: [Tags.SAVORY, Tags.NO_PORK, Tags.HOT],
    seasons: [Seasons.FALL, Seasons.WINTER],
  },
  {
    name: "risotto milanese aux champignons",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Alcools.VIN_BLANC_SEC,
      Condiments.ECHALOTES,
      Feculents.RIZ_RISOTTO_ARBORIO,
      Fromages.PARMESAN,
      LaitagesDivers.BEURRE,
      Divers.BOUILLON_LEGUMES,
      Divers.CHAMPI_CEPES,
      Divers.CHAMPI_GIROLLES,
      Divers.CHAMPI,
    ],
    source: "chefsquare",
    tags: [Tags.NO_PORK, Tags.SAVORY, Tags.VEGGIE, Tags.HOT],
    seasons: [Seasons.FALL],
  },
  {
    name: "risotto alla pilota",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.SEL,
      Feculents.RIZ_RISOTTO_VIALONE,
      Fromages.GRANA,
      LaitagesDivers.BEURRE,
      Viande.SALAMELLE,
    ],
    source: "https://ricette.giallozafferano.it/Riso-alla-pilota.html",
    tags: [Tags.HOT, Tags.SAVORY],
    seasons: [Seasons.FALL, Seasons.WINTER],
  },
  {
    name: "boeuf bourguignon",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Alcools.VIN_ROUGE_BOURGOGNE,
      Condiments.AIL,
      Condiments.BOUQUET_GARNI,
      Condiments.OIGNONS_JAUNES,
      Condiments.POIVRE,
      Condiments.SEL,
      Feculents.FARINE_BLE,
      LaitagesDivers.BEURRE,
      Legumes.CAROTTES,
      Divers.BOUILLON_CUBE_BOEUF,
      Divers.CHAMPI,
      Viande.BOEUF_A_MIJOTER_BOURGUIGNON,
      Viande.LARDONS,
    ],
    source:
      "https://cuisine.journaldesfemmes.fr/recette/346736-boeuf-bourguignon",
    tags: [Tags.HOT, Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "tiramisù Speculoos Framboises",
    difficulty: DifficultyLevel.MEDIUM,
    course: "dessert",
    ingredients: [
      Condiments.SUCRE,
      Fromages.MASCARPONE,
      Fruits.FRAMBOISES,
      LaitagesDivers.BEURRE,
      Divers.OEUFS,
      Divers.SPECULOOS,
    ],
    source: "chefsquare",
    tags: [Tags.COLD, Tags.SWEET, Tags.VEGGIE],
    seasons: "all",
  },
  {
    name: "parmentier de confit de canard",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Condiments.MUSCADE,
      Condiments.SEL,
      Condiments.POIVRE,
      Condiments.OIGNONS_JAUNES,
      Condiments.ECHALOTES,
      Feculents.PATATES,
      LaitagesDivers.LAIT,
      LaitagesDivers.CREME_FRAICHE,
      Divers.EAU,
      Viande.CANARD_CONFIT_CUISSE,
    ],
    source:
      "https://www.marmiton.org/recettes/recette_parmentier-de-confit-de-canard_17048.aspx",
    tags: [Tags.HOT, Tags.FATTY, Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "escalopes de dinde panées",
    difficulty: DifficultyLevel.CASUAL,
    course: "plat",
    ingredients: [
      Condiments.SEL,
      Condiments.POIVRE,
      Fruits.CITRONS,
      Feculents.FARINE_BLE,
      Divers.CHAPELURE,
      Divers.OEUFS,
      Viande.DINDE_ESCALOPES,
      Feculents.AU_CHOIX,
      Legumes.AU_CHOIX,
    ],
    tags: [Tags.HOT, Tags.SAVORY, Tags.FATTY],
    seasons: "all",
  },
  {
    name: "blanquette de veau au safran",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Viande.VEAU_TENDRON, // ou épaule
      Legumes.CELERI,
      LaitagesDivers.CREME_FRAICHE,
      Condiments.BOUQUET_GARNI,
      Condiments.SAFRAN,
      Condiments.POIVRE,
      Legumes.CAROTTES,
      Divers.OEUFS,
      Condiments.OIGNONS,
      Condiments.GIROFLE_CLOUS,
      Condiments.CIBOULETTE,
      Condiments.SEL,
      Feculents.RIZ,
    ],
    source:
      "https://www.cuisineaz.com/recettes/blanquette-de-veau-au-safran-114324.aspx",
    tags: [Tags.HOT, Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "moussaka chèvre basilic",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Legumes.AUBERGINES,
      LaitagesDivers.FROMAGE_BLANC,
      Condiments.HUILE_OLIVE,
      Condiments.AIL,
      Condiments.SEL,
      Condiments.BASILIC,
      Condiments.POIVRE,
      Fromages.CHEVRE_FRAIS,
      Fromages.RAPE_AU_CHOIX,
    ],
    source:
      "https://www.cuisineaz.com/recettes/moussaka-chevre-basilic-114340.aspx",
    tags: [Tags.HOT, Tags.SAVORY, Tags.VEGGIE],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "gratin dauphinois",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Legumes.PATATES,
      Fromages.COMTE,
      LaitagesDivers.CREME_LIQUIDE,
      LaitagesDivers.LAIT,
      LaitagesDivers.BEURRE,
      Condiments.AIL,
      Condiments.SEL,
      Condiments.POIVRE,
    ],
    source: "https://www.cuisineactuelle.fr/recettes/gratin-dauphinois-279561",
    tags: [Tags.HOT, Tags.SAVORY, Tags.VEGGIE, Tags.FATTY],
    seasons: "all",
  },
  {
    name: "fondant au chocolat",
    difficulty: DifficultyLevel.MEDIUM,
    course: "dessert",
    ingredients: [
      Divers.CHOCOLAT_PATISSIER,
      Divers.OEUFS,
      Condiments.SUCRE,
      Feculents.FARINE_MAIS,
      LaitagesDivers.BEURRE,
    ],
    source: "https://www.cuisineactuelle.fr/recettes/lasagnes-au-boeuf-274160",
    tags: [Tags.HOT, Tags.SWEET, Tags.VEGGIE],
    seasons: "all",
  },
  {
    name: "poulet rôti cocotte",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Viande.POULET,
      LaitagesDivers.CREME_FRAICHE, // ou yaourt ou fromage blanc
      Condiments.THYM,
      Condiments.BOUQUET_GARNI,
      Condiments.HUILE_OLIVE,
      Condiments.SEL,
      Condiments.POIVRE,
      Condiments.AIL,
      Condiments.OIGNONS,
      Divers.BOUILLON_CUBE_VOLAILLE,
      Feculents.AU_CHOIX,
      Legumes.AU_CHOIX,
    ],
    tags: [Tags.HOT, Tags.SAVORY],
    seasons: "all",
  },
  {
    name: "pâtes à la crème de fenouil",
    difficulty: DifficultyLevel.MEDIUM,
    course: "plat",
    ingredients: [
      Legumes.FENOUIL,
      Divers.BOUILLON_LEGUMES,
      Fromages.PARMESAN,
      Condiments.HUILE_OLIVE,
      Condiments.SEL,
      Condiments.POIVRE,
      Pates.FUSILLI,
    ],
    tags: [Tags.HOT, Tags.SAVORY, Tags.VEGGIE],
    seasons: [Seasons.FALL],
  },
  {
    name: "ceviche tropical de daurade",
    difficulty: DifficultyLevel.MEDIUM,
    course: "entrée",
    ingredients: [
      Poisson.DAURADE,
      Fruits.FRUITS_PASSION,
      Fruits.ANANAS,
      Legumes.AVOCATS,
      Fruits.CITRONS,
      Condiments.OIGNONS,
      Condiments.ANETH,
      Condiments.CORIANDRE,
      Condiments.HUILE_OLIVE,
      Condiments.SEL,
      Condiments.POIVRE,
    ],
    source:
      "https://www.cuisineactuelle.fr/recettes/ceviche-tropical-de-daurade-191022",
    tags: [Tags.COLD],
    seasons: [Seasons.SUMMER],
  },
  {
    name: "carrot cake de Julia",
    difficulty: DifficultyLevel.FANCY,
    course: "dessert",
    ingredients: [
      Divers.OEUFS,
      Condiments.HUILE_VEGETALE_AU_CHOIX,
      Condiments.SUCRE,
      Condiments.VANILLE,
      Feculents.FARINE_BLE,
      Divers.LEVURE_CHIMIQUE,
      Condiments.SEL,
      Condiments.CANNELLE,
      Legumes.CAROTTES,
      Oleagineux.NOIX_PECAN,
      LaitagesDivers.BEURRE,
      LaitagesDivers.CREAM_CHEESE,
    ],
    tags: [Tags.SWEET, Tags.FATTY, Tags.VEGGIE],
    seasons: "all",
  },
  {
    name: "frittelle di riso e mele",
    difficulty: DifficultyLevel.CASUAL,
    course: "dessert",
    ingredients: [
      Fruits.POMMES,
      Feculents.RIZ_RISOTTO_ARBORIO,
      Feculents.FARINE_BLE,
      LaitagesDivers.LAIT,
      Condiments.SUCRE,
      Divers.OEUFS,
      Fruits.CITRONS_ZESTES,
      Condiments.HUILE_ARACHIDE,
      Condiments.SEL,
      Divers.MIEL_CHATAIGNE,
      Condiments.CANNELLE,
    ],
    source: "https://ricette.giallozafferano.it/Frittelle-di-riso-e-mele.html",
    tags: [Tags.SWEET, Tags.FATTY, Tags.VEGGIE],
    seasons: "all",
  },
  {
    name: "blettes aux lardons",
    course: "plat",
    difficulty: DifficultyLevel.CASUAL,
    ingredients: [
      Legumes.BLETTES,
      Viande.LARDONS,
      LaitagesDivers.CREME_FRAICHE,
      Feculents.AU_CHOIX,
    ],
    seasons: [Seasons.FALL],
  },
  {
    name: "nasu no kabayaki",
    course: "plat",
    difficulty: DifficultyLevel.MEDIUM,
    ingredients: [
      Legumes.AUBERGINES,
      Condiments.OIGNONS_JEUNES,
      Condiments.SAUCE_SOJA,
      Condiments.AIL,
      Condiments.GINGEMBRE,
      Condiments.SUCRE,
      Condiments.HUILE_SESAME,
      Feculents.FARINE_BLE,
      Feculents.RIZ,
      Condiments.PAPRIKA_DOUX,
    ],
    seasons: [Seasons.SUMMER],
    source: "https://youtu.be/h8vLiOBVwLE?si=UV-lzA01P30tzRNm",
  },
  {
    name: "dhal de lentilles",
    course: "plat",
    difficulty: DifficultyLevel.MEDIUM,
    ingredients: [
        Condiments.OIGNONS,
        Condiments.HUILE_OLIVE,
        Legumes.TOMATES_PELEES,
        Legumes.PATATES,
        Feculents.LENTILLES_CORAIL,
        LaitagesDivers.LAIT_COCO,
        Condiments.CORIANDRE,
        Condiments.CURRY,
    ],
    seasons: 'all',
  },
  {
    name: "soupe à l'oignon gratinée",
    course: "plat",
    difficulty: DifficultyLevel.MEDIUM,
    ingredients: [
        Condiments.POIVRE,
        Condiments.LAURIER,
        Feculents.FARINE_BLE,
        Fromages.RAPE_AU_CHOIX,
        LaitagesDivers.BEURRE,
        Condiments.OIGNONS,
        Condiments.AIL,
        Divers.BOUILLON_CUBE,
        Divers.PAIN,
    ],
    seasons: [Seasons.WINTER, Seasons.FALL],
  }
];