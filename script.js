// ==========================================
// 1. BANCO DE DADOS INTEGRAL (ATUALIZADO)
// ==========================================
const database = [
    // POTES
    { id: 1, cat: 'potes', nome: 'Pote Trufatto 1L', preco: 35.00, desc: 'Sorvete de ninho amigo, mesclado com trufa de chocolate.', image: 'img/pote-trufatto.png' },
    { id: 2, cat: 'potes', nome: 'Pote Chocolate Belga 1L', preco: 35.00, desc: 'Sorvete nobre de chocolate belga, mesclado com creme leitissimo.', image: 'img/pote-belga.png' },
    { id: 4, cat: 'potes', nome: 'Pote Ninho com Avelã 1,5L', preco: 36.00, desc: 'Sorvete de ninho e chocolate avelã', image: 'img/pote-ninho-avela.png' },
    { id: 6, cat: 'potes', nome: 'Pote Leite Condensado 1,5L', preco: 27.00, desc: 'Sorvete sabor leite condensado com morango.', image: 'img/pote-leite-condensado.png' },
    { id: 7, cat: 'potes', nome: 'Pote Napolitano 1,8L', preco: 33.00, desc: 'Sorvete sabor chocolate, creme e morango.', image: 'img/pote-napolitano.png' },
    { id: 8, cat: 'potes', nome: 'Pote Ninho 1L', preco: 22.00, desc: 'Sorvete de ninho.', image: 'img/pote-ninho-1l.png' },
    { id: 9, cat: 'potes', nome: 'Pote Flocos 1,5L', preco: 31.00, desc: 'Sorvete de creme com flocos de chocolate.', image: 'img/pote-flocos.png' },
    { id: 10, cat: 'potes', nome: 'Pote Chocolate Branco 1,5L', preco: 31.00, desc: 'Sorvete de chocolate branco com pedaços de chocolate ao leite.', image: 'img/pote-choc-branco.png' },
    { id: 11, cat: 'potes', nome: 'Pote Abacaxi 1,5L', preco: 32.00, desc: 'Sorvete sabor abacaxi com cobertura de caramelo.', image: 'img/pote-abacaxi.png' },
    { id: 12, cat: 'potes', nome: 'Pote Mousse de Maracujá 1,5L', preco: 32.00, desc: 'Sorvete sabor mousse de maracujá.', image: 'img/pote-maracuja.png' },
    { id: 13, cat: 'potes', nome: 'Pote Açaí Puro 1,5L', preco: 50.00, desc: 'Açaí puro, sem corantes.', image: 'img/pote-acai-puro.png' },
    { id: 14, cat: 'potes', nome: 'Pote Açaí com Cupuaçu 1L', preco: 35.00, desc: 'Açaí mescladocom creme de cupuaçu.', image: 'img/pote-acai-cupuacu.png' },
    { id: 15, cat: 'potes', nome: 'Açaí Puro 240ml', preco: 12.00, desc: 'Açaí puro, sem corantes.', image: 'img/pote-acai-240.png' },
    { id: 20, cat: 'potes', nome: 'Pote de Chocolate Branco 240ml', preco: 12.00, desc: 'Sorvete de chocolate branco com calda de chocolate', image: 'img/pote-branco-240.png'},
    { id: 17, cat: 'potes', nome: 'Pote Açaí Zero 240ml', preco: 15.00, desc: 'Açaí puro sem adição de açúcar.', image: 'img/pote-acai-zero.png' },
    { id: 18, cat: 'potes', nome: 'Pote Morango Zero 240ml', preco: 15.00, desc: 'Sorvete sabor de morango com recheio de morango sem adição de açúcar.', image: 'img/morango-zero.png' },
    { id: 19, cat: 'potes', nome: 'Pote Chocolate Zero 240ml', preco: 15.00, desc: 'Sorvete sabor chocolate com recheio de trufa de chocolate sem adição de açúcar.', image: 'img/choc-zero.png' },

    // PICOLÉS
    { id: 121, cat: 'picoles', nome: 'Açaí Amigo', preco: 2.50, desc: 'O queridinho da galera, perfeito para uma dose extra de energia.', image: 'img/acai-70ml.png' },
    { id: 122, cat: 'picoles', nome: 'Caixa de Açaí Amigo - 12unid.', preco: 25.00, desc: 'Caixa com 12 açaízinhos para refrescar e dar energia.', image: 'img/caixa70ml.png' },
    { id: 100, cat: 'picoles', nome: 'Picolé Limão', preco: 5.00, desc: 'Picolé sabor limão.', image: 'img/picole-limao.png' },
    { id: 101, cat: 'picoles', nome: 'Picolé Uva', preco: 5.00, desc: 'Picolé sabor uva.', image: 'img/picole-uva.png' },
    { id: 102, cat: 'picoles', nome: 'Picolé Napolitano', preco: 5.00, desc: 'Picolé sabor de leite condensado e morango com cobertura de chocolate ao leite.', image: 'img/picole-napolitano.png' },
    { id: 103, cat: 'picoles', nome: 'Picolé Groselha', preco: 5.00, desc: 'Picolé sabor groselha.', image: 'img/picole-groselha.png' },
    { id: 104, cat: 'picoles', nome: 'Picolé Morango Cremoso', preco: 6.00, desc: 'Picolé sabor morango com recheio de morango.', image: 'img/picole-morango.png' },
    { id: 105, cat: 'picoles', nome: 'Picolé Chocolate', preco: 6.00, desc: 'Picolé de chocolate.', image: 'img/picole-chocolate.png' },
    { id: 106, cat: 'picoles', nome: 'Picolé Milho', preco: 6.00, desc: 'Picolé sabor milho com recheio de pamonha doce.', image: 'img/picole-milho.png' },
    { id: 107, cat: 'picoles', nome: 'Picolé Mousse Maracujá', preco: 6.00, desc: 'Picolé sabor mousse de maracujá com recheio de creme de maracujá.', image: 'img/picole-maracuja.png' },
    { id: 108, cat: 'picoles', nome: 'Picolé Ninho', preco: 6.00, desc: 'Picolé de leite.', image: 'img/picole-ninho.png' },
    { id: 109, cat: 'picoles', nome: 'Picolé Coco', preco: 6.00, desc: 'Picolé sabor coco.', image: 'img/picole-coco.png' },
    { id: 110, cat: 'picoles', nome: 'Picolé Graviola', preco: 6.00, desc: 'Picolé sabor graviola.', image: 'img/picole-graviola.png' },
    { id: 123, cat: 'picoles', nome: 'Picolé Morango Silvestre', preco: 6.00, desc: 'Picolé sabor morango silvestre.', image: 'img/picole-morango-sil.png' },
    { id: 111, cat: 'picoles', nome: 'Picolé Açaí com Ninho', preco: 7.00, desc: 'Picolé de açaí com recheio de ninho amigo.', image: 'img/picole-acai-ninho.png' },
    { id: 112, cat: 'picoles', nome: 'Picolé Morango Zero Açúcar', preco: 7.00, desc: 'Picolé sabor morango com recheio de morangosem adição de açúcar.', image: 'img/picole-morango-zero.png' },
    { id: 113, cat: 'picoles', nome: 'Picolé Pinta Língua', preco: 4.50, desc: 'Picolé sabor tutti frutti.', image: 'img/picole-pinta-lingua.png' },
    { id: 114, cat: 'picoles', nome: 'Picolé Ninho Trufado', preco: 9.00, desc: 'Picolé de ninho com recheio de chocolate meio amargo com casquinha.', image: 'img/picole-ninho-trufado.png' },
    { id: 119, cat: 'picoles', nome: 'Picolé Supremo', preco: 9.00, desc: 'Picolé sabor quatro leites recheado com chocolate ao leite, com cobertura de chocolate branco e flocos crocantes.', image: 'img/picole-supremo.png' },
    { id: 115, cat: 'picoles', nome: 'Picolé Maracujá Trufado', preco: 9.00, desc: 'Picolé sabor maracujá com recheio de chocolate e cobertura de chocolate ao leite.', image: 'img/picole-maracuja-trufado.png' },
    { id: 116, cat: 'picoles', nome: 'Picolé Brigadeiro', preco: 8.00, desc: 'Picolé sabor chocolate com cobertura de chocolate ao leite e granulado de chocolate.', image: 'img/picole-brigadeiro.png' },
    { id: 117, cat: 'picoles', nome: 'Paleta Ninho com Ovomaltine', preco: 12.00, desc: 'Paleta sabor ninho com recheio de ovomaltine.', image: 'img/paleta-ninho.png' },
    { id: 118, cat: 'picoles', nome: 'Paleta Croquito', preco: 12.00, desc: 'Picolé de caramelo com cobertura de chocolate ao leite e flocos crocantes.', image: 'img/paleta-croquito.png' },
    { id: 120, cat: 'picoles', nome: 'Picolé Pistache Supremo', preco: 15.00, desc: 'Picolé sabor pistache com calda e pedaços de pistache.', image: 'img/picole-pistache.png' },
    { id: 124, cat: 'picoles', nome: 'Picolé BomBom de Amendoim', preco: 9.00, desc: 'picolé sabor doce de leite com cobertura de amendoim e calda de chocolate branco com amendoim em pedaços.', image: 'img/picole-bom-amendoim.png' },
    { id: 125, cat: 'picoles', nome: 'Picolé Unicórnio', preco: 7.00, desc: 'picolé de blue ice e chicetes com cobertura de chocolate branco e granulado colorido', image: 'img/picole-unicornio.png' },
    { id: 126, cat: 'picoles', nome: 'Picolé Jabuticaba', preco: 5.00, desc: 'picolé sabor jabuticaba', image: 'img/picole-jabuticaba.png' },

    // AÇAÍS
    { id: 200, cat: 'acai', nome: 'Açaí Calor', preco: 0, desc: 'Açaí amigo com camadas de Granola, Salada de Frutas, Leite em Pó.', image: 'img/acai-calor.png', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 201, cat: 'acai', nome: 'Açaí União', preco: 0, desc: 'Açaí amigo com camadas de Creme Ninho, Mousse Morango, Creme Avelã.', image: 'img/acai-uniao.png', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 202, cat: 'acai', nome: 'Açaí Companhia', preco: 0, desc: 'Açaí amigo com camadas de Creme Avelã, Creme Ninho, Gotas Chocolate.', image: 'img/acai-companhia.png', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 203, cat: 'acai', nome: 'Açaí Abraço (tradicional)', preco: 0, desc: 'Açaí amigo com camadas de Banana, Leite em Pó, Leite Condensado.', image: 'img/acai-abraco.png', complexOptions: true, tamanhos: { '330ml': 18.00, '440ml': 20.00, '550ml': 22.00 } },
    { id: 204, cat: 'acai', nome: 'Açaí Alegria', preco: 0, desc: 'Açaí amigo com camadas de Leite em Pó e Creme Avelã.', image: 'img/acai-alegria.png', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 205, cat: 'acai', nome: 'Açaí Amor 480ml', preco: 26.00, desc: 'Açaí amigo com pedaços de Frutas da época, Leite em pó e leite condensado.', image: 'img/acai-amor.png' },
    { id: 206, cat: 'acai', nome: 'Açaí Aventura 450ml', preco: 32.00, desc: 'Açaí amigo com pedaços de Bombom, leite em pó, e um Picolé Premium.', image: 'img/acai-aventura.png' },
    { id: 207, cat: 'acai', nome: 'Açaí 750ml', preco: 28.00, desc: 'Açaí amigo com camadas de Banana, Leite em Pó, Leite Condensado.', image: 'img/acai750.png' },
    { id: 208, cat: 'acai', nome: 'Açaí 1000ml', preco: 38.00, desc: 'Açaí amigo com camadas de Banana, Leite em Pó, Leite Condensado.', image: 'img/acai1000.png' },

    // MILKSHAKES
    { id: 300, cat: 'shakes', nome: 'Milk Shake Amigo', preco: 0, desc: 'Escolha até 2 Sabores do Self-Service + Cobertura.', image: 'img/shake-imaginario.png', complexOptions: true, selfServiceFlavors: true, tamanhos: { '330ml': 18.00, '440ml': 19.00, '550ml': 21.00 } },
    { id: 301, cat: 'shakes', nome: 'Shake Afeto', preco: 0, desc: 'Milk Shake de sorvete Café com Creme Avelã e Café Solúvel.', image: 'img/shake-afeto.png', complexOptions: true, tamanhos: { '330ml': 21.00, '440ml': 23.00 } },
    { id: 302, cat: 'shakes', nome: 'Shake Festa', preco: 0, desc: 'Milk Shake de sorvete Ninho com Geleia Morango e Leite em Pó.', image: 'img/shake-festa.png', complexOptions: true, tamanhos: { '330ml': 21.00, '440ml': 23.00 } },
    { id: 303, cat: 'shakes', nome: 'Shake Recreio', preco: 0, desc: 'Milk Shake de sorvete Ninho com Leite em Pó e Creme Avelã.', image: 'img/shake-recreio.png', complexOptions: true, tamanhos: { '330ml': 21.00, '440ml': 23.00 } },
    { id: 304, cat: 'shakes', nome: 'Shake Energia', preco: 0, desc: 'Milk Shake de sorvete Kinderovo com flocos de Ovomaltine, Creme Avelã e Leite em pó.', image: 'img/shake-energia.png', complexOptions: true, tamanhos: { '330ml': 21.00, '440ml': 23.00 } },

    // TAÇAS
    { id: 400, cat: 'tacas', nome: 'Aconchego', preco: 25.00, desc: 'irresistível bolinho quente de chocolate com recheio cremoso, sorvete de creme, pedaços de fruta da época, canudo tub hall e cobertura de chocolate.', image: 'img/taca-aconchego.png' },
    { id: 306, cat: 'tacas', nome: 'Taça Carinho 400ml', preco: 21.00, desc: 'Sorvete de Ninho e Morango, acompanhado de geleia de morango e fruta da época.', image: 'img/taca-carinho.png' },

    // OUTROS
    { id: 500, cat: 'outros', nome: 'Cascão', preco: 1.00, desc: 'Crocante.', image: 'img/cascao.png' },
    { id: 501, cat: 'outros', nome: 'Cestinha', preco: 1.00, desc: 'Crocante.', image: 'img/cestinha.png' },
    { id: 307, cat: 'outros', nome: 'Água Mineral 500ml', preco: 3.00, desc: 'Água Mineral 500ml.', image: 'img/agua-mineral.png' },
    { id: 308, cat: 'outros', nome: 'Água com Gás 500ml', preco: 4.00, desc: 'Água com Gás 500ml.', image: 'img/agua-com-gas.png' },
    { id: 309, cat: 'outros', nome: 'Coca-Cola Lata', preco: 7.00, desc: 'Coca 350ml.', image: 'img/coca-lata.png' },
    { id: 310, cat: 'outros', nome: 'Coca-Cola Lata Zero', preco: 7.00, desc: 'Coca zero 350ml.', image: 'img/coca-zero-lata.png' },

    // COBERTURAS (PRODUTO ÚNICO)
    { id: 600, cat: 'coberturas', nome: 'Coberturas & Caldas', preco: 2.00, desc: 'Escolha o sabor desejado e o valor (a partir de R$ 2,00 em números inteiros).', image: 'img/cobertura-morango.png', isCoberturaUnica: true },

    // SELF-SERVICE
    { id: 700, cat: 'selfservice', nome: 'Self-Service Monte o Seu', preco: 0, desc: 'Self-service a R$ 74,90/kg. Monte por valor fixo (mínimo R$ 15,00) ou quantidade de bolas.', image: 'img/selfservice-banner.png', isSelfService: true }
];

