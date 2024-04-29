const products =[
    {
        id: 1,
        name: "Gorra 9Forty Los angeles Lakers",
        description: "Unisex",
        price: 45000,
        img: "https://media.newera.com.ar/catalog/product/cache/1ad54a7c70d71529bbc2090eee1c5ebb/g/o/gorra-new-era-los-angeles-lakers-9forty-aframe-w3t000227-1.jpg",
        stock:12,
    },
    {
        id: 2,
        name: "Remera Tussy 33",
        description: "Hombre",
        price: 35000,
        stock:10,
        img: "https://tussy.com.ar/wp-content/uploads/2022/11/REMERA-53-300x300.png",

    },
    {
        id: 3,
        name: "Vans Old Skool",
        description: "Unisex",
        price:150000,
        stock:8,
        img: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf6fc032f/products/VAVN000D3HY28/VAVN000D3HY28-1.JPG?sw=600&sh=600"
    },
    {
        id: 4,
        name: "Gorra 9Forty Los angeles",
        description: "Unisex",
        price: 45000,
        img: "https://media.newera.com.ar/catalog/product/cache/1ad54a7c70d71529bbc2090eee1c5ebb/1/0/10047531-gorra-new-era-los-angeles-dodgers-the-league-gm_ep44frfjy9kcac5w.jpg",
        stock:12,
    },
    {
        id: 5,
        name: "Remera Tussy Basic",
        description: "Hombre",
        price: 35000,
        stock:10,
        img: "https://tussy.com.ar/wp-content/uploads/2023/01/REMERA-67A-300x300.png",

    },
    {
        id: 6,
        name: "Nike Air Force",
        description: "Unisex",
        price:200000,
        stock:8,
        img: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbf569711/products/NI_CW2288-111/NI_CW2288-111-1.JPG?sw=600&sh=600"
    },
    {
        id: 7,
        name: "Gorra 9Forty Chicago Bulls",
        description: "Unisex",
        price: 45000,
        img: "https://media.newera.com.ar/catalog/product/cache/1ad54a7c70d71529bbc2090eee1c5ebb/1/1/11423439-gorra-new-era-chicago-bull-sthe-league-otc2-min.jpg",
        stock:12,
    },
    {
        id: 8,
        name: "Remera Tussy Arc",
        description: "Hombre",
        price: 35000,
        stock:10,
        img: "https://tussy.com.ar/wp-content/uploads/2022/03/REMERA-ARC-TUSSY-2-300x300.jpg",

    },
    {
        id: 9,
        name: "Jordan Retro 4",
        description: "Unisex",
        price:300000,
        stock:8,
        img: "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw166a7c9f/products/NIDH6927-161/NIDH6927-161-1.JPG?sw=600&sh=600"
    },
    ]
    
    export const GetProducts= () =>
    {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(products);
            },2000);
        });
    };