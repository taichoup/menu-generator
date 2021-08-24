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
    NO_PORK = 'pas de porc'
};

export const plats: plat[] = [
    {
        name: 'couscous',
        ingredients: [
            legumes.LEGUMES_COUSCOUS,
            feculents.SEMOULE
        ],
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat'
    },
    {
        name: 'nonozzola',
        ingredients: [
            feculents.PATES,
            fromages.GORGONZOLA,
            misc.OEUFS,
            laitages_divers.CREME_FRAICHE,
            laitages_divers.BEURRE,
            viande.LARDONS,
            fromages.PARMESAN,
            condiments.POIVRE
        ],
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat'
    },
    {
        name: 'boeuf stroganoff',
        difficulty: DifficultyLevel.FANCY,
        ingredients: [
            viande.BOEUF_A_MIJOTER,
            laitages_divers.BEURRE,
            condiments.OIGNONS,
            misc.CHAMPI_PARIS,
            condiments.SUCRE,
            condiments.PAPRIKA,
            legumes.TOMATES_CONCENTRE,
            alcool.VIN_BLANC_SEC,
            laitages_divers.CREME_FRAICHE,
            condiments.MOUTARDE,
            condiments.POIVRE,
            condiments.SEL
        ],
        course: 'plat'
    },
    {
        name: 'moussaka',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            legumes.AUBERGINES,
            condiments.HUILE_OLIVE,
            condiments.OIGNONS,
            condiments.AIL,
            'viande hachée de mouton maigre ou boeuf',
            legumes.TOMATES_PUREE,
            condiments.PERSIL,
            condiments.SEL,
            misc.EAU,
            misc.BOUILLON_CUBE,
            feculents.PATATES,
            legumes.TOMATES,
            laitages_divers.BEURRE,
            feculents.FARINE_BLE,
            laitages_divers.LAIT,
            misc.OEUFS,
            fromages.GRUYERE
        ],
        course: 'plat'
    },
    {
        name: 'paupiettes de dinde',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            viande.DINDE_PAUPIETTES,
            legumes.TOMATES,
            misc.CHAMPI_PARIS,
            misc.BOUILLON_CUBE_VOLAILLE,
            condiments.OIGNONS,
            condiments.AIL,
            condiments.THYM,
            condiments.SEL,
            condiments.POIVRE
        ],
        course: 'plat'
    },
    {
        name: 'saucisse lentilles',
        difficulty: DifficultyLevel.CASUAL,
        ingredients: [
            feculents.LENTILLES_VERTES,
            viande.SAUCISSES,
            condiments.OIGNONS,
            legumes.CAROTTES,
            viande.LARDONS,
            condiments.BOUQUET_GARNI
        ],
        course: 'plat'
    },
    {
        name: 'bortsch',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            legumes.CHOU,
            legumes.CHOU_ROUGE,
            legumes.BETTERAVES_CUITES,
            misc.BOUILLON_CUBE,
            condiments.CUMIN,
            legumes.TOMATES_CONCENTRE,
            condiments.VINAIGRE,
            laitages_divers.CREME_AIGRE,
            condiments.POIVRE,
            condiments.SEL
        ],
        course: 'plat'
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
            legumes.POTIRON,
            legumes.CAROTTES,
            legumes.PATATES,
            condiments.AIL,
            condiments.OIGNONS,
            laitages_divers.LAIT,
            misc.BOUILLON_CUBE_VOLAILLE,
            condiments.HUILE_OLIVE,
            condiments.PERSIL,
            condiments.SEL,
            condiments.POIVRE,
            'crème liquide (facultatif)'
        ],
        course: 'plat',
        tags: [
            tags.VEGGIE,
            tags.GLUTEN_FREE
        ]
    },
    {
        name: 'rougail de richton',
        difficulty: DifficultyLevel.MEDIUM,
        ingredients: [
            viande.SAUCISSES_MONTBELIARD,
            viande.SAUCISSES_MORTAUX,
            condiments.OIGNONS,
            condiments.GINGEMBRE,
            condiments.AIL,
            legumes.TOMATES_PULPE,
            condiments.CURCUMA,
            condiments.BOUQUET_GARNI,
            condiments.PAPRIKA,
            condiments.PIMENT,
            condiments.SEL,
            condiments.POIVRE,
            'pâte de piment à la mangue toco',
            feculents.RIZ,
            'pâte de cacahuète',
            'jus de citron vert'
        ],
        course: 'plat',
        tags: [
            tags.FATTY
        ]
    },
    {
        name: 'cookies de richton',
        difficulty: DifficultyLevel.CASUAL,
        course: 'dessert',
        ingredients: [
            laitages_divers.BEURRE_DEMI_SEL,
            condiments.SUCRE_ROUX,
            misc.OEUFS,
            feculents.FARINE_BLE,
            'fécule de maïs',
            misc.LEVURE_CHIMIQUE,
            'pépites de chocolat noir',
            'pralin'
        ],
        season: {
            summer: true,
            winter: true,
            autumn: true,
            spring: true
        },
        tags: [
            tags.FATTY
        ]
    },
    {
        name: 'patrick\'s cornbread',
        difficulty: DifficultyLevel.CASUAL,
        course: 'dessert',
        ingredients: [
            feculents.FARINE_BLE,
            feculents.FARINE_MAIS,
            condiments.SUCRE,
            misc.OEUFS,
            misc.LEVURE_CHIMIQUE,
            laitages_divers.BEURRE_DEMI_SEL
        ]
    },
    {
        name: 'granité de monbazillac aux griottes',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'dessert',
        ingredients: [
            alcool.VIN_BLANC_MONBAZILLAC,
            fruits.ORANGES,
            fruits.CITRONS,
            misc.OEUFS,
            surgeles.GRIOTTES,
            condiments.SUCRE_GLACE,
            condiments.MENTHE
        ]
    },
    {
        name: 'pizza',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            viande.CHORIZO,
            viande.JAMBON,
            fromages.MOZZARELLA,
            fromages.GORGONZOLA,
            feculents.FARINE_BLE,
            condiments.HUILE_OLIVE,
            condiments.SEL,
            misc.LEVURE_BOULANGER
        ],
        tags: [
            tags.FATTY,
            tags.KIDS
        ]
    },
    {
        name: 'tagliatelle bolo vitello e funghi',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            pates.TAGLIATELLE,
            viande.VEAU,
            condiments.OIGNONS,
            legumes.CAROTTES,
            legumes.CELERI,
            condiments.HUILE_OLIVE,
            misc.BOUILLON_CUBE,
            feculents.FARINE_BLE,
            misc.CHAMPI_PARIS,
            fromages.PARMESAN,
            condiments.POIVRE
        ]
    },
    {
        name: 'saucisses purée compote',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            viande.SAUCISSES,
            'purée',
            'compote'
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
            surgeles.EPINARDS,
            feculents.RIZ
        ]
    },
    {
        name: 'lasagnes surgelées',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            surgeles.LASAGNES
        ]
    },
    {
        name: 'moussaka surgelée',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            surgeles.MOUSSAKA
        ]
    },
    {
        name: 'poisson bordelaise surgelé',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            surgeles.POISSON_BORDELAISE,
            'féculent',
            'légume'
        ]

    },
    {
        name: 'risotto à la courge',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            feculents.RIZ_RISOTTO,
            legumes.COURGE,
            alcool.VIN_BLANC_SEC
        ],
        tags: [
            tags.VEGAN,
            tags.VEGGIE
        ]
    },
    {
        name: 'brandade surgelée',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            surgeles.POISSON_BRANDADE,
            'féculent',
            'légume'
        ]
    },
    {
        name: 'spaghetti carbonara',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            pates.SPAGHETTI,
            viande.LARDONS,
            misc.OEUFS,
            fromages.PARMESAN
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
        ]
    },
    {
        name: 'courgettes farcies au quinoa et duxelle de champignons',
        difficulty: DifficultyLevel.FANCY,
        course: 'plat',
        ingredients: [
            feculents.QUINOA,
            misc.CHAMPI_PARIS,
            legumes.COURGETTES_RONDES,
            legumes.TOMATES,
            legumes.TOMATES_SECHEES,
            condiments.ECHALOTES,
            condiments.AIL,
            condiments.HUILE_OLIVE,
            condiments.CUMIN,
            condiments.PIMENT_ESPELETTE,
            condiments.BASILIC,
            condiments.PERSIL,
        ],
        source: 'https://chefsimon.com/gourmets/chef-simon/recettes/courgettes-farcies-au-quinoa-et-duxelles-de-champignons',
        tags: [
            tags.VEGAN,
            tags.VEGGIE,
            tags.GLUTEN_FREE
        ]
    },
    {
        name: 'soupe aux lentilles corail',
        difficulty: DifficultyLevel.CASUAL,
        course: 'entrée',
        ingredients: [
            condiments.CUMIN,
            fruits.CITRONS,
            condiments.HUILE_OLIVE,
            misc.BOUILLON_LEGUMES,
            legumes.CAROTTES,
            legumes.POIREAU,
            feculents.LENTILLES_CORAIL
        ],
        source: 'https://www.marmiton.org/recettes/recette_soupe-aux-lentilles-corail_27918.aspx',
        tags: [
            tags.VEGAN,
            tags.VEGGIE,
            tags.GLUTEN_FREE
        ]
    },
    {
        name: 'gratin de courgettes',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.SEL,
            viande.JAMBON_BLANC,
            condiments.AIL,
            condiments.MOUTARDE,
            legumes.COURGETTES,
            laitages_divers.CREME_FRAICHE,
            condiments.ECHALOTES,
            condiments.CIBOULETTE,
            fromages.GRUYERE
        ],
        source: 'https://www.marmiton.org/recettes/recette_gratin-de-courgette_80011.aspx',
        tags: [
            tags.GLUTEN_FREE
        ]
    },
    {
        name: 'soupe à la tomate et au basilic',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'entrée',
        ingredients: [
            condiments.HUILE_OLIVE,
            condiments.POIVRE,
            condiments.SEL,
            condiments.BASILIC,
            legumes.TOMATES,
            condiments.OIGNONS,
            laitages_divers.CREME_FRAICHE
        ],
        source: 'https://www.marmiton.org/recettes/recette_soupe-a-la-tomate-et-au-basilic_41193.aspx',
        tags: [
            tags.VEGGIE,
            tags.GLUTEN_FREE,
            tags.HEALTHY
        ]
    },
    {
        name: 'salade piémontaise',
        difficulty: DifficultyLevel.CASUAL,
        course: 'entrée',
        ingredients: [
            condiments.SEL,
            condiments.POIVRE,
            condiments.PERSIL,
            legumes.TOMATES,
            legumes.PATATES,
            misc.OEUFS,
            cereales.MAIS,
            viande.POULET_BLANC,
            misc.CORNICHONS
        ],
        source: 'https://www.marmiton.org/recettes/recette_salade-piemontaise-de-nath_33648.aspx',
        tags: [
            tags.GLUTEN_FREE
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
            fruits.CITRONS,
            condiments.SUCRE_GLACE,
            condiments.SUCRE,
            fruits.FRUITS_ROUGES_DIVERS,
            'fécule',
            misc.OEUFS,
            laitages_divers.CREME_LIQUIDE
        ],
        source: 'https://www.marmiton.org/recettes/recette_parfait-aux-fruits-rouges_176113.aspx',
        tags: [
            tags.VEGGIE
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
            feculents.RIZ,
            condiments.HUILE_OLIVE,
            legumes.TOMATES,
            misc.OEUFS,
            condiments.OIGNONS,
            condiments.FINES_HERBES,
            viande.BOEUF_HACHE,
            fromages.GRUYERE
        ],
        source: 'https://www.marmiton.org/recettes/recette_tomates-farcies-a-la-viande-hachee-faciles-et-rapides_92386.aspx',
        season: {
            summer: true,
            autumn: false,
            winter: false,
            spring: false
        }
    },
    {
        name: 'mousse à la groseille',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'dessert',
        ingredients: [
            misc.GELATINE,
            condiments.SUCRE,
            fruits.GROSEILLES,
            laitages_divers.CREME_FRAICHE
        ],
        source: 'https://www.marmiton.org/recettes/recette_mousse-a-la-groseille_170265.aspx',
        season: {
            summer: true,
            autumn: false,
            winter: false,
            spring: false
        }
    },
    {
        name: 'poivrons farcis au thon et au quinoa',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            condiments.SEL,
            condiments.POIVRE,
            condiments.HUILE_OLIVE,
            misc.BOUILLON_CUBE,
            legumes.TOMATES,
            feculents.QUINOA,
            poisson.THON,
            legumes.POIVRON,
            condiments.OIGNONS,
            laitages_divers.CREME_FRAICHE
        ],
        source: 'https://www.marmiton.org/recettes/recette_poivrons-farcis-au-thon-et-au-quinoa_63771.aspx',
        tags: [
            tags.GLUTEN_FREE,
            tags.NO_PORK
        ]
    },
    {
        name: 'salade de riz végé',
        difficulty: DifficultyLevel.CASUAL,
        course: 'plat',
        ingredients: [
            condiments.POIVRE,
            condiments.SEL,
            condiments.HUILE_OLIVE,
            condiments.BASILIC,
            fruits.CITRONS,
            legumes.COURGETTES,
            legumes.TOMATES_CERISE,
            feculents.RIZ,
            legumes.BETTERAVES_CUITES,
            legumes.RADIS
        ],
        source: 'https://www.marmiton.org/recettes/recette_salade-de-riz-vegetarienne_531273.aspx',
        tags: [
            tags.VEGGIE
        ]
    },
    {
        name: 'linguine al limone',
        difficulty: DifficultyLevel.MEDIUM,
        course: 'plat',
        ingredients: [
            fromages.PARMESAN,
            condiments.HUILE_OLIVE,
            pates.LINGUINE,
            condiments.MENTHE,
            fruits.CITRONS,
            condiments.THYM,
            condiments.LAURIER,
            condiments.AIL,
            condiments.SEL,
            condiments.PAPRIKA,
            condiments.CHILI
        ],
        source: 'https://www.youtube.com/watch?v=uCOERacO4YY',
        tags: [
            tags.VEGGIE
        ]
    }

]