// SABORES DO SELF-SERVICE (ORDEM ALFABÉTICA)
const selfServiceSabores = [
    "abacaxi", "amendoim", "açaí", "açaí c/ ninho", "açaí trufado", "açaí zero",
    "banana famblada", "blue ice", "cafe holandes", "chicletes", "chocolate",
    "chocolate belga", "chocolate c/ cafe", "chocolate branco", "chocomenta",
    "coco", "coco c/ avela zero", "creme", "creme de cupuaçu", "danoninho",
    "doce de leite", "ferreiro rocher zero", "flocos italiano", "frutas do bosque",
    "frutas tropicais", "jabuticaba", "kinder ovo", "kitkat", "limão galego",
    "maltine", "maracuja", "morango milk", "morango natural", "morango zero",
    "mousse de maracuja", "ninho", "ninho c/ frutas silvestres", "ninho c/ nutella",
    "ninho c/ tangerina e pimenta", "ninho trufado", "ninho trufado zero",
    "oreo", "pistache", "queijo c/ goiabada", "super black", "tapioca",
    "torta de limão", "unicornio"
];

// COMPLEMENTOS DO SELF-SERVICE DIVIDIDOS EM 3 GRUPOS E EM ORDEM ALFABÉTICA
const selfServiceComplementosDivisao = {
    coberturas: [
        "abacaxi", "blue ice", "caramelo", "chicletes", "chocolate",
        "leite condensado", "limão", "maraculá", "morango", "uva"
    ],
    caldas: [
        "calda de chocolate quente",
        "calda de chocolate branco"
    ],
    cremesEOutros: [
        "canudinho wafe", "cereja", "chocoball", "creme de avelã",
        "creme de bombom", "disquete", "flocos de arroz", "geleia de maracujá",
        "geleia de morango", "gotas de chocolate", "granola", "granulado chocolate",
        "granulado colorido", "jujuba", "leite em pó", "raspas de chocolate"
    ]
};

