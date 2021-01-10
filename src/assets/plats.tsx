export type plat = {
    name: string,
    ingredients: string[],
    difficulty: 'casual' | 'medium' | 'fancy',
    course: 'entrée' | 'plat' | 'dessert' | 'cocktail' | 'goûter',
    season?: {
        summer: boolean,
        autumn: boolean,
        winter: boolean,
        spring: boolean
    }
}

export const plats: plat[] = [
    {
        name: 'couscous',
        ingredients: [
            'légumes à couscous',
            'semoule'
        ],
        difficulty: 'casual',
        course: 'plat'
    },
    {
        name: 'nonozzola',
        ingredients: [
            'pâtes',
            'gorgonzola',
            'oeufs',
            'crème fraîche',
            'beurre',
            'lardons',
            'parmesan',
            'poivre'
        ],
        difficulty: 'medium',
        course: 'plat'
    },
    {
        name: 'boeuf stroganoff',
        difficulty: 'fancy',
        ingredients: [
            'viande de boeuf à mijoter',
            'beurre',
            'oignons',
            'champignons de Paris',
            'sucre',
            'paprika',
            'concentré de tomates',
            'vin blanc sec',
            'crème fraîche',
            'moutarde',
            'poivre',
            'sel'
        ],
        course: 'plat'
    },
    {
        name: 'moussaka',
        difficulty: 'medium',
        ingredients: [
            'aubergines',
            'huile d\'olive',
            'oignons',
            'ail',
            'viande hachée de mouton maigre ou boeuf',
            'purée de tomates',
            'persil',
            'sel',
            'eau',
            'bouillon cube',
            'pommes de terre',
            'tomates',
            'beurre',
            'farine',
            'lait',
            'oeufs',
            'gruyère'
        ],
        course: 'plat'
    },
    {
        name: 'paupiettes de dinde',
        difficulty: 'medium',
        ingredients: [
            'paupiettes de dinde',
            'tomates',
            'champignons de Paris',
            'bouillon cube volaille',
            'oignons',
            'ail',
            'thym',
            'sel',
            'poivre'
        ],
        course: 'plat'
    },
    {
        name: 'saucisse lentilles',
        difficulty: 'casual',
        ingredients: [
            'lentilles vertes',
            'saucisses',
            'oignon blanc',
            'carottes',
            'lardons',
            'bouquet garni'
        ],
        course: 'plat'
    },
    {
        name: 'bortsch',
        difficulty: 'medium',
        ingredients: [
            'chou vert',
            'chou rouge',
            'betteraves cuites',
            'bouillon cube',
            'cumin',
            'concentré de tomates',
            'vinaigre',
            'crème aigre',
            'poivre',
            'sel'
        ],
        course: 'plat'
    },
    {
        name: 'velouté de potiron et carottes',
        difficulty: 'medium',
        season: {
            summer: false,
            autumn: true,
            winter: true,
            spring: false
        },
        ingredients: [
            'potiron',
            'carottes',
            'pommes de terre',
            'ail',
            'oignon',
            'lait',
            'bouillon cube volaille',
            'huile d\'olive',
            'persil',
            'sel',
            'poivre',
            'crème liquide (facultatif)'
        ],
        course: 'plat'
    },
    {
        name: 'rougail de richton',
        difficulty: 'medium',
        ingredients: [
            'saucisses de montbéliard',
            'saucisses de morteaux',
            'oignons',
            'gingembre',
            'ail',
            'pulpe de tomate',
            'curcuma',
            'bouquet garni',
            'paprika',
            'piment',
            'sel',
            'poivre',
            'pâte de piment à la mangue toco',
            'riz',
            'pâte de cacahuète',
            'jus de citron vert'
        ],
        course: 'plat'
    },
    {
        name: 'cookies de richton',
        difficulty: 'casual',
        course: 'dessert',
        ingredients: [
            'beurre demi-sel',
            'sucre complet ou cassonade',
            'oeufs',
            'farine',
            'fécule de maïs',
            'levure chimique',
            'pépites de chocolat noir',
            'pralin'
        ],
        season: {
            summer: true,
            winter: true,
            autumn: true,
            spring: true
        }
    },
    {
        name: 'patrick\'s cornbread',
        difficulty: 'casual',
        course: 'dessert',
        ingredients: [
            'farine de blé',
            'farine de maïs',
            'sucre',
            'oeufs',
            'baking powder',
            'beurre demi-sel'
        ]
    },
    {
        name: 'granité de monbazillac aux griottes',
        difficulty: 'medium',
        course: 'dessert',
        ingredients: [
            'bouteille de monbazillac',
            'oranges',
            'citron',
            'oeuf',
            'griottes surgelées',
            'sucre glace',
            'menthe'
        ]
    },
    {
        name: 'pizza',
        difficulty: 'medium',
        course: 'plat',
        ingredients: [
            'chorizo',
            'mozzarella',
            'jambon',
            'farine',
            'huile d\'olive',
            'gorgonzola',
            'sel',
            'levure de boulanger'
        ]
    },
    {
        name: 'tagliatelle bolo vitello e funghi',
        difficulty: 'medium',
        course: 'plat',
        ingredients: [
            'tagliatelle',
            'viande de veau',
            'oignons',
            'carottes',
            'céleri',
            'huile d\'olive',
            'bouillon cube',
            'farine',
            'champignons de Paris',
            'parmesan',
            'poivre'
        ]
    },
    {
        name: 'saucisses purée compote',
        difficulty: 'casual',
        course: 'plat',
        ingredients: [
            'saucisses',
            'purée',
            'compote'
        ]
    },
    {
        name: 'steak riz épinards',
        difficulty: 'casual',
        course: 'plat',
        ingredients: [
            'steaks',
            'épinards surgelés',
            'riz'
        ]
    },
    {
        name: 'lasagnes surgelées',
        difficulty: 'casual',
        course: 'plat',
        ingredients: [
            'lasagnes surgelées'
        ]
    },
    {
        name: 'moussaka surgelée',
        difficulty: 'casual',
        course: 'plat',
        ingredients: [
            'moussaka surgelée'
        ]
    },
    {
        name: 'poisson bordelaise surgelé',
        difficulty: 'casual',
        course: 'plat',
        ingredients: [
            'poisson bordelaise surgelé',
            'féculent',
            'légume'
        ]

    },
    {
        name: 'risotto à la courge',
        difficulty: 'fancy',
        course: 'plat',
        ingredients: [
            'riz à risotto',
            'courge',
            'vin blanc'
        ]
    },
    {
        name: 'brandade surgelée',
        difficulty: 'casual',
        course: 'plat',
        ingredients: [
            'brandade surgelée',
            'féculent',
            'légume'
        ]
    },
    {
        name: 'spaghetti carbonara',
        difficulty: 'medium',
        course: 'plat',
        ingredients: [
            'spaghetti',
            'lardons',
            'oeuf',
            'parmesan'
        ]
    },
    {
        name: 'cordon bleu',
        difficulty: 'casual',
        course: 'plat',
        ingredients: [
            'cordon bleu',
            'féculent',
            'légume'
        ]
    }
]