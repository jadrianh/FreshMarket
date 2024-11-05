// products.js
const products = [
    {
        id: "01",
        image: '../assets/img/GUEST_95c6384a-7d40-4b61-8198-3d6a1598af5f.webp',
        name: "Fresas Organicas - 16oz",
        pricePerUnit: 4.89,
        category: "Frutas y Vegetales",
        rating: 4.5,
        quantity: 15,
        discount: 0
    },
    {
        id: "02",
        image: "../assets/img/GUEST_6d9d5f9f-7206-49c4-a381-6ba5a0c08504.webp",
        name: "Aguacate",
        pricePerUnit: 0.89,
        category: "Frutas y Vegetales",
        rating: 4.1,
        quantity: 20,
        discount: 0
    },
    {
        id: "03",
        image: "../assets/img/GUEST_8162d58e-0a2f-4aaf-88e8-a488bab34269.webp",
        name: "Bananas Orgánicas - 2lb",
        pricePerUnit: 1.99,
        category: "Frutas y Vegetales",
        rating: 4.0,
        quantity: 15,
        discount: 0
    },
    {
        id: "04",
        image: '../assets/img/GUEST_7dfb5982-541a-4c72-b731-ccd9b061da84.webp',
        name: "Sandía mini",
        pricePerUnit: 4.29,
        category: "Frutas y Vegetales",
        rating: 4.0,
        quantity: 8,
        discount: 0
    },
    {
        id: "05",
        image: '../assets/img/GUEST_31e44e71-4d8b-413c-b5bd-d5b36650098e.webp',
        name: "Blueberries - 11.2oz",
        pricePerUnit: 4.59,
        category: "Frutas y Vegetales",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "06",
        image: '../assets/img/GUEST_27ecaa50-cac2-49f8-9a9b-e59800e28d8a.webp',
        name: "Uvas verdes - 1.5lb",
        pricePerUnit: 4.29,
        category: "Frutas y Vegetales",
        rating: 4.5,
        quantity: 15,
        discount: 0
    },
    {
        id: "07",
        image: '../assets/img/GUEST_60229733-e225-4ef7-bd7f-b9d315977744.webp',
        name: "Melocotón",
        pricePerUnit: 1.29,
        category: "Frutas y Vegetales",
        rating: 4.2,
        quantity: 20,
        discount: 0
    },
    {
        id: "08",
        image: '../assets/img/GUEST_bc1ff7bf-9921-4ea6-b5cc-cf155b4062f5.webp',
        name: "Manzana Honeycrisp",
        pricePerUnit: 1.39,
        category: "Frutas y Vegetales",
        rating: 4.8,
        quantity: 20,
        discount: 0
    },
    {
        id: "09",
        image: '../assets/img/GUEST_7dfb5982-541a-4c72-b731-ccd9b061da84.webp',
        name: "Sandía mini",
        pricePerUnit: 4.29,
        category: "Frutas y Vegetales",
        rating: 4.0,
        quantity: 5,
        discount: 0
    },
//-----------------------------------------VEGETABLES-----------------------------------------------//
    {
        id: "10",
        image: '../assets/img/vegetables/broccoli.webp', 
        name: "Brócoli",
        pricePerUnit: 3.99,
        category: "Frutas y Vegetales",
        rating: 4.3,
        quantity: 20,
        discount: 0.2
    },
    {
        id: "11",
        image: '../assets/img/vegetables/Cauliflower Florets.webp', 
        name: "Coliflor",
        pricePerUnit: 2.49,
        category: "Frutas y Vegetales",
        rating: 4.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "12",
        image: '../assets/img/vegetables/Frozen Steam-in-bag Edamame.webp', 
        name: "Edamame",
        pricePerUnit: 1.99,
        category: "Frutas y Vegetales",
        rating: 3.99,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "13",
        image: '../assets/img/vegetables/miniCucumbers.webp', 
        name: "Mini Pepinillos",
        pricePerUnit: 1.99,
        category: "Frutas y Vegetales",
        rating: 4.3,
        quantity: 20,
        discount: 0
    },
    {
        id: "14",
        image: '../assets/img/vegetables/Premium Grape Tomatoes.webp', 
        name: "Tomate Cherri",
        pricePerUnit: 2.39,
        category: "Frutas y Vegetales",
        rating: 4.8,
        quantity: 20,
        discount: 0
    },
    {
        id: "15",
        image: '../assets/img/vegetables/romaineHeart.webp', 
        name: "Lechuga Romana",
        pricePerUnit: 3.29,
        category: "Frutas y Vegetales",
        rating: 4.2,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "16",
        image: '../assets/img/vegetables/Espinacas.webp', 
        name: "Champiñones en rodajas",
        pricePerUnit: 1.99,
        category: "Frutas y Vegetales",
        rating: 4.5,
        quantity: 20,
        discount: 0
    },
    {
        id: "17",
        image: '../assets/img/vegetables/tomatoes.webp', 
        name: "Tomates",
        pricePerUnit: 1.39,
        category: "Frutas y Vegetales",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },

    //-----------------------------------------MEATS-----------------------------------------------//
    {
        id: "18",
        image: '../assets/img/meats/beef Burger.webp', 
        name: "Carne para Hamburguesa",
        pricePerUnit: 7.99,
        category: "Carnes y Embutidos",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "19",
        image: '../assets/img/meats/beef steak.webp', 
        name: "Tiras de filete de res",
        pricePerUnit: 13.45,
        category: "Carnes y Embutidos",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },
    {
        id: "20",
        image: '../assets/img/meats/chicken breast.webp', 
        name: "Pechuga de pollo sin piel",
        pricePerUnit: 11.99,
        category: "Carnes y Embutidos",
        rating: 4.9,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "21",
        image: '../assets/img/meats/funNuggets.webp', 
        name: "Fun Nuggets",
        pricePerUnit: 6.99,
        category: "Carnes y Embutidos",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "22",
        image: '../assets/img/meats/ground beef.webp', 
        name: "Carne Molida",
        pricePerUnit: 7.59,
        category: "Carnes y Embutidos",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "23",
        image: '../assets/img/meats/pork Ribs.webp', 
        name: "Costilla de cerdo",
        pricePerUnit: 16.04,
        category: "Carnes y Embutidos",
        rating: 4.2,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "24",
        image: '../assets/img/meats/sirlonSteak.webp', 
        name: "Solomito de res",
        pricePerUnit: 30.22,
        category: "Carnes y Embutidos",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },
    {
        id: "25",
        image: '../assets/img/meats/steackHose.webp', 
        name: "Steakhouse",
        pricePerUnit: 8.99,
        category: "Carnes y Embutidos",
        rating: 4.2,
        quantity: 20,
        discount: 0
    },

    //-----------------------------------------SEAFOOD-----------------------------------------------//
    {
        id: "26",
        image: '../assets/img/seafood/salmon.webp', 
        name: "Salmon",
        pricePerUnit: 9.99,
        category: "Pescados y Mariscos",
        rating: 4.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "27",
        image: '../assets/img/seafood/salmonBurger.webp', 
        name: "Rodajas de salmons para hamburguesa",
        pricePerUnit: 9.99,
        category: "Pescados y Mariscos",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },
    {
        id: "28",
        image: '../assets/img/seafood/seaCuisine.webp', 
        name: "Ajo y Hierba Tilapia",
        pricePerUnit: 9.99,
        category: "Pescados y Mariscos",
        rating: 5.0,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "29",
        image: '../assets/img/seafood/sesameSalmon.webp', 
        name: "Salmón al sésamo",
        pricePerUnit: 9.99,
        category: "Pescados y Mariscos",
        rating: 4.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "30",
        image: '../assets/img/seafood/shrimp congelado.webp', 
        name: "Camaron congelado",
        pricePerUnit: 6.99,
        category: "Pescados y Mariscos",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "31",
        image: '../assets/img/seafood/shrimpInCrispy.webp', 
        name: "Camarones Empanizados",
        pricePerUnit: 6.99,
        category: "Pescados y Mariscos",
        rating: 5.0,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "32",
        image: '../assets/img/seafood/shrimpJumbo.webp', 
        name: "Camarones Jumbo",
        pricePerUnit: 9.99,
        category: "Pescados y Mariscos",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },
    {
        id: "33",
        image: '../assets/img/seafood/tuna.webp', 
        name: "Atun enlatado",
        pricePerUnit: 1.29,
        category: "Pescados y Mariscos",
        rating: 4.2,
        quantity: 20,
        discount: 0
    },

    //-----------------------------------------LACTOSE-----------------------------------------------//
    {
        id: "34",
        image: '../assets/img/lactose/lecheConVitamidaD.webp', 
        name: "Leche con Vitamida D",
        pricePerUnit: 3.49,
        category: "Productos Lacteos",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },
    {
        id: "35",
        image: '../assets/img/lactose/lecheDeAlmendra.webp', 
        name: "Leche de Almendra",
        pricePerUnit: 3.39,
        category: "Productos Lacteos",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "36",
        image: '../assets/img/lactose/lecheDeChocolate.webp', 
        name: "Leche con Chocolate",
        pricePerUnit: 4.49,
        category: "Productos Lacteos",
        rating: 5.0,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "37",
        image: '../assets/img/lactose/lecheDeCoco.webp', 
        name: "Leche de Coco",
        pricePerUnit: 1.99,
        category: "Productos Lacteos",
        rating: 4.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "38",
        image: '../assets/img/lactose/lecheDeslactosada.webp', 
        name: "Leche deslactosada",
        pricePerUnit: 4.49,
        category: "Productos Lacteos",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "39",
        image: '../assets/img/lactose/lecheEnteraDeslactosada.webp', 
        name: "Leche entera Deslactosada",
        pricePerUnit: 4.49,
        category: "Productos Lacteos",
        rating: 5.0,
        quantity: 20,
        discount: 0.1
    },
    {
        id: "40",
        image: '../assets/img/lactose/sorbeteDeVainilla.webp', 
        name: "Helado de Vainilla",
        pricePerUnit: 5.29,
        category: "Productos Lacteos",
        rating: 4.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "41",
        image: '../assets/img/lactose/yogurtGriego.webp', 
        name: "Yogurt Griego",
        pricePerUnit: 6.69,
        category: "Productos Lacteos",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },
//-----------------------------------------SPICES-----------------------------------------------//
    {
        id: "42",
        image: '../assets/img/spices/ajoMolido.webp', 
        name: "Ajo Molido",
        pricePerUnit: 0.99,
        category: "Hierbas y Especias",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    {
        id: "43",
        image: '../assets/img/spices/sazonadorItaliano.webp', 
        name: "Sazonador Italiano",
        pricePerUnit: 0.99,
        category: "Hierbas y Especias",
        rating: 4.7,
        quantity: 20,
        discount: 0
    },
    {
        id: "44",
        image: '../assets/img/spices/pimientaNegra.webp', 
        name: "Pimienta negra",
        pricePerUnit: 2.89,
        category: "Hierbas y Especias",
        rating: 4.2,
        quantity: 20,
        discount: 0
    },
    {
        id: "45",
        image: '../assets/img/spices/papikraMolida.webp', 
        name: "Paprika Molida",
        pricePerUnit: 0.99,
        category: "Hierbas y Especias",
        rating: 4.5,
        quantity: 20,
        discount: 0
    },
    {
        id: "46",
        image: '../assets/img/spices/salIonizada.webp', 
        name: "Sal Ionizada",
        pricePerUnit: 0.75,
        category: "Hierbas y Especias",
        rating: 3.8,
        quantity: 20,
        discount: 0
    },
    {
        id: "47",
        image: '../assets/img/spices/CebollaMolida.webp', 
        name: "Cebolla Molida",
        pricePerUnit: 0.99,
        category: "Hierbas y Especias",
        rating: 4.8,
        quantity: 20,
        discount: 0
    },
    {
        id: "48",
        image: '../assets/img/spices/cominoMolido.webp', 
        name: "Comino Molido",
        pricePerUnit: 0.99,
        category: "Hierbas y Especias",
        rating: 4.9,
        quantity: 20,
        discount: 0
    },
    {
        id: "49",
        image: '../assets/img/spices/chileenpolvo.webp', 
        name: "Chile en Polvo",
        pricePerUnit: 0.99,
        category: "Hierbas y Especias",
        rating: 4.3,
        quantity: 20,
        discount: 0
    },
    //-----------------------------------------Liquors-----------------------------------------------//
    {
        id: "50",
        image: '../assets/img/liquors/vodkatitos.webp', 
        name: "Vodka TITO'S",
        pricePerUnit: 31.99,
        category: "Licores",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    {
        id: "51",
        image: '../assets/img/liquors/vodkasmir.webp', 
        name: "Vodka Smirnoff",
        pricePerUnit: 15.99,
        category: "Licores",
        rating: 4.8,
        quantity: 20,
        discount: 0
    },
    {
        id: "52",
        image: '../assets/img/liquors/jackdaniels.webp', 
        name: "Jack Daniels No. 7 Tennessee Whiskey",
        pricePerUnit: 36.99,
        category: "Licores",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "53",
        image: '../assets/img/liquors/tequilaespo.webp', 
        name: "Tequila Espolón",
        pricePerUnit: 29.99,
        category: "Licores",
        rating: 4.7,
        quantity: 20,
        discount: 0
    },
    {
        id: "54",
        image: '../assets/img/liquors/smirchile.webp', 
        name: "Vodka Smirnoff Tamarindo",
        pricePerUnit: 15.99,
        category: "Licores",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "55",
        image: '../assets/img/liquors/irish.webp', 
        name: "Whiskey Jameson 3yr Irish ",
        pricePerUnit: 29.99,
        category: "Licores",
        rating: 4.8,
        quantity: 20,
        discount: 0
    },
    {
        id: "56",
        image: '../assets/img/liquors/tequilablanco.webp', 
        name: "Casamigos Blanco Tequila",
        pricePerUnit: 43.99,
        category: "Licores",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "57",
        image: '../assets/img/liquors/tequilaplata', 
        name: "Patrón Silver Tequila",
        pricePerUnit: 29.99,
        category: "Licores",
        rating: 4.8,
        quantity: 20,
        discount: 0
    },
    //-----------------------------------------Bakery-----------------------------------------------//
    {
        id: "58",
        image: '../assets/img/bakery/galletascho.webp', 
        name: "Galletas con chispas de chocolate",
        pricePerUnit: 26.99,
        category: "Panadería",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "59",
        image: '../assets/img/bakery/minidonas.webp', 
        name: "Mini Donas",
        pricePerUnit: 3.89,
        category: "Panadería",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "60",
        image: '../assets/img/bakery/rolesdecanela.webp', 
        name: "Roles de Canela",
        pricePerUnit: 4.99,
        category: "Panadería",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "61",
        image: '../assets/img/bakery/quesodanes.webp', 
        name: "Queso Danés",
        pricePerUnit: 4.49,
        category: "Panadería",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "62",
        image: '../assets/img/bakery/blueberr.webp', 
        name: "Mini bollos con trozos de chocolate blanco y arándanos",
        pricePerUnit: 54.99,
        category: "Panadería",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "63",
        image: '../assets/img/bakery/hallowengalleta.webp', 
        name: "Galletas de mantequilla de Hallowen",
        pricePerUnit: 13.99,
        category: "Panadería",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "64",
        image: '../assets/img/bakery/mofin.webp', 
        name: "Variedad de muffins de pastel de café con streusel de arándanos y canela",
        pricePerUnit: 3.99,
        category: "Panadería",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "65",
        image: '../assets/img/bakery/scones.webp', 
        name: "Mini bollos de naranja y arándanos",
        pricePerUnit: 4.99,
        category: "Panadería",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    //-----------------------------------------CANNED-----------------------------------------------//
    {
        id: "66",
        image: '../assets/img/canned/cocadiet.webp', 
        name: "CocaCola dietetica",
        pricePerUnit: 7.99,
        category: "Enlatados",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    {
        id: "67",
        image: '../assets/img/canned/cocacola.webp', 
        name: "Coca-Cola Original",
        pricePerUnit: 7.99,
        category: "Enlatados",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "68",
        image: '../assets/img/canned/sprite.webp', 
        name: "Sprite en lata",
        pricePerUnit: 7.99,
        category: "Enlatados",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "69",
        image: '../assets/img/canned/olipop.webp', 
        name: "Soda Prebiótica Olipop Fresa Vainilla",
        pricePerUnit: 8.99,
        category: "Enlatados",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "70",
        image: '../assets/img/canned/olipopuva.webp', 
        name: "Soda Prebiótica Olipop Uva",
        pricePerUnit: 8.99,
        category: "Enlatados",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "71",
        image: '../assets/img/canned/drpepper.webp', 
        name: "Soda Dr Pepper",
        pricePerUnit: 7.49,
        category: "Enlatados",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "72",
        image: '../assets/img/canned/sunsip.webp', 
        name: "Health-Ade SunSip refresco de vainilla y fresa con beneficios",
        pricePerUnit: 2.49,
        category: "Enlatados",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "73",
        image: '../assets/img/canned/cocazero.webp', 
        name: "Coca-cola Zero",
        pricePerUnit: 7.99,
        category: "Enlatados",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    //-----------------------------------------snacks-----------------------------------------------//
    {
        id: "74",
        image: '../assets/img/snacks/fritolay.webp', 
        name: "Paquete Variedad Frito Lay",
        pricePerUnit: 9.99,
        category: "Snacks y Dulceria",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    {
        id: "75",
        image: '../assets/img/snacks/veggie.webp', 
        name: "Sensible Portions Garden Veggie Straws Sea Salt",
        pricePerUnit: 5.49,
        category: "Snacks y Dulceria",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "76",
        image: '../assets/img/snacks/pringles.webp', 
        name: "Paquete Pringles",
        pricePerUnit: 10.69,
        category: "Snacks y Dulceria",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "77",
        image: '../assets/img/snacks/baked.webp', 
        name: "Paquete variado Frito-Lay mezcla horneada y reventada",
        pricePerUnit: 9.99,
        category: "Snacks y Dulceria",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "78",
        image: '../assets/img/snacks/fritopak.webp', 
        name: "Mezcla de sabores del paquete variado Frito-Lay",
        pricePerUnit: 9.99,
        category: "Snacks y Dulceria",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "79",
        image: '../assets/img/snacks/bbq.webp', 
        name: "Pringles BBQ",
        pricePerUnit: 2.39,
        category: "Snacks y Dulceria",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "80",
        image: '../assets/img/snacks/ajo y crema.webp', 
        name: "Pringles cebolla y crema",
        pricePerUnit: 2.39,
        category: "Snacks y Dulceria",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "81",
        image: '../assets/img/snacks/organic.webp', 
        name: "Totopos Organicos",
        pricePerUnit: 3.99,
        category: "Snacks y Dulceria",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    //-----------------------------------------beverages-----------------------------------------------//
    {
        id: "82",
        image: '../assets/img/beverages/awa.webp', 
        name: "Agua Purificada",
        pricePerUnit: 1.29,
        category: "Bebidas",
        rating: 5,
        quantity: 20,
        discount: 0
    },
    {
        id: "83",
        image: '../assets/img/beverages/awades.webp', 
        name: "Agua Destilada",
        pricePerUnit: 1.39,
        category: "Bebidas",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "84",
        image: '../assets/img/beverages/lemonade.webp', 
        name: "Limonada Simple",
        pricePerUnit: 2.99,
        category: "Bebidas",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "85",
        image: '../assets/img/beverages/pakawa.webp', 
        name: "Paquete Agua purificada",
        pricePerUnit: 3.59,
        category: "Bebidas",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "86",
        image: '../assets/img/beverages/orange.webp', 
        name: "Jugo de Naranja",
        pricePerUnit: 4.29,
        category: "Bebidas",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "87",
        image: '../assets/img/beverages/apple.webp', 
        name: "Jugo de manzana",
        pricePerUnit: 1.99,
        category: "Bebidas",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "88",
        image: '../assets/img/beverages/capri.webp', 
        name: "Caprisun",
        pricePerUnit: 3.19,
        category: "Bebidas",
        rating: 5.0,
        quantity: 20,
        discount: 0
    },
    {
        id: "89",
        image: '../assets/img/beverages/raperry.webp', 
        name: "Juego de limon con frambuesa",
        pricePerUnit: 2.99,
        category: "Bebidas",
        rating: 5,
        quantity: 20,
        discount: 0
    }
];

function getDiscountedPrice(product) {
    return product.discount > 0 
        ? (product.pricePerUnit * (1 - product.discount)).toFixed(2) 
        : product.pricePerUnit.toFixed(2);
}

function getProductById(productId) {
    return products.find(product => product.id === productId);
}
