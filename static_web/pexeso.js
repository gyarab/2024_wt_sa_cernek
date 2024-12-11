let obrazky = [
    {src: 'https://scitec.cz/images/product_images/5146_6ad91ca8b447.webp'},
    {src: 'https://imagedelivery.net/v_g237akqysjqDvfyOsFkg/6dbd9979-fe63-4f67-10d5-8c29a5f9b900/public'},
    {src: 'https://maxxwin.cz/assets/images/product-small/277.jpg'},
    {src: 'https://static1.protein.sk/imgcache/100-whey-gold-standard-protein-optimum-nutrition-full-item-14585.jpg?v=1675802505'},
    {src: 'https://extrifit.s6.cdn-upgates.com/_cache/f/6/f66026c7ddf6332f145ec4dd340c076d-3018a23f-1c45-4f76-880b-14ca50cceb23.jpg'},
    {src: 'https://www.naturalprotein.cz/image/s/1920x1080/shrink/storage/gallery/9d/ae3675/original/1500x1500-np-www-protein-ryzovy.webp'},
    {src: 'https://www.bulldognutrition.ca/cdn/shop/files/Ghost-Whey-Protein-5-Cinnabon_1024x1024.jpg?v=1717009379'},
    {src: 'https://goodie.s23.cdn-upgates.com/g/g666704e76e1ad-syrovatkovy-protein-malina-bila-cokolada-1000-g.jpg'},
    {src: 'https://www.dafit.cz/userfiles/2d3003a4-a685-4e3e-928d-e0f401dcf3d6.jpg'},
    {src: 'https://cdn.myshoptet.com/usr/www.nejlevnejsiprotein.cz/user/shop/detail/8389-1_myprotein-impact-whey-protein-5000g-shaker.jpg?66c5b5f1'},
    {src: 'https://allnutrition.cz/produkt_img/baad2d59d96b9c7d75fc8f1684080c22Whey_Protein_i35335_d1200x1200.png'},
    {src: 'https://obchod.ronnie.cz/_v/d/zb12/13753-d39fa.jpg'},
    {src: 'https://shopbuilder.cz/images/product_images/2670_cd5b7970fae0.webp'},
    {src: 'https://cdn.myshoptet.com/usr/www.gf-nutrition.cz/user/shop/big/44-1_dwp-2000.jpg?657496c5'},
    {src: 'https://gymbeam.cz/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/j/u/just_whey_vanilla_icecream_1_kg_gymbeam_1.png'},
    {src: 'https://www.wefood.eu/katalog-obrazku/produkt-36/219-junior-protein-600g.png'},
    {src: 'https://cdn.myshoptet.com/usr/www.brainmarket.cz/user/shop/big/45831-20_lauf-protein-chocolate.jpg?65b947c1'},
    {src: 'https://www.amix-store.cz/files/products/AX-00152/AX-00152-2300g-2.jpg?1645158179'},
]
const cisla = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18]
let imgs = []
let vybraneImgs = []
let pocetClicku = 0
let pojistka = false
let timeout = 1000
let score = 0

function reset(){
    let aktualniPozice = cisla.length
  
    while (aktualniPozice != 0) {
  
      let nahodna = Math.floor(Math.random() * aktualniPozice)
      aktualniPozice--
  
      [cisla[aktualniPozice], cisla[nahodna]] = [
        cisla[nahodna], cisla[aktualniPozice]]
    }

    for(let i = 0; i < cisla.length; i++){
        let img = document.getElementById(i)

        if (img) {
            enableClick(img)
            imgs.push(img)
        }
    }

    hideAll()
    score = 0
    document.getElementById("score").innerHTML = score
}

function hideAll(){

    for(let img of imgs){
        img.src = "https://placehold.co/100x100"
    }

    vybraneImgs.pop()
    vybraneImgs.pop()
    pojistka = false
}

function enableClick(img){
    img.onclick = () => imgClick(img)
}

function disableClick(img){
    document.getElementById(img.id).onclick = null
}

function imgClick(img){
    if(pojistka === false){
        pocetClicku++
        img.src = obrazky[cisla[img.id]-1].src
        vybraneImgs.push(img)
        disableClick(img)
    }

    if(pocetClicku === 2){

        if(vybraneImgs[0].src === vybraneImgs[1].src){
            imgs = imgs.filter(img => img.id != vybraneImgs[0].id)
            imgs = imgs.filter(img => img.id != vybraneImgs[1].id)

            timeout = 0
            score++
            document.getElementById("score").innerHTML = score
        }else{
            enableClick(vybraneImgs[0])
            enableClick(vybraneImgs[1])
        }

        setTimeout(hideAll, timeout)
        timeout = 1000
        pocetClicku = 0
        pojistka = true
        
    }
}

function createImageGrid() {
    let container = document.getElementById("image-container")
    container.innerHTML = ""

    for (let i = 0; i < cisla.length; i++) {
        if (i % 6 === 0) {
            var row = document.createElement("div")
            row.className = "row"
            container.appendChild(row)
        }

        let col = document.createElement("div")
        col.className = "col-4 col-xl-2 mt-5"

        let img = document.createElement("img")
        img.id = i
        img.className = "button w-100"
        img.src = "https://placehold.co/100x100"
        img.alt = `Image ` + i
        img.style.height = "100px"
        img.style.width = "100px"
        
        col.appendChild(img)
        row.appendChild(col)
    }
    reset()
}

document.addEventListener("DOMContentLoaded", () => {
    createImageGrid();
});