// OPCIONAIS DE COBERTURA/CALDA DO PRODUTO ÚNICO
const listaOpcoesCoberturaUnica = [
    "abacaxi", "blue ice", "caramelo", "chicletes", "chocolate",
    "leite condensado", "limão", "maraculá", "morango", "uva",
    "calda de chocolate quente"
];

// ADICIONAIS GERAIS PARA AÇAÍS E MILKSHAKES
const adicionaisList = [
    { nome: 'Amendoim', preco: 3.00, image: 'img/amendoim.png' },
    { nome: 'Banana', preco: 3.00, image: 'img/banana.png' },
    { nome: 'Biz', preco: 3.00, image: 'img/bis.png' },
    { nome: 'Biscoito Oreo', preco: 3.00, image: 'img/oreo.png' },
    { nome: 'Cobertura de Chocolate', preco: 3.00, image: 'img/calda-chocolate.png' },
    { nome: 'Cereja', preco: 4.00, image: 'img/cereja.png' },
    { nome: 'Chantilly', preco: 4.00, image: 'img/chantilly.png' },
    { nome: 'Chocoball', preco: 3.00, image: 'img/chocoball.png' },
    { nome: 'Creme de Avelã', preco: 5.00, image: 'img/creme-avela.png' },
    { nome: 'Creme de Bombom', preco: 4.00, image: 'img/creme-bombom.png' },
    { nome: 'Creme de Ninho', preco: 3.00, image: 'img/creme-ninho.png' },
    { nome: 'Disquete', preco: 3.00, image: 'img/disquete.png' },
    { nome: 'Geleia de Maracujá', preco: 4.00, image: 'img/geleia-maracuja.png' },
    { nome: 'Geleia de Morango', preco: 4.00, image: 'img/geleia-morango.png' },
    { nome: 'Gotas de Chocolate', preco: 3.00, image: 'img/gotas-chocolate.png' },
    { nome: 'Granola', preco: 3.00, image: 'img/granola.png' },
    { nome: 'Granulado Colorido', preco: 3.00, image: 'img/granulado-colorido.png' },
    { nome: 'Granulado Normal', preco: 3.00, image: 'img/granulado.png' },
    { nome: 'Jujuba', preco: 3.00, image: 'img/jujuba.png' },
    { nome: 'Kiwi', preco: 4.00, image: 'img/kiwi.png' },
    { nome: 'Leite Condensado', preco: 3.00, image: 'img/leite-condensado.png' },
    { nome: 'Leite em Pó', preco: 3.00, image: 'img/leite-po.png' },
    { nome: 'Morango', preco: 3.00, image: 'img/morango.png' },
    { nome: 'Mousse de Morango', preco: 3.00, image: 'img/mousse-morango.png' },
    { nome: 'Paçoca', preco: 3.00, image: 'img/pacoca.png' },
    { nome: 'Salada de Frutas', preco: 4.00, image: 'img/salada-frutas.png' }
];

// VARIÁVEIS GLOBAIS DE ESTADO
let cart = [];
let currentItemWithOptions = null;
let currentQty = 1;
let bolasSelfServiceState = {};

// NAVEGAÇÃO ENTRE PÁGINAS DO SITE
function showPage(pageId, categoryToLoad = 'potes') {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const cartBtn = document.getElementById('cart-fixed-circular');
    
    if (pageId === 'cardapio-page') {
        filterMenu(categoryToLoad);
        if (cartBtn) cartBtn.style.display = 'flex';
    } 
    else if (pageId === 'horarios-page') {
        verificarStatusLoja();
        rodarBanner();
        if (cartBtn) cartBtn.style.display = 'none';
    } 
    else {
        if (cartBtn) cartBtn.style.display = 'none';
    }
    
    window.scrollTo(0, 0);
}

// FILTRAGEM DE CATEGORIAS NO CARDÁPIO
function filterMenu(category) {
    const listContainer = document.getElementById('product-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const tabs = document.querySelectorAll('.category-tabs button');
    tabs.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.style.backgroundColor = '#587e69';
        } else {
            btn.style.backgroundColor = '#ed3237';
        }
    });

    const products = database.filter(item => item.cat === category);
    
    products.forEach(p => {
        let precoTexto = "";
        if (p.isSelfService) {
            precoTexto = "Self-Service (R$ 74,90/kg)";
        } else if (p.isCoberturaUnica) {
            precoTexto = "A partir de R$ 2,00";
        } else if (p.complexOptions) {
            precoTexto = `A partir de R$ ${Math.min(...Object.values(p.tamanhos)).toFixed(2)}`;
        } else {
            precoTexto = `R$ ${p.preco.toFixed(2)}`;
        }
        
        const div = document.createElement('div');
        div.className = 'product-item';
        
        div.innerHTML = `
            <div class="product-content-wrapper" style="display: flex; align-items: center; width: 100%; gap: 15px;">
                ${p.image ? `<img src="${p.image}" alt="${p.nome}" style="width: 70px; height: 70px; object-fit: contain; border-radius: 8px; background: #fff;">` : ''}
                
                <div class="product-info" style="flex: 1;">
                    <h4 style="margin: 0; font-size: 16px;">${p.nome}</h4>
                    <p style="margin: 3px 0; font-size: 12px; color: #666;">${p.desc}</p>
                    <span class="product-price" style="font-weight: bold; color: #ed3237;">${precoTexto}</span>
                </div>

                <button class="btn-add" 
                        onclick="openOptionsModal(${p.id}); event.stopPropagation();" 
                        style="background: #28a745; color: white; border: none; border-radius: 50%; width: 35px; height: 35px; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                    +
                </button>
            </div>
        `;
        
        div.onclick = () => openOptionsModal(p.id);
        listContainer.appendChild(div);
    });
}

