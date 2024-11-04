export enum Condiments {
    AIL = 'ail',
    ANETH = 'aneth',
    BASILIC = 'basilic',
    BOUQUET_GARNI = 'bouquet garni',
    CANNELLE = 'cannelle',
    CARDAMOME = 'cardamome',
    CHILI = 'chili',
    CIBOULETTE = 'ciboulette',
    CORIANDRE = 'coriandre',
    CUMIN = 'cumin',
    CURCUMA = 'curcuma',
    CURRY = 'curry',
    ECHALOTES = 'échalotes',
    FINES_HERBES = 'fines herbes',
    GINGEMBRE = 'gingembre',
    GIROFLE_CLOUS = 'clous de girofle',
    HUILE_ARACHIDE = 'huile d\'arachide',
    HUILE_OLIVE = 'huile d\'olive',
    HUILE_PEPINS_RAISIN = 'huime de pépins de raisins',
    HUILE_TOURNESOL = 'huile de tournesol',
    HUILE_VEGETALE_AU_CHOIX = 'huile végétale au choix',
    HUILE_SESAME = 'huile de sésame',
    LAURIER = 'laurier',
    MENTHE = 'menthe',
    MIRIN = 'mirin',
    MOUTARDE = 'moutarde',
    MUSCADE = 'muscade',
    MUSCADE_NOIX = 'noix de muscade',
    OIGNONS = 'oignons',
    OIGNONS_BLANCS = 'oignons blancs',
    OIGNONS_JAUNES = 'oignons jaunes',
    OIGNONS_JEUNES = 'oignons de printemps',
    OIGNONS_ROUGES = 'oignons rouges',
    PAPRIKA = 'paprika',
    PAPRIKA_DOUX = 'paprika doux',
    PAPRIKA_FORT = 'paprika fort',
    PERSIL = 'persil',
    PIMENT = 'piment',
    PIMENT_CAYENNE = 'piment de Cayenne',
    PIMENT_ESPELETTE = 'piment d\'Espelette',
    PIMENT_JALAPENO = 'piment Jalapeño',
    POIVRE = 'poivre',
    ROMARIN = 'romarin',
    SAFRAN = 'safran',
    SAUCE_SOJA = 'sauce soja',
    SAUGE = 'sauge',
    SEL = 'sel',
    SUCRE = 'sucre',
    // dans le Nord, la cassonade c'est la vergoise. na.
    SUCRE_CASSONADE = 'vergeoise',
    SUCRE_GLACE = 'sucre glace',
    SUCRE_ROUX = 'sucre roux',
    THYM = 'thym',
    VANILLE = 'vanille',
    VINAIGRE = 'vinaigre',
    VINAIGRE_BALSAMIQUE = 'vinaigre balsamique',
    VINAIGRE_CIDRE = 'vinaigre de cidre',
    VINAIGRE_VIN_ROUGE = 'vinaigre de vin rouge',
};

export enum Viande {
    BOEUF = 'boeuf',
    BOEUF_A_MIJOTER = 'viande de boeuf à mijoter',
    BOEUF_A_MIJOTER_BOURGUIGNON = 'boeuf bourguignon (morceaux persillés et un peu gélatineux)',
    BOEUF_HACHE = 'boeuf haché',
    BOEUF_JOUE = 'joue de boeuf',
    CANARD_CONFIT = 'confit de canard',
    CANARD_CONFIT_CUISSE = 'cuisse de canard confite',
    CHORIZO = 'chorizo',
    DINDE_AIGUILLETTES = 'aiguillettes de dinde',
    DINDE_ESCALOPES = 'escalopes de dinde',
    DINDE_FILETS = 'filets de dinde',
    DINDE_PAUPIETTES = 'paupiettes de dinde',
    JAMBON = 'jambon',
    JAMBON_BLANC = 'jambon blanc',
    JAMBON_FUME = 'jambon fumé',
    LARDONS = 'lardons',
    PORC = 'porc',
    PORC_COTES = 'côtes de porc',
    PORC_JOUE = 'joue de porc',
    POULET = 'poulet',
    POULET_AIGUILLETTES = 'aiguillettes de poulet',
    POULET_AILES = 'ailes de poulet',
    POULET_BLANC = 'blancs de poulet',
    POULET_CUISSES = 'cuisses de poulet',
    SALAMELLE = 'salamelle de Mantoue',
    SAUCISSES = 'saucisses',
    SAUCISSES_MONTBELIARD = 'saucisses de Montbéliard',
    SAUCISSES_MORTAUX = 'saucisses de Mortaux',
    SAUCISSES_STRASBOURG = 'saucisses de Strasbourg',
    VEAU = 'veau',
    VEAU_TENDRON = 'tendron de veau',
    VEAU_EPAULE = 'épaule de veau',
};

