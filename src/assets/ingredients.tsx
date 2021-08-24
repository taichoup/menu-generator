export enum condiments {
    AIL = 'ail',
    POIVRE = 'poivre',
    CUMIN = 'cumin',
    MOUTARDE = 'moutarde',
    HUILE_OLIVE = 'huile d\'olive',
    HUILE_TOURNESOL = 'huile de tournesol',
    HUILE_ARACHIDE = 'huile d\'arachide',
    OIGNONS = 'oignons',
    PAPRIKA = 'paprika',
    SEL = 'sel',
    SUCRE = 'sucre',
    SUCRE_ROUX = 'sucre roux',
    // dans le Nord, la cassonade c'est la vergoise. na.
    SUCRE_CASSONADE = 'vergeoise',
    SUCRE_GLACE = 'sucre glace',
    PERSIL = 'persil',
    THYM = 'thym',
    ROMARIN = 'romarin',
    SAUGE = 'sauge',
    BOUQUET_GARNI = 'bouquet garni',
    VINAIGRE = 'vinaigre',
    VINAIGRE_VIN_ROUGE = 'vinaigre de vin rouge',
    VINAIGRE_BALSAMIQUE = 'vinaigre balsamique',
    VINAIGRE_CIDRE = 'vinaigre de cidre',
    PIMENT = 'piment',
    PIMENT_CAYENNE = 'piment de Cayenne',
    PIMENT_ESPELETTE = 'piment d\'Espelette',
    BASILIC = 'basilic',
    ECHALOTES = 'échalotes',
    GINGEMBRE = 'gingembre',
    CURCUMA = 'curcuma',
    MENTHE = 'menthe',
    CIBOULETTE = 'ciboulette',
    FINES_HERBES = 'fines herbes',
    LAURIER = 'laurier',
    CHILI = 'chili' 
};

export enum viande {
    BOEUF = 'boeuf',
    BOEUF_HACHE = 'boeuf haché',
    LARDONS = 'lardons',
    BOEUF_A_MIJOTER = 'viande de boeuf à mijoter',
    DINDE_PAUPIETTES = 'paupiettes de dinde',
    DINDE_FILETS = 'filets de dinde',
    DINDE_AIGUILLETTES = 'aiguillettes de dinde',
    DINDE_ESCALOPES = 'escalopes de dinde',
    SAUCISSES = 'saucisses',
    SAUCISSES_MORTAUX = 'saucisses de Mortaux',
    SAUCISSES_MONTBELIARD = 'saucisses de Montbéliard',
    SAUCISSES_STRASBOURG = 'saucisses de Strasbourg',
    JAMBON = 'jambon',
    JAMBON_BLANC = 'jambon blanc',
    JAMBON_FUME = 'jambon fumé',
    VEAU = 'veau',
    CHORIZO = 'chorizo',
    POULET = 'poulet',
    POULET_BLANC = 'blancs de poulet',
    POULET_CUISSES = 'cuisses de poulet',
    POULET_AILES = 'ailes de poulet',
    POULET_AIGUILLETTES = 'aiguillettes de poulet'
};

export enum poisson {
    THON = 'thon',
    CABILLAUD = 'cabillaud',
    LIEU = 'lieu',
    LIEU_NOIR = 'lieu noir',
    LIEU_JAUNE = 'lieu jaune',
    SOLE = 'sole',
    LIMANDE = 'limande',
    ROUGET = 'rouget'
};

export enum feculents {
    SEMOULE = 'semoule',
    PATES = 'pâtes',
    // on considère les patates comme à la fois des légumes et des féculents
    PATATES = 'pommes de terre',
    FARINE_BLE = 'farine',
    FARINE_MAIS = 'farine de maïs',
    LENTILLES_VERTES = 'lentilles vertes',
    LENTILLES_CORAIL = 'lentilles corail',
    LENTILLES_BLONDES = 'lentilles blondes',
    QUINOA = 'quinoa',
    RIZ = 'riz',
    RIZ_THAI = 'ris thaï',
    RIZ_BASMATI = 'riz Basmati',
    RIZ_ROND = 'riz rond',
    RIZ_RISOTTO = 'riz risotto'
}