// ==========================================
// 2. MODAL DE SELEÇÃO E OPÇÕES DO PRODUTO
// ==========================================
function openOptionsModal(id) {
    const prod = database.find(p => p.id === id);
    if (!prod) return;

    currentItemWithOptions = prod;
    currentQty = 1;

    const modal = document.getElementById('product-options-modal');
    const detailsArea = document.getElementById('product-details-area');
    if (!modal || !detailsArea) return;

    let modalHTML = `
        <div style="text-align:center;">
            ${prod.image ? `<img src="${prod.image}" alt="${prod.nome}" style="width:100%; max-height:180px; object-fit:contain; border-radius:10px; margin-bottom:12px; background:#fdf6e3;">` : ''}
            <h3>${prod.nome}</h3>
            <p style="font-size:13px; color:#666; margin-bottom:10px;">${prod.desc}</p>
        </div>
        <hr style="border:0; border-top:1px solid #eee; margin:12px 0;">
    `;

    // --- MODO COBERTURAS & CALDAS (PRODUTO ÚNICO DE COBERTURA) ---
    if (prod.isCoberturaUnica) {
        modalHTML += `
            <div style="margin-bottom:12px;">
                <label style="font-weight:bold; display:block; margin-bottom:5px;">Escolha o Sabor da Cobertura / Calda:</label>
                <select id="cob-sabor-select" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ccc; font-size:14px;">
                    ${listaOpcoesCoberturaUnica.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <div style="margin-bottom:12px;">
                <label style="font-weight:bold; display:block; margin-bottom:5px;">Digite o valor em R$ (Mínimo R$ 2,00):</label>
                <input type="number" id="cob-valor-input" min="2" step="1" value="2" onchange="validarValorCobertura(this)" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:6px; font-size:16px;">
            </div>
            <h4 style="margin-top:12px; font-size:14px;">Observações:</h4>
            <textarea id="opt-obs" style="width:100%; height:55px; border-radius:6px; border:1px solid #ccc; padding:8px; font-family:inherit; font-size:13px;" placeholder="Ex: Caprichar na calda..."></textarea>
        `;
    }
    // --- MODO SELF-SERVICE (R$ 74,90/kg) ---
    else if (prod.isSelfService) {
        modalHTML += `
            <div style="background:#fff3cd; border:1px solid #ffeeba; color:#856404; padding:10px; border-radius:8px; font-size:13px; margin-bottom:12px;">
                🍦 <strong>Self-Service - R$ 74,90/kg</strong><br>
                Monte por Valor Fixo (mínimo R$ 15,00) ou por quantidade de bolas.
            </div>

            <div style="margin-bottom:12px;">
                <label style="font-weight:bold; display:block; margin-bottom:6px;">Tipo de Escolha:</label>
                <select id="self-tipo-escolha" onchange="toggleModoSelfServiceUI()" style="width:100%; padding:10px; border-radius:6px; border:1px solid #ccc; font-weight:bold;">
                    <option value="valor">Valor Específico em R$ (mínimo R$ 15,00)</option>
                    <option value="bolas">Quantidade de Bolas por Sabor</option>
                </select>
            </div>

            <!-- PAINEL 1: VALOR FIXO -->
            <div id="painel-self-valor" style="display:block;">
                <label style="font-weight:bold; display:block; margin-bottom:5px;">Digite o valor em R$ (Inteiros, mín. R$ 15):</label>
                <input type="number" id="self-valor-input" min="15" step="1" value="15" onchange="validarValorSelf(this)" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:6px; font-size:16px; margin-bottom:12px;">
                
                <!-- ACORDEÃO DE SABORES COM BOTÃO + -->
                <div style="margin-bottom:12px;">
                    <div class="accordion-header" onclick="toggleSaboresSelf()" style="display:flex; justify-content:space-between; align-items:center; padding:10px; background:#f9f9f9; border-radius:6px; cursor:pointer; border:1px solid #eee; font-weight:bold; font-size:14px;">
                        <span>Escolha os Sabores Desejados</span>
                        <i id="icon-angle-sabores" class="fas fa-plus"></i>
                    </div>
                    <div id="container-sabores-self" style="display:none; max-height:160px; overflow-y:auto; border:1px solid #eee; padding:8px; border-radius:0 0 6px 6px; background:#fafafa; border-top:none;">
                        ${selfServiceSabores.map(s => `
                            <label style="display:block; padding:4px 0; font-size:13px; cursor:pointer;">
                                <input type="checkbox" class="self-sabor-check" value="${s}" onchange="checarLimiteSaboresSelf(this)" style="margin-right:8px;"> ${s}
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- PAINEL 2: SELEÇÃO DE BOLAS COM BOTÃO + -->
            <div id="painel-self-bolas" style="display:none;">
                <div style="margin-bottom:12px;">
                    <div class="accordion-header" onclick="toggleBolasSelf()" style="display:flex; justify-content:space-between; align-items:center; padding:10px; background:#f9f9f9; border-radius:6px; cursor:pointer; border:1px solid #eee; font-weight:bold; font-size:14px;">
                        <span>Quantidade de bolas por sabor</span>
                        <i id="icon-angle-bolas" class="fas fa-plus"></i>
                    </div>
                    <div id="container-bolas-self" style="display:none; max-height:160px; overflow-y:auto; border:1px solid #eee; padding:8px; border-radius:0 0 6px 6px; background:#fafafa; border-top:none;">
                        ${selfServiceSabores.map((s, idx) => `
                            <div style="display:flex; justify-content:space-between; align-items:center; padding:5px 0; border-bottom:1px solid #f0f0f0;">
                                <span style="font-size:13px;">${s}</span>
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <button type="button" onclick="alterarBolaCount(${idx}, -1)" style="width:26px; height:26px; border-radius:50%; border:1px solid #ccc; background:#eee; font-weight:bold; cursor:pointer;">-</button>
                                    <span id="bola-count-${idx}" style="font-weight:bold; font-size:13px; min-width:18px; text-align:center;">0</span>
                                    <button type="button" onclick="alterarBolaCount(${idx}, 1)" style="width:26px; height:26px; border-radius:50%; border:1px solid #ccc; background:#eee; font-weight:bold; cursor:pointer;">+</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- COMPLEMENTOS DIVIDIDOS EM 3 GRUPOS EM ORDEM ALFABÉTICA -->
            <div style="margin-top:12px;">
                <div class="accordion-header" onclick="toggleAdicionais()" style="display:flex; justify-content:space-between; align-items:center; padding:10px; background:#f9f9f9; border-radius:6px; cursor:pointer; border:1px solid #eee; font-weight:bold; font-size:14px;">
                    <span>Complementos do Self-Service</span>
                    <i id="icon-angle" class="fas fa-plus"></i>
                </div>
                <div id="container-adicionais" style="display:none; max-height:200px; overflow-y:auto; border:1px solid #eee; padding:10px; border-radius:0 0 6px 6px; background:#fff; border-top:none;">
                    
                    <h5 style="margin:4px 0; color:#ed3237; font-size:13px; border-bottom:1px solid #eee; padding-bottom:3px;">Coberturas:</h5>
                    ${selfServiceComplementosDivisao.coberturas.map(c => `
                        <label style="display:block; padding:3px 0; font-size:13px; cursor:pointer;">
                            <input type="checkbox" class="opt-self-add-check" value="${c}" style="margin-right:6px;"> ${c}
                        </label>
                    `).join('')}

                    <h5 style="margin:10px 0 4px 0; color:#ed3237; font-size:13px; border-bottom:1px solid #eee; padding-bottom:3px;">Caldas:</h5>
                    ${selfServiceComplementosDivisao.caldas.map(c => `
                        <label style="display:block; padding:3px 0; font-size:13px; cursor:pointer;">
                            <input type="checkbox" class="opt-self-add-check" value="${c}" style="margin-right:6px;"> ${c}
                        </label>
                    `).join('')}

                    <h5 style="margin:10px 0 4px 0; color:#ed3237; font-size:13px; border-bottom:1px solid #eee; padding-bottom:3px;">Cremes, Granulados e Outros:</h5>
                    ${selfServiceComplementosDivisao.cremesEOutros.map(c => `
                        <label style="display:block; padding:3px 0; font-size:13px; cursor:pointer;">
                            <input type="checkbox" class="opt-self-add-check" value="${c}" style="margin-right:6px;"> ${c}
                        </label>
                    `).join('')}
                </div>
            </div>

            <h4 style="margin-top:12px; font-size:14px;">Observações do Self-Service:</h4>
            <textarea id="opt-self-obs" style="width:100%; height:55px; border-radius:6px; border:1px solid #ccc; padding:8px; font-family:inherit; font-size:13px;" placeholder="Ex: Bater no portão / caprichar no creme de avelã..."></textarea>
        `;
    }
    // --- DEMAIS PRODUTOS NORMAIS ---
    else {
        if (prod.complexOptions) {
            modalHTML += `<h4>Escolha o Tamanho:</h4><select id="opt-tam-select" class="opt-select" style="width:100%; padding:10px; margin-bottom:12px; border-radius:6px;">`;
            for (const [tam, preco] of Object.entries(prod.tamanhos)) {
                modalHTML += `<option value="${tam}">${tam} - R$ ${preco.toFixed(2)}</option>`;
            }
            modalHTML += `</select>`;
        } else {
            modalHTML += `<p><strong>Preço: R$ ${prod.preco.toFixed(2)}</strong></p><input type="hidden" id="opt-tam-select" value="Unico">`;
        }

        if (prod.selfServiceFlavors) {
            modalHTML += `
                <h4 style="margin-top:12px; font-size:14px;">Escolha até 2 Sabores:</h4>
                <input type="text" id="opt-flavor-input-1" class="opt-input" style="width:100%; padding:8px; margin-bottom:5px; border:1px solid #ccc; border-radius:6px; font-size:13px;" placeholder="Primeiro Sabor" list="opt-flavor-list">
                <input type="text" id="opt-flavor-input-2" class="opt-input" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:6px; font-size:13px;" placeholder="Segundo Sabor (Opcional)" list="opt-flavor-list">
                <datalist id="opt-flavor-list">${selfServiceSabores.map(s => `<option value="${s}">`).join('')}</datalist>
            `;
        }

        if (prod.cat === 'acai' || prod.cat === 'shakes') {
            modalHTML += `
                <div class="accordion-header" onclick="toggleAdicionais()" style="display:flex; justify-content:space-between; align-items:center; padding:10px; background:#f9f9f9; border-radius:6px; cursor:pointer; margin-top:12px; border:1px solid #eee; font-weight:bold; font-size:14px;">
                    <span>Acrescentar Adicionais?</span>
                    <i id="icon-angle" class="fas fa-plus"></i>
                </div>
                <div id="container-adicionais" style="display:none; max-height:180px; overflow-y:auto; border:1px solid #eee; padding:5px; border-radius:0 0 6px 6px; background:#fff; border-top:none;">
            `;
            
            let listToUse = prod.cat === 'shakes' ? adicionaisList.filter(a => a.nome === 'Chantilly') : adicionaisList;

            listToUse.forEach(add => {
                modalHTML += `
                    <label style="display:flex; align-items:center; justify-content:space-between; padding:8px; border-bottom:1px solid #eee; cursor:pointer;">
                        <div style="display:flex; align-items:center; gap:10px; flex:1;">
                            ${add.image ? `<img src="${add.image}" alt="${add.nome}" style="width:35px; height:35px; object-fit:contain; border-radius:6px; background:#f9f9f9;">` : ''}
                            <div>
                                <span style="font-size:13px; font-weight:500;">${add.nome}</span><br>
                                <span style="font-size:12px; font-weight:bold; color:#ed3237;">R$ ${add.preco.toFixed(2)}</span>
                            </div>
                        </div>
                        <input type="checkbox" class="opt-add-on-check" data-nome="${add.nome}" data-preco="${add.preco}" style="width:18px; height:18px; cursor:pointer;">
                    </label>
                `;
            });
            modalHTML += `</div>`;
        }

        modalHTML += `
            <h4 style="margin-top:12px; font-size:14px;">Observações:</h4>
            <textarea id="opt-obs" style="width:100%; height:55px; border-radius:6px; border:1px solid #ccc; padding:8px; font-family:inherit; font-size:13px;" placeholder="Ex: Bater no portão..."></textarea>
        `;
    }

    modalHTML += `
        <h4 style="margin-top:12px; font-size:14px;">Quantidade:</h4>
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
            <button onclick="changeQty(-1)" type="button" style="width:36px; height:36px; border-radius:50%; border:1px solid #ccc; background:#eee; font-size:18px; font-weight:bold; cursor:pointer;">-</button>
            <span id="prod-qty" style="font-size:18px; font-weight:bold;">1</span>
            <button onclick="changeQty(1)" type="button" style="width:36px; height:36px; border-radius:50%; border:1px solid #ccc; background:#eee; font-size:18px; font-weight:bold; cursor:pointer;">+</button>
        </div>
    `;

    bolasSelfServiceState = {};
    selfServiceSabores.forEach((_, idx) => bolasSelfServiceState[idx] = 0);

    detailsArea.innerHTML = modalHTML;
    modal.classList.remove('hidden');
}

function validarValorCobertura(input) {
    let val = Math.floor(parseFloat(input.value));
    if (isNaN(val) || val < 2) {
        alert("O valor mínimo para cobertura/calda é R$ 2,00.");
        input.value = 2;
    } else {
        input.value = val;
    }
}

function validarValorSelf(input) {
    let val = Math.floor(parseFloat(input.value));
    if (isNaN(val) || val < 15) {
        alert("O valor do Self-Service precisa ser um número inteiro de no mínimo R$ 15,00.");
        input.value = 15;
        val = 15;
    } else {
        input.value = val;
    }

    // Se o valor estiver na faixa de R$ 15 a R$ 20, limita a no máximo 3 sabores marcados
    if (val >= 15 && val <= 20) {
        const selecionados = document.querySelectorAll('.self-sabor-check:checked');
        if (selecionados.length > 3) {
            alert("Para valores de R$ 15,00 a R$ 20,00, o limite é de até 3 sabores. Desmarcamos os sabores excedentes!");
            selecionados.forEach((cb, idx) => {
                if (idx >= 3) cb.checked = false;
            });
        }
    }
}

function checarLimiteSaboresSelf(checkbox) {
    const valInput = document.getElementById('self-valor-input');
    let valor = Math.floor(parseFloat(valInput.value)) || 0;
    
    // Regra: Entre R$ 15 e R$ 20, máximo 3 sabores
    if (valor >= 15 && valor <= 20) {
        const selecionados = document.querySelectorAll('.self-sabor-check:checked');
        if (selecionados.length > 3) {
            alert("Para valores de R$ 15,00 a R$ 20,00, você pode escolher no máximo 3 sabores!");
            checkbox.checked = false;
        }
    }
}

// ACORDEÃO PARA EXPANDIR/RECOLHER OS SABORES DESEJADOS
function toggleSaboresSelf() {
    const container = document.getElementById('container-sabores-self');
    const icon = document.getElementById('icon-angle-sabores');
    if (container) {
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
            if (icon) icon.className = 'fas fa-minus';
        } else {
            container.style.display = 'none';
            if (icon) icon.className = 'fas fa-plus';
        }
    }
}

// ACORDEÃO PARA EXPANDIR/RECOLHER A QUANTIDADE DE BOLAS
function toggleBolasSelf() {
    const container = document.getElementById('container-bolas-self');
    const icon = document.getElementById('icon-angle-bolas');
    if (container) {
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
            if (icon) icon.className = 'fas fa-minus';
        } else {
            container.style.display = 'none';
            if (icon) icon.className = 'fas fa-plus';
        }
    }
}