export enum Poisson {
    CABILLAUD = 'cabillaud',
    DAURADE = 'daurade',
    LIEU = 'lieu',
    LIEU_JAUNE = 'lieu jaune',
    LIEU_NOIR = 'lieu noir',
    LIMANDE = 'limande',
    ROUGET = 'rouget',
    SOLE = 'sole',
    THON = 'thon',
};

export enum Feculents {
    AU_CHOIX = 'féculent au choix',
    FARINE_BLE = 'farine',
    FARINE_MAIS = 'farine de maïs',
    HARICOTS_ROUGES = 'haricots rouges',
    LENTILLES_BLONDES = 'lentilles blondes',
    LENTILLES_CORAIL = 'lentilles corail',
    LENTILLES_VERTES = 'lentilles vertes',
    // on considère les patates comme à la fois des légumes et des féculents
    PATATES = 'pommes de terre',
    PATES = 'pâtes',
    QUINOA = 'quinoa',
    RIZ = 'riz',
    RIZ_BASMATI = 'riz Basmati',
    RIZ_RISOTTO = 'riz risotto',
    RIZ_RISOTTO_ARBORIO = 'riz arborio (crémeux)',
    RIZ_RISOTTO_BALDO = 'riz baldo (absorbant)',
    RIZ_RISOTTO_CARNAROLI = 'riz carnaroli',
    RIZ_RISOTTO_ROMA = 'riz roma (polyvalent)',
    RIZ_RISOTTO_VIALONE = 'riz vialone nano',
    RIZ_ROND = 'riz rond',
    RIZ_THAI = 'ris thaï',
    SEMOULE = 'semoule',
}

export enum Fromages {
    CHEDDAR = 'cheddar',
    CHEVRE = 'chèvre',
    CHEVRE_FRAIS = 'chèvre frais',
    COMTE = 'comte',
    GORGONZOLA = 'gorgonzola',
    GRANA = 'grana padano',
    GRUYERE = 'gruyère',
    MASCARPONE = 'mascarpone',
    MOZZARELLA = 'mozzarella',
    PARMESAN = 'parmesan',
    RAPE_AU_CHOIX = 'fromage râpé au choix',
}

export enum Legumes {
    AU_CHOIX = 'légumes au choix',
    AUBERGINES = 'aubergines',
    AVOCATS = 'avocats',
    BETTERAVES = 'betteraves',
    BETTERAVES_CUITES = 'betteraves cuites',
    BLETTES = 'blettes',
    BUTTERNUT = 'butternut',
    CAROTTES = 'carottes',
    CELERI = 'céleri',
    CHOU = 'chou',
    CHOU_ROUGE = 'chou rouge',
    COURGE = 'courge',
    COURGETTES = 'courgettes',
    COURGETTES_RONDES = 'courgettes rondes',
    FENOUIL = 'fenouil',
    LEGUMES_COUSCOUS = 'légumes à couscous',
    MAIS = 'maïs',
    NAVET = 'navet',
    // on considère les patates comme à la fois des légumes et des féculents
    PATATES = 'pommes de terre',
    POIREAU = 'poireaux',
    POIVRON = 'poivrons',
    POIVRON_JAUNE = 'poivrons jaunes',
    POIVRON_ROUGE = 'poivrons rouges',
    POIVRON_VERT = 'poivrons verts',
    POTIRON = 'potiron',
    RADIS = 'radis',
    RADIS_NOIR = 'radis noir',
    RAIFORT = 'raifort',
    SALSIFI = 'salsifi',
    TOMATES = 'tomates',
    TOMATES_CERISE = 'tomates cerise',
    TOMATES_CONCENTRE = 'concentré de tomates',
    TOMATES_COULIS = 'coulis de tomates',
    TOMATES_PELEES = 'tomates pelées',
    TOMATES_PULPE = 'pulpe de tomates',
    TOMATES_PUREE = 'purée de tomates',
    TOMATES_SECHEES = 'tomates séchées',
    TOPINAMBOUR = 'tompinambour',
};

