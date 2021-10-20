import {
    alcool,
    viande,
    pates,
    // poisson,
    feculents,
    fromages,
    fruits,
    legumes,
    misc,
    laitages_divers,
    condiments,
    surgeles,
    cereales,
    poisson
} from './ingredients';

export enum DifficultyLevel {
    CASUAL = 'casual',
    MEDIUM = 'medium',
    FANCY = 'fancy'
};

type Difficulty = DifficultyLevel | undefined;

export type plat = {
    name: string,
    ingredients: string[],
    difficulty: Difficulty,
    course: 'entrée' | 'plat' | 'dessert' | 'cocktail' | 'goûter',
    season?: {
        summer: boolean,
        autumn: boolean,
        winter: boolean,
        spring: boolean
    },
    source?: string,
    tags?: tags[]
}

export enum tags {
    VEGGIE = 'végétarien',
    VEGAN = 'vegan',
    GLUTEN_FREE = 'pas de gluten',
    KIDS = 'kids',
    HEALTHY = 'healthy',
    FATTY = 'fatty',
    NO_PORK = 'pas de porc',
    HOT = 'plat chaud',
    COLD = 'plat froid',
    SWEET = 'plat sucré',
    SAVORY = 'plat salé'
};

export const plats: plat[] = [
    {
        name: 'couscous',
        ingredients: [
            feculents.SEMOULE,
            legumes.LEGUMES_COUSCOUS,
        ],
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat'
    },
    {
        name: 'nonozzola',
        ingredients: [
            condiments.POIVRE,
            feculents.PATES,
            fromages.GORGONZOLA,
            fromages.PARMESAN,
            laitages_divers.BEURRE,
            laitages_divers.CREME_FRAICHE,
            misc.OEUFS,
            viande.LARDONS,
        ],
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'boeuf stroganoff',
        difficulty: DifficultyLevel.FANCY,
        ingredients: [
            alcool.VIN_BLANC_SEC,
            condiments.MOUTARDE,
            condiments.OIGNONS,
            condiments.PAPRIKA,
            condiments.POIVRE,
            condiments.SEL,
            condiments.SUCRE,
            laitages_divers.BEURRE,
            laitages_divers.CREME_FRAICHE,
            legumes.TOMATES_CONCENTRE,
            misc.CHAMPI_PARIS,
            viande.BOEUF_A_MIJOTER,
        ],
        course: 'plat',
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'moussaka',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            'viande hachée de mouton maigre ou boeuf',
            condiments.AIL,
            condiments.HUILE_OLIVE,
            condiments.OIGNONS,
            condiments.PERSIL,
            condiments.SEL,
            feculents.FARINE_BLE,
            feculents.PATATES,
            fromages.GRUYERE,
            laitages_divers.BEURRE,
            laitages_divers.LAIT,
            legumes.AUBERGINES,
            legumes.TOMATES_PUREE,
            legumes.TOMATES,
            misc.BOUILLON_CUBE,
            misc.EAU,
            misc.OEUFS,
        ],
        course: 'plat',
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'paupiettes de dinde',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            condiments.AIL,
            condiments.OIGNONS,
            condiments.POIVRE,
            condiments.SEL,
            condiments.THYM,
            legumes.TOMATES,
            misc.BOUILLON_CUBE_VOLAILLE,
            misc.CHAMPI_PARIS,
            viande.DINDE_PAUPIETTES,
        ],
        course: 'plat',
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'saucisse lentilles',
        difficulty: DifficultyLevel.CASUAL,
        ingredients: [
            condiments.BOUQUET_GARNI,
            condiments.OIGNONS,
            feculents.LENTILLES_VERTES,
            legumes.CAROTTES,
            viande.LARDONS,
            viande.SAUCISSES,
        ],
        course: 'plat',
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'bortsch',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            condiments.CUMIN,
            condiments.POIVRE,
            condiments.SEL,
            condiments.VINAIGRE,
            laitages_divers.CREME_AIGRE,
            legumes.BETTERAVES_CUITES,
            legumes.CHOU_ROUGE,
            legumes.CHOU,
            legumes.TOMATES_CONCENTRE,
            misc.BOUILLON_CUBE,
        ],
        course: 'plat',
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'velouté de potiron et carottes',
        difficulty: DifficultyLevel.MEDIUM,
        season: {
            summer: false,
            autumn: true,
            winter: true,
            spring: false
        },
        ingredients: [
            'crème liquide (facultatif)',
            condiments.AIL,
            condiments.HUILE_OLIVE,
            condiments.OIGNONS,
            condiments.PERSIL,
            condiments.POIVRE,
            condiments.SEL,
            laitages_divers.LAIT,
            legumes.CAROTTES,
            legumes.PATATES,
            legumes.POTIRON,
            misc.BOUILLON_CUBE_VOLAILLE,
        ],
        course: 'plat',
        tags: [
            tags.VEGGIE,
            tags.GLUTEN_FREE,
            tags.SAVORY
        ]
    },
    {
        name: 'rougail de richton',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            'jus de citron vert',
            'pâte de cacahuète',
            'pâte de piment à la mangue toco',
            condiments.AIL,
            condiments.BOUQUET_GARNI,
            condiments.CURCUMA,
            condiments.GINGEMBRE,
            condiments.OIGNONS,
            condiments.PAPRIKA,
            condiments.PIMENT,
            condiments.POIVRE,
            condiments.SEL,
            feculents.RIZ,
            legumes.TOMATES_PULPE,
            viande.SAUCISSES_MONTBELIARD,
            viande.SAUCISSES_MORTAUX,
        ],
        course: 'plat',
        tags: [
            tags.FATTY,
            tags.SAVORY
        ]
    },
    {
        name: 'cookies de richton',
        difficulty: DifficultyLevel.CASUAL,
        course: 'dessert',
        ingredients: [
            'fécule de maïs',
            'pépites de chocolat noir',
            'pralin',
            condiments.SUCRE_ROUX,
            feculents.FARINE_BLE,
            laitages_divers.BEURRE_DEMI_SEL,
            misc.LEVURE_CHIMIQUE,
            misc.OEUFS,
        ],
        season: {
            summer: true,
            winter: true,
            autumn: true,
            spring: true
        },
        tags: [
            tags.FATTY,
            tags.SWEET
        ]
    },
    {
        name: 'patrick\'s cornbread',
        difficulty: DifficultyLevel.CASUAL,
        course: 'dessert',
        ingredients: [
            condiments.SUCRE,
            feculents.FARINE_BLE,
            feculents.FARINE_MAIS,
            laitages_divers.BEURRE_DEMI_SEL,
            misc.LEVURE_CHIMIQUE,
            misc.OEUFS,
        ]
    },
    {
        name: 'granité de monbazillac aux griottes',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'dessert',
        ingredients: [
            alcool.VIN_BLANC_MONBAZILLAC,
            condiments.MENTHE,
            condiments.SUCRE_GLACE,
            fruits.CITRONS,
            fruits.ORANGES,
            misc.OEUFS,
            surgeles.GRIOTTES,
        ],
        tags: [
            tags.SWEET
        ]
    },
    {
        name: 'pizza',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.HUILE_OLIVE,
            condiments.SEL,
            feculents.FARINE_BLE,
            fromages.GORGONZOLA,
            fromages.MOZZARELLA,
            misc.LEVURE_BOULANGER,
            viande.CHORIZO,
            viande.JAMBON,
        ],
        tags: [
            tags.FATTY,
            tags.KIDS,
            tags.SAVORY
        ]
    },
    {
        name: 'tagliatelle bolo vitello e funghi',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.HUILE_OLIVE,
            condiments.OIGNONS,
            condiments.POIVRE,
            feculents.FARINE_BLE,
            fromages.PARMESAN,
            legumes.CAROTTES,
            legumes.CELERI,
            misc.BOUILLON_CUBE,
            misc.CHAMPI_PARIS,
            pates.TAGLIATELLE,
            viande.VEAU,
        ],
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'saucisses purée compote',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            'compote',
            'purée',
            viande.SAUCISSES,
        ],
        tags: [
            tags.KIDS
        ]
    },
    {
        name: 'steak riz épinards',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            'steaks',
            feculents.RIZ,
            surgeles.EPINARDS,
        ],
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'lasagnes surgelées',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            surgeles.LASAGNES
        ],
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'moussaka surgelée',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            surgeles.MOUSSAKA
        ],
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'poisson bordelaise surgelé',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            'féculent',
            'légume',
            surgeles.POISSON_BORDELAISE,
        ],
        tags: [
            tags.SAVORY
        ]

    },
    {
        name: 'risotto à la courge',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            alcool.VIN_BLANC_SEC,
            feculents.RIZ_RISOTTO,
            legumes.COURGE,
        ],
        tags: [
            tags.VEGAN,
            tags.VEGGIE,
            tags.SAVORY
        ]
    },
    {
        name: 'brandade surgelée',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            'féculent',
            'légume',
            surgeles.POISSON_BRANDADE,
        ],
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'spaghetti carbonara',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            fromages.PARMESAN,
            misc.OEUFS,
            pates.SPAGHETTI,
            viande.LARDONS,
        ],
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'cordon bleu',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            'cordon bleu',
            'féculent',
            'légume'
        ],
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'courgettes farcies au quinoa et duxelle de champignons',
        difficulty: DifficultyLevel.FANCY,
        course: 'plat',
        ingredients: [
            condiments.AIL,
            condiments.BASILIC,
            condiments.CUMIN,
            condiments.ECHALOTES,
            condiments.HUILE_OLIVE,
            condiments.PERSIL,
            condiments.PIMENT_ESPELETTE,
            feculents.QUINOA,
            legumes.COURGETTES_RONDES,
            legumes.TOMATES_SECHEES,
            legumes.TOMATES,
            misc.CHAMPI_PARIS,
        ],
        source: 'https://chefsimon.com/gourmets/chef-simon/recettes/courgettes-farcies-au-quinoa-et-duxelles-de-champignons',
        tags: [
            tags.VEGAN,
            tags.VEGGIE,
            tags.GLUTEN_FREE,
            tags.SAVORY
        ]
    },
    {
        name: 'soupe aux lentilles corail',
        difficulty: DifficultyLevel.CASUAL,
        course: 'entrée',
        ingredients: [
            condiments.CUMIN,
            condiments.HUILE_OLIVE,
            feculents.LENTILLES_CORAIL,
            fruits.CITRONS,
            legumes.CAROTTES,
            legumes.POIREAU,
            misc.BOUILLON_LEGUMES,
        ],
        source: 'https://www.marmiton.org/recettes/recette_soupe-aux-lentilles-corail_27918.aspx',
        tags: [
            tags.VEGAN,
            tags.VEGGIE,
            tags.GLUTEN_FREE,
            tags.SAVORY
        ]
    },
    {
        name: 'gratin de courgettes',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.AIL,
            condiments.CIBOULETTE,
            condiments.ECHALOTES,
            condiments.MOUTARDE,
            condiments.SEL,
            fromages.GRUYERE,
            laitages_divers.CREME_FRAICHE,
            legumes.COURGETTES,
            viande.JAMBON_BLANC,
        ],
        source: 'https://www.marmiton.org/recettes/recette_gratin-de-courgette_80011.aspx',
        tags: [
            tags.GLUTEN_FREE,
            tags.SAVORY
        ]
    },
    {
        name: 'soupe à la tomate et au basilic',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'entrée',
        ingredients: [
            condiments.BASILIC,
            condiments.HUILE_OLIVE,
            condiments.OIGNONS,
            condiments.POIVRE,
            condiments.SEL,
            laitages_divers.CREME_FRAICHE,
            legumes.TOMATES,
        ],
        source: 'https://www.marmiton.org/recettes/recette_soupe-a-la-tomate-et-au-basilic_41193.aspx',
        tags: [
            tags.VEGGIE,
            tags.GLUTEN_FREE,
            tags.HEALTHY,
            tags.SAVORY,
        ]
    },
    {
        name: 'salade piémontaise',
        difficulty: DifficultyLevel.CASUAL,
        course: 'entrée',
        ingredients: [
            cereales.MAIS,
            condiments.PERSIL,
            condiments.POIVRE,
            condiments.SEL,
            legumes.PATATES,
            legumes.TOMATES,
            misc.CORNICHONS,
            misc.OEUFS,
            viande.POULET_BLANC,
        ],
        source: 'https://www.marmiton.org/recettes/recette_salade-piemontaise-de-nath_33648.aspx',
        tags: [
            tags.GLUTEN_FREE,
            tags.SAVORY
        ],
        season: {
            summer: true,
            autumn: false,
            winter: false,
            spring: true
        }
    },
    {
        name: 'parfait aux fruits rouges',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'dessert',
        ingredients: [
            'fécule',
            condiments.SUCRE_GLACE,
            condiments.SUCRE,
            fruits.CITRONS,
            fruits.FRUITS_ROUGES_DIVERS,
            laitages_divers.CREME_LIQUIDE,
            misc.OEUFS,
        ],
        source: 'https://www.marmiton.org/recettes/recette_parfait-aux-fruits-rouges_176113.aspx',
        tags: [
            tags.VEGGIE,
            tags.SWEET
        ],
        season: {
            summer: true,
            autumn: false,
            winter: false,
            spring: false
        }
    },
    {
        name: 'tomates farcies / riz',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            condiments.FINES_HERBES,
            condiments.HUILE_OLIVE,
            condiments.OIGNONS,
            feculents.RIZ,
            fromages.GRUYERE,
            legumes.TOMATES,
            misc.OEUFS,
            viande.BOEUF_HACHE,
        ],
        source: 'https://www.marmiton.org/recettes/recette_tomates-farcies-a-la-viande-hachee-faciles-et-rapides_92386.aspx',
        season: {
            summer: true,
            autumn: false,
            winter: false,
            spring: false
        },
        tags: [
            tags.SAVORY
        ]
    },
    {
        name: 'mousse à la groseille',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'dessert',
        ingredients: [
            condiments.SUCRE,
            fruits.GROSEILLES,
            laitages_divers.CREME_FRAICHE,
            misc.GELATINE,
        ],
        source: 'https://www.marmiton.org/recettes/recette_mousse-a-la-groseille_170265.aspx',
        season: {
            summer: true,
            autumn: false,
            winter: false,
            spring: false
        },
        tags: [
            tags.SWEET
        ]
    },
    {
        name: 'poivrons farcis au thon et au quinoa',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.HUILE_OLIVE,
            condiments.OIGNONS,
            condiments.POIVRE,
            condiments.SEL,
            feculents.QUINOA,
            laitages_divers.CREME_FRAICHE,
            legumes.POIVRON,
            legumes.TOMATES,
            misc.BOUILLON_CUBE,
            poisson.THON,
        ],
        source: 'https://www.marmiton.org/recettes/recette_poivrons-farcis-au-thon-et-au-quinoa_63771.aspx',
        tags: [
            tags.GLUTEN_FREE,
            tags.NO_PORK,
            tags.SAVORY
        ]
    },
    {
        name: 'salade de riz végé',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            condiments.BASILIC,
            condiments.HUILE_OLIVE,
            condiments.POIVRE,
            condiments.SEL,
            feculents.RIZ,
            fruits.CITRONS,
            legumes.BETTERAVES_CUITES,
            legumes.COURGETTES,
            legumes.RADIS,
            legumes.TOMATES_CERISE,
        ],
        source: 'https://www.marmiton.org/recettes/recette_salade-de-riz-vegetarienne_531273.aspx',
        tags: [
            tags.VEGGIE,
            tags.SAVORY
        ]
    },
    {
        name: 'linguine al limone',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.AIL,
            condiments.CHILI,
            condiments.HUILE_OLIVE,
            condiments.LAURIER,
            condiments.MENTHE,
            condiments.PAPRIKA,
            condiments.SEL,
            condiments.THYM,
            fromages.PARMESAN,
            fruits.CITRONS,
            pates.LINGUINE,
        ],
        source: 'https://www.youtube.com/watch?v=uCOERacO4YY',
        tags: [
            tags.VEGGIE,
            tags.SAVORY
        ]
    },
    {
        name:'welsh royal / frites',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            alcool.BIERE_BLONDE,
            condiments.MOUTARDE,
            feculents.PATATES,
            fromages.CHEDDAR,
            misc.OEUFS,
            misc.PAIN_MIE,
            viande.JAMBON_BLANC,
        ],
        source: 'https://youtu.be/AgOgegDvQlE',
        tags: [
            tags.FATTY,
            tags.SAVORY
        ]
    },
    {
        name: 'Babu-style Carbonnade',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            alcool.BIERE_BRUNE,
            condiments.AIL,
            condiments.CANNELLE,
            condiments.CORIANDRE,
            condiments.HUILE_OLIVE,
            condiments.LAURIER,
            condiments.MOUTARDE,
            condiments.OIGNONS,
            condiments.SUCRE_ROUX,
            condiments.THYM,
            fruits.POMMES,
            laitages_divers.BEURRE,
            misc.BOUILLON_CUBE_BOEUF,
            viande.BOEUF_JOUE,
        ],
        tags: [
            tags.SAVORY,
            tags.FATTY,
            tags.NO_PORK,
        ]
    },
    {
        name: 'Chili con carne maison',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.AIL,
            condiments.BASILIC,
            condiments.CARDAMOME,
            condiments.CUMIN,
            condiments.HUILE_OLIVE,
            condiments.LAURIER,
            condiments.OIGNONS_BLANCS,
            condiments.OIGNONS_ROUGES,
            condiments.PIMENT_JALAPENO,
            condiments.POIVRE,
            condiments.SEL,
            condiments.THYM,
            feculents.HARICOTS_ROUGES,
            feculents.RIZ,
            legumes.MAIS,
            legumes.POIVRON_JAUNE,
            legumes.POIVRON_ROUGE,
            legumes.POIVRON_VERT,
            legumes.TOMATES_COULIS,
            legumes.TOMATES,
            misc.TORTILLAS,
            viande.BOEUF_HACHE,
        ],
        source: 'https://youtu.be/CbLbzXst104',
        tags: [
            tags.SAVORY,
            tags.NO_PORK
        ]
    },
    {
        name: 'Risotto milanese aux champignons',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            alcool.VIN_BLANC_SEC,
            condiments.ECHALOTES,
            feculents.RIZ_RISOTTO_ARBORIO,
            fromages.PARMESAN,
            laitages_divers.BEURRE,
            misc.BOUILLON_LEGUMES,
            misc.CHAMPI_CEPES,
            misc.CHAMPI_GIROLLES,
            misc.CHAMPI,
        ],
        source: 'chefsquare',
        tags: [
            tags.NO_PORK,
            tags.SAVORY,
            tags.VEGGIE,
        ]
    },
    {
        name: 'Risotto alla pilota',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.SEL,
            feculents.RIZ_RISOTTO_VIALONE,
            fromages.GRANA,
            laitages_divers.BEURRE,
            viande.SALAMELLE,
        ],
        source: 'https://ricette.giallozafferano.it/Riso-alla-pilota.html',
        tags: [
            tags.SAVORY,
        ]
    },
    {
        name: 'Boeuf bourguignon',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            alcool.VIN_ROUGE_BOURGOGNE,
            condiments.AIL,
            condiments.BOUQUET_GARNI,
            condiments.OIGNONS_JAUNES,
            condiments.POIVRE,
            condiments.SEL,
            feculents.FARINE_BLE,
            laitages_divers.BEURRE,
            legumes.CAROTTES,
            misc.BOUILLON_CUBE_BOEUF,
            misc.CHAMPI,
            viande.BOEUF_A_MIJOTER_BOURGUIGNON,
            viande.LARDONS,
        ],
        source: 'https://cuisine.journaldesfemmes.fr/recette/346736-boeuf-bourguignon',
        tags: [
            tags.SAVORY,
        ]
    },
    {
        name: 'Tiramisù Speculoos Framboises',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'dessert',
        ingredients: [
            condiments.SUCRE,
            fromages.MASCARPONE,
            fruits.FRAMBOISES,
            laitages_divers.BEURRE,
            misc.OEUFS,
            misc.SPECULOOS,
        ],
        source: 'chefsquare',
        tags: [
            tags.SWEET,
            tags.VEGGIE,
        ]
    },
    {
        name: 'Parmentier de Canard',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.MUSCADE,
            condiments.SEL,
            condiments.POIVRE,
            condiments.OIGNONS_JAUNES,
            condiments.ECHALOTES,
            feculents.PATATES,
            laitages_divers.LAIT,
            laitages_divers.CREME_FRAICHE,
            misc.EAU,
            viande.CANARD_CONFIT_CUISSE,
        ],
        source: 'https://www.marmiton.org/recettes/recette_parmentier-de-confit-de-canard_17048.aspx',
        tags: [
            tags.FATTY,
            tags.SAVORY,
        ],
    }
]