function toggleModoSelfServiceUI() {
    const tipo = document.getElementById('self-tipo-escolha').value;
    const pValor = document.getElementById('painel-self-valor');
    const pBolas = document.getElementById('painel-self-bolas');

    if (tipo === 'valor') {
        pValor.style.display = 'block';
        pBolas.style.display = 'none';
    } else {
        pValor.style.display = 'none';
        pBolas.style.display = 'block';
    }
}

function alterarBolaCount(idx, delta) {
    let atual = bolasSelfServiceState[idx] || 0;
    atual += delta;
    if (atual < 0) atual = 0;
    bolasSelfServiceState[idx] = atual;

    const el = document.getElementById(`bola-count-${idx}`);
    if (el) el.innerText = atual;
}

function changeQty(delta) {
    currentQty += delta;
    if (currentQty < 1) currentQty = 1;
    const qtyEl = document.getElementById('prod-qty');
    if (qtyEl) qtyEl.innerText = currentQty;
}

function toggleAdicionais() {
    const container = document.getElementById('container-adicionais');
    const icon = document.getElementById('icon-angle');
    if (container) {
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
            if (icon) icon.className = 'fas fa-minus';
        } else {
            container.style.display = 'none';
            if (icon) icon.className = 'fas fa-plus';
        }
    }
}