export enum Divers {
    BOUILLON_CUBE = 'bouillon cube',
    BOUILLON_CUBE_BOEUF = 'bouillon cube de boeuf',
    BOUILLON_CUBE_VOLAILLE = 'bouillon cube de volaille',
    BOUILLON_LEGUMES = 'bouillon de légumes',
    CHAMPI = 'champignons',
    CHAMPI_CEPES = 'cèpes',
    CHAMPI_GIROLLES = 'girolles',
    CHAMPI_PARIS = 'champignons de Paris',
    CHAPELURE = 'chapelure',
    CHOCOLAT = 'chocolat',
    CHOCOLAT_LAIT = 'chocolat au lait',
    CHOCOLAT_BLANC = 'chocolat blanc',
    CHOCOLAT_NOIR = 'chocolat noir',
    CHOCOLAT_PATISSIER = 'chocolat pâtissier',
    CORNICHONS = 'cornichons',
    EAU = 'eau',
    GELATINE = 'feuilles de gélatine',
    LEVURE_BOULANGER = 'levure de boulanger',
    LEVURE_CHIMIQUE = 'levure chimique',
    MIEL = 'miel',
    MIEL_CHATAIGNE = 'miel de chataîgne',
    OEUFS = 'oeufs',
    PAIN = 'pain',
    PAIN_COMPLET = 'pain complet',
    PAIN_MIE = 'pain de mie',
    SPECULOOS = 'biscuits speculoos',
    TORTILLAS = 'tortillas',
}

export enum Oleagineux {
    AMANDES = 'amandes',
    NOISETTES = 'noisettes',
    NOIX = 'noix',
    NOIX_CAJOU = 'noix de cajou',
    NOIX_PECAN = 'noix de pécan',
}

export enum LaitagesDivers {
    BEURRE = 'beurre',
    BEURRE_DEMI_SEL = 'beurre demi-sel',
    CREAM_CHEESE = 'cream cheese',
    CREME_AIGRE = 'crème aigre',
    CREME_FRAICHE = 'crème fraîche',
    CREME_LIQUIDE = 'crème liquide',
    FROMAGE_BLANC = 'fromage blanc',
    LAIT = 'lait',
    LAIT_COCO = 'lait de coco',
}

export enum Surgeles {
    EPINARDS = 'épinards surgelés',
    GRIOTTES = 'griottes surgelées',
    LASAGNES = 'lasagnes surgelées',
    MOUSSAKA = 'moussaka surgelée',
    POISSON_BORDELAISE = 'poisson bordelaise surgelé',
    POISSON_BRANDADE = 'brandade de morue surgelée'
}

export enum Alcools {
    BIERE_BLONDE = 'bière blonde',
    BIERE_BRUNE = 'bière brune',
    EAU_DE_VIE_POIRE = 'eau de vie de poire',
    EAU_DE_VIE_PRUNE = 'eau de vie de prune',
    VIN_BLANC_MONBAZILLAC = 'monbazillac',
    VIN_BLANC_SEC = 'vin blanc sec',
    VIN_ROUGE = 'vin rouge',
    VIN_ROUGE_BEAUJOLAIS = 'beaujolais',
    VIN_ROUGE_BORDEAUX = 'bordeaux rouge',
    VIN_ROUGE_BOURGOGNE = 'bourgogne rouge',
    VIN_ROUGE_COTES_RHONE = 'côtes du rhône rouge',
    VIN_ROUGE_LOIRE = 'vin de loire rouge',
}