export enum fromages {
    GORGONZOLA = 'gorgonzola',
    PARMESAN = 'parmesan',
    GRUYERE = 'gruyère',
    MOZZARELLA = 'mozzarella',
    COMTE = 'comte',
    CHEDDAR = 'cheddar'
}

export enum legumes {
    LEGUMES_COUSCOUS = 'légumes à couscous',
    AUBERGINES = 'aubergines',
    TOMATES = 'tomates',
    TOMATES_PUREE = 'purée de tomates',
    TOMATES_COULIS = 'coulis de tomates',
    TOMATES_SECHEES = 'tomates séchées',
    TOMATES_CONCENTRE = 'concentré de tomates',
    TOMATES_PULPE = 'pulpe de tomates',
    TOMATES_CERISE = 'tomates cerise',
    // on considère les patates comme à la fois des légumes et des féculents
    PATATES = 'pommes de terre',
    CAROTTES = 'carottes',
    CHOU = 'chou',
    CHOU_ROUGE = 'chou rouge',
    BETTERAVES = 'betteraves',
    BETTERAVES_CUITES = 'betteraves cuites',
    POTIRON = 'potiron',
    COURGETTES = 'courgettes',
    COURGETTES_RONDES = 'courgettes rondes',
    COURGE = 'courge',
    BUTTERNUT = 'butternut',
    CELERI = 'céleri',
    POIREAU = 'poireaux',
    POIVRON = 'poivrons',
    POIVRON_ROUGE = 'poivrons rouges',
    POIVRON_JAUNE = 'poivrons jaunes',
    POIVRON_VERT = 'poivrons verts',
    RADIS = 'radis',
    RADIS_NOIR = 'radis noir',
    RAIFORT = 'raifort',
    SALSIFI = 'salsifi',
    TOPINAMBOUR = 'tompinambour',
    NAVET = 'navet'
};

export enum misc {
    OEUFS = 'oeufs',
    CHAMPI_PARIS = 'champignons de Paris',
    EAU = 'eau',
    BOUILLON_CUBE = 'bouillon cube',
    BOUILLON_CUBE_VOLAILLE = 'bouillon cube de volaille',
    BOUILLON_CUBE_BOEUF = 'bouillon cube de boeuf',
    BOUILLON_LEGUMES = 'bouillon de légumes',
    LEVURE_BOULANGER = 'levure de boulanger',
    LEVURE_CHIMIQUE = 'levure chimique',
    CORNICHONS = 'cornichons',
    GELATINE = 'feuilles de gélatine'
}

export enum laitages_divers {
    CREME_FRAICHE = 'crème fraîche',
    BEURRE = 'beurre',
    BEURRE_DEMI_SEL = 'beurre demi-sel',
    LAIT = 'lait',
    CREME_AIGRE = 'crème aigre',
    CREME_LIQUIDE = 'crème liquide'
}

export enum surgeles {
    LASAGNES = 'lasagnes surgelées',
    MOUSSAKA = 'moussaka surgelée',
    EPINARDS = 'épinards surgelés',
    GRIOTTES = 'griottes surgelées',
    POISSON_BORDELAISE = 'poisson bordelaise surgelé',
    POISSON_BRANDADE = 'brandade de morue surgelée'
}

export enum alcool {
    VIN_BLANC_SEC = 'vin blanc sec',
    VIN_BLANC_MONBAZILLAC = 'monbazillac'
}

export enum pates {
    TAGLIATELLE = 'tagliatelle',
    SPAGHETTI = 'spaghetti',
    LINGUINE = 'linguine',
    RADIATORI = 'radiatori',
    FARFALLE = 'farfalle',
    FUSILLI = 'fusilli',
    PENNE = 'penne rigate'
}

export enum fruits {
    GRIOTTES = 'griottes',
    POMMES = 'pommes',
    POIRES = 'poires',
    BANANES = 'bananes',
    KIWIS = 'kiwis',
    ORANGES = 'oranges',
    CERISES = 'cerises',
    FRAMBOISES = 'framboises',
    CITRONS = 'citrons',
    FRUITS_ROUGES_DIVERS = 'fruits rouges',
    GROSEILLES = 'groseilles'
}

export enum cereales {
    MAIS = 'maïs',
    BLE = 'blé',
    ORGE = 'orge',
    SEIGLE = 'seigle',
    SARRASIN = 'sarrasin'
}