function closeOptionsModal() {
    const modal = document.getElementById('product-options-modal');
    if (modal) modal.classList.add('hidden');
    currentItemWithOptions = null;
}

// ==========================================
// 3. ADIÇÃO DE ITENS AO CARRINHO E REGRAS
// ==========================================
function addProductWithOptionsToCart() {
    if (!currentItemWithOptions) {
        alert("Erro: Nenhum produto selecionado.");
        return;
    }

    const p = currentItemWithOptions;

    // LÓGICA COBERTURA ÚNICA
    if (p.isCoberturaUnica) {
        const sabor = document.getElementById('cob-sabor-select').value;
        const valInput = document.getElementById('cob-valor-input');
        let valorCalculado = Math.floor(parseFloat(valInput.value));
        if (isNaN(valorCalculado) || valorCalculado < 2) valorCalculado = 2;

        const obsField = document.getElementById('opt-obs');
        let detalhesStr = `Sabor: ${sabor}`;
        if (obsField && obsField.value) detalhesStr += ` | Obs: ${obsField.value}`;

        cart.push({
            id: Date.now(),
            nomeFormatado: `Cobertura - ${sabor}`,
            detalhes: detalhesStr,
            preco: valorCalculado * currentQty,
            quantidade: currentQty,
            isSelfServicePeso: false
        });
    }
    // LÓGICA SELF-SERVICE
    else if (p.isSelfService) {
        const tipoChoice = document.getElementById('self-tipo-escolha').value;
        const selfObs = document.getElementById('opt-self-obs')?.value || "";

        let complementosList = [];
        document.querySelectorAll('.opt-self-add-check:checked').forEach(c => complementosList.push(c.value));

        if (tipoChoice === 'valor') {
            const valInput = document.getElementById('self-valor-input');
            let valorCalculado = Math.floor(parseFloat(valInput.value));

            if (isNaN(valorCalculado) || valorCalculado < 15) {
                alert("Por favor, informe um valor inteiro de no mínimo R$ 15,00!");
                return;
            }

            let saboresList = [];
            document.querySelectorAll('.self-sabor-check:checked').forEach(c => saboresList.push(c.value));

            if (saboresList.length === 0) {
                alert("Por favor, selecione ao menos 1 sabor de sorvete!");
                return;
            }

            if (valorCalculado >= 15 && valorCalculado <= 20 && saboresList.length > 3) {
                alert("Para valores entre R$ 15,00 e R$ 20,00, selecione no máximo 3 sabores!");
                return;
            }

            let detalhesStr = `Modo: Valor Fixo (R$ ${valorCalculado.toFixed(2)}) | Sabores: ${saboresList.join(', ')}`;
            if (complementosList.length > 0) detalhesStr += ` | Comps: ${complementosList.join(', ')}`;
            if (selfObs) detalhesStr += ` | Obs: ${selfObs}`;

            cart.push({
                id: Date.now(),
                nomeFormatado: 'Self-Service Por Valor',
                detalhes: detalhesStr,
                preco: valorCalculado * currentQty,
                quantidade: currentQty,
                isSelfServicePeso: true
            });
        } 
        else { // MODO BOLAS
            let bolasResumo = [];
            let totalBolas = 0;

            selfServiceSabores.forEach((sabor, idx) => {
                let qtd = bolasSelfServiceState[idx] || 0;
                if (qtd > 0) {
                    bolasResumo.push(`${qtd}x ${sabor}`);
                    totalBolas += qtd;
                }
            });

            if (totalBolas === 0) {
                alert("Por favor, escolha a quantidade de bolas de ao menos 1 sabor!");
                return;
            }

            let detalhesStr = `Modo: Bolas (${totalBolas} bolas) | Sabores: ${bolasResumo.join(', ')}`;
            if (complementosList.length > 0) detalhesStr += ` | Comps: ${complementosList.join(', ')}`;
            if (selfObs) detalhesStr += ` | Obs: ${selfObs}`;

            cart.push({
                id: Date.now(),
                nomeFormatado: 'Self-Service Por Bolas',
                detalhes: detalhesStr,
                preco: 0,
                quantidade: currentQty,
                isSelfServicePeso: true
            });
        }
    } 
    // DEMAIS PRODUTOS NORMAIS
    else {
        const tamSelect = document.getElementById('opt-tam-select');
        const obsField = document.getElementById('opt-obs');
        const s1 = document.getElementById('opt-flavor-input-1')?.value || "";
        const s2 = document.getElementById('opt-flavor-input-2')?.value || "";

        let precoFinal = 0;
        let tamanhoTexto = "";

        if (p.complexOptions && tamSelect) {
            tamanhoTexto = tamSelect.value;
            precoFinal = p.tamanhos[tamanhoTexto];
        } else {
            tamanhoTexto = "Único";
            precoFinal = p.preco;
        }

        let adicionaisNomes = [];
        let valorAdicionais = 0;
        document.querySelectorAll('.opt-add-on-check:checked').forEach(c => {
            adicionaisNomes.push(c.getAttribute('data-nome'));
            valorAdicionais += parseFloat(c.getAttribute('data-preco'));
        });

        let detalhesArray = [];
        if (tamanhoTexto !== "Único") detalhesArray.push(`Tam: ${tamanhoTexto}`);
        if (s1 || s2) detalhesArray.push(`Sabores: ${[s1, s2].filter(x => x).join(' e ')}`);
        if (adicionaisNomes.length > 0) detalhesArray.push(`Adds: ${adicionaisNomes.join(', ')}`);
        if (obsField && obsField.value) detalhesArray.push(`Obs: ${obsField.value}`);

        cart.push({
            id: Date.now(),
            nomeFormatado: p.nome,
            detalhes: detalhesArray.join(' | '),
            preco: (precoFinal + valorAdicionais) * currentQty,
            quantidade: currentQty,
            isSelfServicePeso: false
        });
    }

    updateCartCount();
    closeOptionsModal();

    const toast = document.createElement('div');
    toast.innerHTML = `✅ Adicionado ao carrinho!`;
    toast.style.cssText = `position:fixed; bottom:100px; left:50%; transform:translateX(-50%); background:#28a745; color:white; padding:12px 25px; border-radius:30px; font-weight:bold; box-shadow:0 4px 15px rgba(0,0,0,0.3); z-index:10000; text-align:center;`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// ==========================================
// 4. FUNÇÕES DINÂMICAS DO CHECKOUT
// ==========================================
function toggleDeliveryType() {
    const typeSelect = document.getElementById('cust-delivery-type');
    const fields = document.getElementById('delivery-address-fields');
    if (typeSelect && fields) {
        fields.style.display = (typeSelect.value === 'Retirada') ? 'none' : 'flex';
    }
    renderCartModal();
}

function togglePaymentFields() {
    const pagto = document.getElementById('cust-payment').value;
    const trocoContainer = document.getElementById('troco-container');
    const multiContainer = document.getElementById('multi-payment-container');

    if (trocoContainer) trocoContainer.style.display = (pagto === 'Dinheiro') ? 'block' : 'none';
    if (multiContainer) multiContainer.style.display = (pagto === 'DuasFormas') ? 'block' : 'none';
}

function toggleTrocoInput() {
    const opcao = document.getElementById('cust-troco-opcao').value;
    const trocoBox = document.getElementById('troco-input-box');
    if (trocoBox) {
        trocoBox.style.display = (opcao === 'precisa_troco') ? 'block' : 'none';
    }
}

function updateCartCount() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = cart.length;
}