export enum Pates {
    FARFALLE = 'farfalle',
    FUSILLI = 'fusilli',
    LINGUINE = 'linguine',
    PENNE = 'penne rigate',
    RADIATORI = 'radiatori',
    SPAGHETTI = 'spaghetti',
    TAGLIATELLE = 'tagliatelle',
}

export enum Fruits {
    ANANAS = 'ananas',
    AVOCATS = 'avocats',
    BANANES = 'bananes',
    CERISES = 'cerises',
    CITRONS = 'citrons',
    CITRONS_ZESTES = 'zestes de citron',
    FRAMBOISES = 'framboises',
    FRUITS_PASSION = 'fruits de la passion',
    FRUITS_ROUGES_DIVERS = 'fruits rouges',
    GRIOTTES = 'griottes',
    GROSEILLES = 'groseilles',
    KIWIS = 'kiwis',
    ORANGES = 'oranges',
    POIRES = 'poires',
    POMMES = 'pommes',
}

export enum Cereales {
    BLE = 'blé',
    MAIS = 'maïs',
    ORGE = 'orge',
    SARRASIN = 'sarrasin',
    SEIGLE = 'seigle',
}

export type AnyIngredient = 
  | Condiments 
  | Viande
  | Poisson
  | Feculents
  | Fromages
  | Legumes
  | Divers
  | Oleagineux
  | LaitagesDivers
  | Surgeles
  | Alcools
  | Fruits
  | Cereales

export type Ingredient<T> = T extends { [key: string]: infer U } ? U : never;

export type GroceryItemType<T> = { name: Ingredient<T>, count: number }

type GroceryKeys = 
  |'alcools'
  |'condiments'
  |'féculents'
  |'fromages'
  |'fruits'
  |'graines'
  |'laitages'
  |'légumes'
  |'misc'
  |'oléagineux'
  |'poisson'
  |'surgelés'
  |'viande'

// TODO: trouver un moyen d'enlever les typeof
export interface Groceries {
  alcools: GroceryItemType<Alcools>[];
  condiments: GroceryItemType<Condiments>[];
  féculents: GroceryItemType<Feculents | Pates>[];
  fromages: GroceryItemType<Fromages>[];
  fruits: GroceryItemType<Fruits>[];
  graines: GroceryItemType<Cereales>[];
  laitages: GroceryItemType<LaitagesDivers>[];
  légumes: GroceryItemType<Legumes>[];
  misc: GroceryItemType<Divers>[];
  oléagineux: GroceryItemType<Oleagineux>[];
  poisson: GroceryItemType<Poisson>[];
  surgelés: GroceryItemType<Surgeles>[];
  viande: GroceryItemType<Viande>[];
}

// export type Groceries = Record<GroceryKeys, GroceryItemType<AnyIngredient>[]>;