function openCartModal() {
    if (cart.length === 0) return alert("Seu carrinho está vazio!");
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.remove('hidden');
        renderCartModal();
    }
}

function closeCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) cartModal.classList.add('hidden');
}

function renderCartModal() {
    const itemsDiv = document.getElementById('cart-items');
    if (!itemsDiv) return;
    itemsDiv.innerHTML = '';

    let subtotalFixos = 0;
    let temItemAPesar = false;

    cart.forEach(item => {
        let precoTexto = "";
        if (item.isSelfServicePeso && item.preco === 0) {
            precoTexto = `<span style="color:#e67e22; font-weight:bold;">A calcular na balança</span>`;
            temItemAPesar = true;
        } else {
            precoTexto = `R$ ${item.preco.toFixed(2)}`;
            subtotalFixos += item.preco;
        }

        itemsDiv.innerHTML += `
            <div style="border-bottom:1px solid #eee; padding:10px 0; display:flex; justify-content:space-between; align-items:center;">
                <div style="flex:1;">
                    <strong>${item.quantidade}x ${item.nomeFormatado}</strong>
                    <p style="font-size:12px; color:#666; margin:2px 0;">${item.detalhes}</p>
                    <span style="color:#587e69; font-weight:bold;">${precoTexto}</span>
                </div>
                <i class="fas fa-trash" onclick="removeItem(${item.id})" style="color:#ed3237; cursor:pointer; padding:10px;"></i>
            </div>
        `;
    });

    const isRetirada = document.getElementById('cust-delivery-type')?.value === 'Retirada';
    const bairroSelect = document.getElementById('cust-bairro');
    const taxaValue = (!isRetirada && bairroSelect) ? parseFloat(bairroSelect.value) : 0;
    const totalParcial = subtotalFixos + taxaValue;

    itemsDiv.innerHTML += `
        <div style="margin-top:15px; text-align:right; background:#f9f9f9; padding:10px; border-radius:8px;">
            <p style="margin:2px 0;">Subtotal de itens fixos: R$ ${subtotalFixos.toFixed(2)}</p>
            <p style="margin:2px 0;">Taxa Entrega: R$ ${taxaValue.toFixed(2)}</p>
            <h3 style="color:#ed3237; margin:5px 0;">TOTAL PARCIAL: R$ ${totalParcial.toFixed(2)}</h3>
        </div>
    `;

    const btnSend = document.querySelector('.btn-send');
    const minMsg = document.getElementById('min-order-msg');
    if (btnSend) {
        if (!isRetirada && subtotalFixos < 22 && !temItemAPesar) {
            if (minMsg) minMsg.innerHTML = `<p style="color:red; font-size:12px; font-weight:bold; text-align:center; margin-bottom:10px;">* Mínimo de R$ 22,00 para entrega.</p>`;
            btnSend.disabled = true;
            btnSend.style.opacity = "0.5";
            btnSend.style.cursor = "not-allowed";
        } else {
            if (minMsg) minMsg.innerHTML = "";
            btnSend.disabled = false;
            btnSend.style.opacity = "1";
            btnSend.style.cursor = "pointer";
        }
    }
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartCount();
    if (cart.length === 0) closeCartModal();
    else renderCartModal();
}