// tests ici: https://www.typescriptlang.org/play/?ssl=1&ssc=1&pln=4&pc=1#code/KYDwDg9gTgLgBMAdgVwLZwMIUQEwJapIwDOcA3gFBzVwCCAkgDJwC8cA5AIZ4A27ANFRq0AcgFEAKgAlWHTomAwAFgKHUAQrQDKTehlnsARp2K88AY1U046gPIBVAIr3JAfQDitAEoj6BwxDIAI7IinAA5pxQiHhWNBii4oyMYgbm8go8PMBx1AleACK0ALK2xals7OlQOJyoEIS5mFK6aUpmTRj0dvYpEhIVHOZ4AcjZMDA5gtYYtl70ogVeg1XQePI4UFNqmPbF9CJpaHiInfZeGHu0R1DmaJxnXl4AmjdQAJ5NYhhStIy2Ay0BgAl+YlJweBBJsQmgAxA5iLSuKRiLzqREGABmJ2ApCUwCghlxTXcB3cYmK6mWBnCJ3CwFQhi2JPoXlssJSrgw-3sQMq5khyFIOGAETwUAgmOyTSk9iYYlc3loP3oBRWSmQvFFOAAOlwoJwwXgRTK5ZzbIx6AA1dWa7JwXXsCA8PAAN221ll8tcAAUxD6DkivAwdIdKhqCNrRWBgWATsLRQa8KZEDDpjQvZyJA4fIiLQYI-aRXAYIForjnabvTbyRI-graPYuVJbPQABoFu2i13A8LAmAQ0WcZBwMEQPAgKucrSIkq2rUO0XEYHEOoemiMRvzVEGHjDqB4AlNcoiaQrQiIZTr6j7eZhjiocUnY8OOuFc+BAc1a9wYq8hJqgYqBCukJrpje-60GqrgiK2HaVIg44gIucDAcQoE-q27iwSIfIcOO4SIamTRYThSLqJuIgYHhTp4IR2CkIYe6IOYaY7KRti4a4ABSjbiDRBFEaQABWw4KGx1gcVx3FiPY-EGIJDEoWAB6XgyYASTQUlBg45ICXRQlwBKyD0pp1A+rQPrzAA0tclRgJwKl4AA1g84FwBZVn0LZrgFA48EcA5TmuQ6gSTu5nk2bQriwnMEgGEFB4hZi0AwE0fpeDozD2QSph8BF9AnvF9mRpe6WFWIp5crQzyVeICWlfAxYYJw7xIAo5VFa4iJ+n0AwNReTV6mIxBgMA4yTJ1lUSDxfyWZVtgDUQcDcRCjnAAAjxA6Wtla1L2eOrrMu5bLFN4BwGBKqBRM+7laLQsLBve7CrpiBqnHdjYYAqWi2LxBirsg5hLhAolNPd9jkgDw70uDYjZRwxDjeD9gYPtiNA8dOwAPTYw68ikPaIjQDg-BwHuo4mMQ2CcMWli4vAFPulA4TjkjAB0cCIJw7M7FoqPLNVWi-SIUErMz9Jsz+-Nowq7ibt9AOY6K4R7sDKOy64bL2AFL3K0ZYVNNIzzFAYyjvKgTRWqITApAYrryLw0ruVaBwMO46PsK6JzcOEWPWK7ov0B7CqaIw937M44s+3RWxwMYPCro+IQ-oH7uC10SzR9zsdRqOxr+zQafB4Lgda7p2e+3Hxbe4gBsmdsAC+ADcFAUKAkCwAgKDoFa6y4KKlDWHYsmwv4EDAMgmJNCP9iwoqrj7NxAI7pU3sbHnAST5icAAAeoXgwlQke7mz-P0VLyvXiuD0XjuHK2GceP2-x2W4SavRdcABT1LcwDDshMaUA8o8BXAgeAyA65jRHH2PcMAcTIBAAAShnrYUeyJlQomflPOA4IwTAlQeg5eLgDBH1CChLeU9OiiG8AULknF4TFSGNgbETVRTpG5jUahotCj0JEIwrkcphYrDuMmJGKEOFRBwKOFheBJruR+HMegAAtRa-IlBrAAF7bXcgUA40F3Zmj6hiSovs7QTVxChfAA8mh6JENBRECR-h+horidIkIxoJgdCcMCOw7HQXhH0Gi2JxheOsb46w-iFQWXsAGSQgIErDjjIoaEVifE-l4pSJ+lRRKMmwE0TJdgRA30ovoHJdQAh1yYvISw7lCmcRinsFYuTKlwExGgAh7lNyFE4jRPcNQGI7QuAlaAtSdg+jmBgehCT+QABfUnFk7mM6wEyLg8QcM0wIeclk7V6JIEZYxFC7L6IqYORj4kmLkHRcxKTLGLMCOMY5bgGApBotwbIXjICHLShFBwJyKKiDKRwapLFPkPKOb8vZM1Lj0GETRURxAkZgu+eDOa5RkgrFXHuQgWQ87FHkKWUIqLUawpnDRQGwxEXEk+iSuFi9OISHRJaWh0MgZiLuaKYo2AYCGGBC6KRxKuh0tKF4OsOtWWUqRShLlsAAGCtJYiVwWgJDBi0LfdwEr2VeK0DAA0xBRgsytmIRs9t-7ICNY2VwAx7FsmepMXAEo641zNRaps-pGx20qLGYcRZuwusEC3NuHdUrdzQB5Nm1M65D3iLQdQttGwFDSJwQwTthw4FsVuMWBhajIANBEjc9BZK7kPOarphamy8TkisF0k84CiUgT+S0skYKti8MW2tiFxRNEtGdex1aCAbyaNrWsl1Aj0h+XzC0mLnQ-mkNkjgyh8kBtbu3cAIakBhthMAO42RLykGjdQS1ij2xYlBIcy8cBhyjg0ROOE51xAlJWJiG6HV3KwnvQqM6sKsQvrztdAA92ZOAvx5izAkDpSGlz2DggPOYKEpBjKmW7dNW2iqKKcTVH0ogTtLFMWwCKIDKRTyoaRLMYMTBdzYdxaQODSZ8o7CIxIEjrgbSiqg7u+B1G4DM2hE0XGcBsAyNTMaAAF3HD5cAHIDlSXB1AhA97k04G0tmi5Ca9jQJYsIBG2lno48QcZtA6wzMCg0QgXjJhQELuZQzUGwAACPePuWcAcWwdkOAhBOBANyOx5jKMungTRQ6VE320GdJj-nNE2BMNdeBQXlFa1hQCbMEWjLJihKWOLCXfr9FsIqNESi1EcAPJFqIAQDwQDgF-cwUBgSEEQSgk6wX5jZezCFxgfkUsJxwBVr+ybqaEgJQ1nzTXEs5eqj4bwFo-CVGK5TaIURnSxEa-F5rSXcunTc+wWbV0lNf0gDwd4DsONDesL5rLa2WMLH+PVGbAXuPrEhAoLm8gdHDZWxhlLjr03Latb8abRXkwlnBP+uGpQ9kAwZOC1Qjcg1rq7hu9AsIdumXIDsH4YgChFDbeo4AOBahQE6CiPaIilAiaOj+dHxOYrkfhaT8nbSkxAdmMUfq-IGjyJ2O4OYXORCqM3DSaArNEDaL3CSJ6m2-byCUw5WoiExf2Fqp7P2yB3hiZ-GdLQ+QJk3YfCYaokBX07FKMo5R3h4b88qPUTRmiojjVFxFbw5R7rPQclAMz8gh3zUVE2Y9us3oNE4PSIydmYyXpHGOW9AbYed3gAjuAjBgDvzM6j6wR6WwnsqKApPlir0R-CjsRs6I74IjecgIkLMcRAdoFaWwCRwMGE4K6CA6QSAzwucGG0NEiQTAJI36lOx0T9FRNXxVMLjNGFuQad0NHNSOYH8YrvFigPqHsEPnwq--DIB79ELf1C2RD-hQtnvTP4aon+1UPlBIlto5bPYNogRCcOHLpB+-I5EMU5zFDNnubYYKM-xc+FN+W5Jnf-A-cuPtQAn-YAg2AeIDWEBaM0LEJAQIXgZDe+J3ehf8BwPpdTZPfeODECQIIDL9GiADIDUWG0Jhdgbmd0CdawfjQTODYTHANXcmSxKTTgGTUzUUfeCmFKQHbTLPDTUgLTSxTEXTIgfTFZQzGzGiSAOTDlEsAkKzDyVtY1O-A6cUM1fPFZXaW1EZN0R1IDCZa0W1WaKtAwo6JSetcSHaUwhpYdFYSAQwpSd-YwvQhpVjKg5wqw1MbjAkVvX5JjfQg6eBR1T3PRGiPNZMCI2FFtVkS6WmQHTtAnE6BgWKUVRIvAFKWAVFcOegeEaGRObI6-awbMMLKDUsGLfvMosoWQrkM-GcM2APGTK-JGI2OowEPhb6U8T2Jg4GS8GrFCKozgmomgco+o2YXob9b-F0czFosY6gCYro3qMQSohY0gMaUBRYuAZYxVH0XoP0BKMYMaYYjYjoiopEA45YJw3NYEPOEYufWoy4pVb4FEdY6o0gZcfBHY7MAMUWLJc4Zo1AOMbmPJXNaHFdYNeHHuOAAoN0XKFPGgHoW2BpS4dEcecxRgsvH8FE5INE+wdEG+NBOeTEp2bEokChCeKhU+BwVE4pdEhUGvTcVDMkrICkvOJvPcHDVBIxBpFIdAqDUYckp1UUIQszQnEoAMNoOoOMT+JnX4YoAMBolxNIETTxSUpU+gDwVkC0V5GkcUZ0D5TU5UiyZrGUkEgyJSYsH0G6BU+aRgc4EndaHgXNCnFsWYTcKgscODOBR-T0wzVwFk70jRX0zgsPRTORf0i0QMgFKie-MM+AEFZZeID0mMmaWCBI9RZvZ0cMlI6Mr030QzUlQtbHIYUM3M+AezeBRFQ8VItHOYXwRRXCNIaAGIMcYidydQgwf1TneGYsnXdgTESeHDLxWBTgnEZDK0J04k3oUQckMs9gbIV0N0qksYeQekes6wFIacjOFoSOEhTPYAFcuOI0ZOIldyfYeGICQ8ejawK8xgZsGQ4OQcx8caCRcEAcAAO8IkwlHgEm3mMIYBd24A+gMwOHoSVL6ESROBkRBMeQdwgqvJgtFIPmlj9EuH+FsC72TFERIDgFGm3TGAgAgCA2zFFXjRolLFgFTTYhh1XRj1DXQFsGyEDwQWQgPToF7Uwwb2ulgKaEzJnAPwME7SRmPwErghEqQgkvbGqmISkonAkU4DIRkrbF9G+FEAUuQkWVBA9yjwYvXVhMYG4AHFMnhOZn3QH1kieBWCJFzRUPRHOEFjVH2FeIRgn3sqjEfAAFokY7z4hlgShmw1imj+Qtg6hr1gBcQKdlhyhTkQ40goARN5Mq4YqKQFRHoGB0dErkrRQ3pOAvywQ0q4rLRnNAIwrcryY8APN81qBHo6jyQSlAUsRkdRRkzu0GAqDuS6CNxOr6FZhdwTKJEczodo9DKw0tAoCJNOL-Q3ZCgaJYwfYagvipqVwxd6AksoM-Y8B0tLFiBVqdjNx7psJ2MTBA9xICKDriDsD7pbIgIiDVwQp9qWZxp7i7DhYGk7B3wWTQqTMxFBMysRRuTxFnr6RQF3qRYb4noihyrgV3pahixixf5yFQbXqcgKB6LoTY9YTaAeA4NnRLLh5SzQ5rtYajA8BWC8MbFT5iaoaLDKgU1KaoAG0vhLVoJXZok1Ceyr0a5DxlJxwVD1DfImTC1fQvB6aOAzUUJvZtlmbDcA4IK4yplSgRBNBlF40gV2B6hEBjBNFU0UzqAy4lbXjNba545mJzACLt0rYILHD7ZYL38bbilHCb51Dl4fr-AzUj5ganbn9Gqvq1RGxdZAbtD65f8dgy4Xb1VbATrMSWYIBfyw7U5baK5plFUvAWxBzzB5k7k38lBZkntHaXYU7IMgyua15YLixIQtCk7RqDKYSw1bTUlOL30vB30MUf0oBn1cU4ReRbZz92kQFSiC0RB74ERi1EB35JyIo6onD2pEw6JRjYjDMlFEj8BOC1hwYLJ3AUR+hz9RpA98QJhh6ljaB5YFgBgO7KhTL+VJge79KsamK4AkdZ9CbhBRZRY3luZuYq8a8683km8W9l8aF5IGapdbCFFGioNgYDwkVOh6AVVek0g5EjD4HEGuJlFERx9NEGZFDhhdUl0dhMqslYUoN8q8lkwdjHo5RwMizhYNrno3pX6UIKYHJazCHrBqGEGIM9JfJrRURglma5EEMx0diPYNrhLKhtrdqgMPZsKxASMaQJQkZRymhrJ6AAB1GYjgZyPAAAdxiPcjmHnKg2gA3J2JMOWDkIFosbKCdxGQULorGobvQAwAJH-mmvn1svBsvJDCAk4EAxIjvhWEF2lm8FVQukqFXEsxMFuj5gUflkxWADomdgxrbmxgACoMmqAMn49kx4BJRL0shJNSLTAmJRQ6Qth8BlpiBdU6QpCMnsZ674AYB3hTjaBEB3h6BJ6qnDwL02AhAAAfTAfDRqUgIZuAPuDeCZn0CNbACZrdHdSQhZ1qqQuAYZhPbPNZ4Z8y3KCZli-+WkBQRBCZ4yuRQPXEXZ4BCZyal6j5CZ3G-GxOFZ1+iZtx8K+55pksNp0Ubpv2XHPpmAAAHgkAAD5ZB4pQB7UcB904AABtZyYAd4AALgIrqcnoAF1UWThhyoA4A79G44AAB+fFuAVFhQZmKEuHFpn5uAdwCUGBrpyYVACQH5kF8FtgMgZ7QgVFv53pogdlsmAgy8cltAcvOAei-jbMPyVFgh5AZmOASBVCCANqJ1dgJAZcgkNg0gVpsaSUL5k4CzZ9YGOlhlq-SxaNJg-AQaYgVF+l5vAkJlhkVlsaIF3V4AQprAXAMZ0FuFjF1uagdeAeO1s1j4egZll14AN1n5wpqZgeX1-1oQZwxFbAENh1sNiNtl91wp2Z-6xABNgNnTJZvdNNxl8N51rNmNneRZ89fC4Z7NneJu3EAtoQf3a6UyUtx18tllytvV6t1Zlt6gcU3ETtjNit11ht+PRPYQwdg+dCUdp1ntidqtuEhE4BWd50YENi45kABd7tyN6NvtuAA57dyeEAWd7qi521019Nxdg9yds50yy5td4gWd1G0Ba9+1stzN5do925sG5tv1wtiEJ5z90Nu93tj1neR5kixOWdph4Rvdn9qNydl+4R2dyXSvJD8dlDld95jxwDxN+ipg2ppQ2p7Dpd3Do9pHAPUyDl8gbl4AVFmj9t3EdmdHTHbwIVwIEVuAAAZgldbhI5aYZgACYKP72V2+WAXJD6OuWwSmO6A8bYPiB2Y41UQSaMMxBuPIEYBUWABWCVigYTsjmAPj3lnpmTy8IFjprpyz6py8ejmDgmtT2mqkKtZuIAA

// beurk...
export const getEnumName = (value: string): keyof Groceries | null => {
    if (Object.values(Condiments).includes(value as Condiments)) {
    return "condiments";
    } else if (Object.values(Viande).includes(value as Viande)) {
    return "viande";
    } else if (Object.values(Poisson).includes(value as Poisson)) {
    return "poisson";
    } else if (Object.values(Feculents).includes(value as Feculents) || Object.values(Pates).includes(value as Pates)) {
    return "féculents";
    } else if (Object.values(Fromages).includes(value as Fromages)) {
    return "fromages";
    } else if (Object.values(Legumes).includes(value as Legumes)) {
    return "légumes";
    } else if (Object.values(Divers).includes(value as Divers)) {
    return "misc";
    } else if (Object.values(Oleagineux).includes(value as Oleagineux)) {
    return "oléagineux";
    } else if (Object.values(LaitagesDivers).includes(value as LaitagesDivers)) {
    return "laitages";
    } else if (Object.values(Surgeles).includes(value as Surgeles)) {
    return "surgelés";
    } else if (Object.values(Alcools).includes(value as Alcools)) {
    return "alcools";
    } else if (Object.values(Fruits).includes(value as Fruits)) {
    return "fruits";
    } else if (Object.values(Cereales).includes(value as Cereales)) {
    return "graines"
    }
    return null; // Return null if the value does not belong to any enum
}