// ==========================================
// 5. ENVIO AUTOMÁTICO DO PEDIDO VIA WHATSAPP
// ==========================================
function sendWhatsApp() {
    const nomeInput = document.getElementById('cust-name');
    const nome = nomeInput ? nomeInput.value.trim() : "";

    if (!nome) {
        alert("Por favor, preencha o Nome.");
        return;
    }

    const deliverySelect = document.getElementById('cust-delivery-type');
    const isRetirada = deliverySelect ? (deliverySelect.value === 'Retirada') : false;

    let endereco = "";
    let bairroText = "";
    let pontoRef = "";
    let taxa = 0;

    if (!isRetirada) {
        const addrInput = document.getElementById('cust-address');
        const refInput = document.getElementById('cust-ref');
        const bairroSelect = document.getElementById('cust-bairro');

        endereco = addrInput ? addrInput.value.trim() : "";
        pontoRef = refInput ? refInput.value.trim() : "";

        if (!endereco || !bairroSelect || bairroSelect.value === "0" || bairroSelect.selectedIndex === -1) {
            alert("Por favor, preencha o Endereço e selecione o Bairro para entrega.");
            return;
        }

        // Limpa o texto do bairro para remover "(Taxa R$ X,XX)" na mensagem enviada
        let rawBairroText = bairroSelect.options[bairroSelect.selectedIndex].text;
        bairroText = rawBairroText.replace(/\s*\(Taxa R\$\s*\d+[\.,]?\d*\)/i, '').trim();
        taxa = parseFloat(bairroSelect.value) || 0;
    }

    const obsInput = document.getElementById('cust-obs');
    const obsPedido = obsInput ? obsInput.value.trim() : "";

    let subtotalFixos = 0;
    let temItemAPesar = false;

    // CABEÇALHO DO PEDIDO
    let msg = `🍦*PEDIDO - SORVETE AMIGO SALINAS*\n\n`;
    msg += `*Cliente:* ${nome}\n`;
    if (isRetirada) {
        msg += `*Tipo:* Retirar no Estabelecimento\n`;
    }
    msg += `----------------------------\n\n`;

    // LISTAGEM DE PRODUTOS
    cart.forEach(i => {
        const nomeLimpo = (i.nomeFormatado || '').trim();
        
        msg += `- *${i.quantidade}x ${nomeLimpo}*\n`;
        
        if (i.detalhes && i.detalhes.trim() !== '') {
            msg += `  _${i.detalhes.trim()}_\n`;
        }
        
        if (i.isSelfServicePeso && i.preco === 0) {
            msg += `  _(A CALCULAR PELA LOJA NA BALANÇA)_\n`;
            temItemAPesar = true;
        } else {
            subtotalFixos += (i.preco || 0);
        }
        msg += `\n`;
    });

    const totalFinal = subtotalFixos + taxa;

    // LINHA DO TOTAL
    msg += `-----------------------------\n`;
    msg += `*Total:* R$ ${totalFinal.toFixed(2).replace('.', ',')}${temItemAPesar ? ' (+ valor a pesar)' : ''}\n\n`;

    // FORMA DE PAGAMENTO
    const pagtoSelect = document.getElementById('cust-payment');
    const pagto = pagtoSelect ? pagtoSelect.value : "Não informado";
    let pagtoTexto = pagto;

    if (pagto === 'Dinheiro') {
        const opcaoTrocoSelect = document.getElementById('cust-troco-opcao');
        const opcaoTroco = opcaoTrocoSelect ? opcaoTrocoSelect.value : "";
        if (opcaoTroco === 'precisa_troco') {
            const valTrocoInput = document.getElementById('cust-troco');
            const valTroco = valTrocoInput ? valTrocoInput.value : "0";
            pagtoTexto = `Dinheiro (Troco para R$ ${valTroco})`;
        } else {
            pagtoTexto = `Dinheiro (Já está trocado)`;
        }
    } else if (pagto === 'DuasFormas') {
        const pay1Input = document.getElementById('multi-pay-1');
        const val1Input = document.getElementById('multi-val-1');
        const pay2Input = document.getElementById('multi-pay-2');
        const val2Input = document.getElementById('multi-val-2');

        const pay1 = pay1Input ? pay1Input.value : 'Opção 1';
        const val1 = parseFloat(val1Input ? val1Input.value : '0') || 0;
        const pay2 = pay2Input ? pay2Input.value : 'Opção 2';
        const val2 = parseFloat(val2Input ? val2Input.value : '0') || 0;

        const somaDuasFormas = val1 + val2;

        if (!temItemAPesar && Math.abs(somaDuasFormas - totalFinal) > 0.01) {
            alert(`A soma das duas formas de pagamento (R$ ${somaDuasFormas.toFixed(2).replace('.', ',')}) não corresponde ao valor total do pedido (R$ ${totalFinal.toFixed(2).replace('.', ',')}).\n\nPor favor, ajuste os valores para bater com o total.`);
            return;
        }

        pagtoTexto = `Duas Formas (${pay1}: R$ ${val1.toFixed(2).replace('.', ',')} | ${pay2}: R$ ${val2.toFixed(2).replace('.', ',')})`;
    }

    msg += `*Pagamento:* ${pagtoTexto}\n`;
    msg += `----------------------------\n\n`;

    // DADOS DE ENTREGA
    if (!isRetirada) {
        msg += `*Endereço:* ${endereco}\n`;
        msg += `*Bairro:* ${bairroText}\n`;
        if (pontoRef) {
            msg += `*Referência:* ${pontoRef}\n`;
        }
    }

    // OBSERVAÇÃO DO PEDIDO
    if (obsPedido) {
        msg += `\n*Observação:* ${obsPedido}\n`;
    }

    window.open(`https://wa.me/5538988353543?text=${encodeURIComponent(msg)}`, '_blank');
}

// INICIALIZAÇÃO E UTILITÁRIOS
window.onload = function() {
    showPage('home');
    updateCartCount();

    const bairroSelect = document.getElementById('cust-bairro');
    if (bairroSelect) {
        bairroSelect.addEventListener('change', () => {
            const cartModal = document.getElementById('cart-modal');
            if (cartModal && !cartModal.classList.contains('hidden')) {
                renderCartModal();
            }
        });
    }
};

function buscarProduto() {
    const termo = document.getElementById('input-busca').value.toLowerCase();
    const listContainer = document.getElementById('product-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    const resultados = database.filter(p =>
        p.nome.toLowerCase().includes(termo) ||
        p.desc.toLowerCase().includes(termo)
    );

    if (resultados.length === 0) {
        listContainer.innerHTML = '<p style="text-align:center; color:#666; margin-top:20px;">Nenhum produto encontrado...</p>';
        return;
    }

    resultados.forEach(p => {
        let precoTexto = p.complexOptions ?
            `A partir de R$ ${Math.min(...Object.values(p.tamanhos)).toFixed(2)}` :
            `R$ ${p.preco.toFixed(2)}`;

        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `
            <div class="product-content-wrapper" style="display:flex; align-items:center; width:100%; gap:15px;">
                ${p.image ? `<img src="${p.image}" alt="${p.nome}" style="width:70px; height:70px; object-fit:contain; border-radius:8px; background:#fff;">` : ''}
                <div class="product-info" style="flex:1;">
                    <h4 style="margin:0; font-size:16px;">${p.nome}</h4>
                    <p style="margin:3px 0; font-size:12px; color:#666;">${p.desc}</p>
                    <span class="product-price" style="font-weight:bold; color:#ed3237;">${precoTexto}</span>
                </div>
                <button class="btn-add" onclick="openOptionsModal(${p.id})" style="background:#28a745; color:white; border:none; border-radius:50%; width:35px; height:35px; font-size:20px; cursor:pointer;">+</button>
            </div>
        `;
        div.onclick = () => openOptionsModal(p.id);
        listContainer.appendChild(div);
    });
}

function verificarStatusLoja() {
    const agora = new Date();
    const hora = agora.getHours();
    const statusDiv = document.getElementById('status-loja-box');
    if (!statusDiv) return;

    if (hora >= 13 && hora < 23) {
        statusDiv.innerHTML = "● ABERTO AGORA";
        statusDiv.style.color = "#28a745";
        statusDiv.style.background = "#e8f5e9";
        statusDiv.style.border = "1px solid #28a745";
    } else {
        statusDiv.innerHTML = "○ FECHADO NO MOMENTO";
        statusDiv.style.color = "#ed3237";
        statusDiv.style.background = "#ffebee";
        statusDiv.style.border = "1px solid #ed3237";
    }
}

let currentSlide = 0;
let bannerTimer = null;

function rodarBanner() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slides.length === 0) return;

    if (bannerTimer) clearTimeout(bannerTimer);

    slides.forEach(s => s.style.display = 'none');
    dots.forEach(d => {
        d.style.background = 'rgba(255,255,255,0.5)';
        d.style.transform = 'scale(1)';
    });

    slides[currentSlide].style.display = 'block';
    if (dots[currentSlide]) {
        dots[currentSlide].style.background = '#fff';
        dots[currentSlide].style.transform = 'scale(1.3)';
    }

    currentSlide = (currentSlide + 1) % slides.length;
    bannerTimer = setTimeout(rodarBanner, 3500);
}

function jumpToSlide(index) {
    currentSlide = index;
    rodarBanner();
}