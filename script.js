// ==========================================
// 1. BANCO DE DADOS INTEGRAL
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
    { id: 20, cat: 'potes', nome: 'Pote de Chocolate Branco 240ml', preco: 10.00, desc: 'Sorvete de chocolate branco com calda de chocolate', image: 'img/pote-branco-240.png'},
    { id: 16, cat: 'potes', nome: 'Pote Napolitano 500ml', preco: 19.00, desc: 'Sorvete sabor chocolate, creme e morango.', image: 'img/pote-napolitano-500.png' },
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
    { id: 121, cat: 'picoles', nome: 'Picolé Morango Silvestre', preco: 6.00, desc: 'Picolé sabor morango silvestre.', image: 'img/picole-morango-sil.png' },
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

    // AÇAÍS
    { id: 200, cat: 'acai', nome: 'Açaí Calor ', preco: 0, desc: 'Açaí amigo com camadas de Granola, Salada de Frutas, Leite em Pó.', image: 'img/acai-calor.png', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 201, cat: 'acai', nome: 'Açaí União', preco: 0, desc: 'Açaí amigo com camadas de Creme Ninho, Mousse Morango, Creme Avelã.', image: 'img/acai-uniao.png', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 202, cat: 'acai', nome: 'Açaí Companhia', preco: 0, desc: 'Açaí amigo com camadas de Creme Avelã, Creme Ninho, Gotas Chocolate.', image: 'img/acai-companhia.png', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 203, cat: 'acai', nome: 'Açaí Abraço ( tradicional) ', preco: 0, desc: 'Açaí amigo com camadas de Banana, Leite em Pó, Leite Condensado.', image: 'img/acai-abraco.png', complexOptions: true, tamanhos: { '330ml': 18.00, '440ml': 20.00, '550ml': 22.00 } },
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
    { id: 305, cat: 'tacas', nome: 'Taça Encontro 320ml', preco: 25.00, desc: 'Sorvete de Pistache e Ninho, acompanhado com mescla de pistache, amendoim granulado e chantilly.', image: 'img/taca-encontro.png' },
    { id: 306, cat: 'tacas', nome: 'Taça Carinho 400ml', preco: 21.00, desc: 'Sorvete de Ninho e Morango, acompanhado de geleia de morango e fruta da época.', image: 'img/taca-carinho.png' },

    // OUTROS
    { id: 500, cat: 'outros', nome: 'Cascão', preco: 1.00, desc: 'Crocante.', image: 'img/cascao.png' },
    { id: 501, cat: 'outros', nome: 'Cestinha', preco: 1.00, desc: 'Crocante.', image: 'img/cestinha.png' },
    { id: 307, cat: 'outros', nome: 'Água Mineral 500ml', preco: 3.00, desc: 'Água Mineral 500ml.', image: 'img/agua-mineral.png' },
    { id: 308, cat: 'outros', nome: 'Água com Gás 500ml', preco: 4.00, desc: 'Água com Gás 500ml.', image: 'img/agua-com-gas.png' },
    { id: 309, cat: 'outros', nome: 'Coca-Cola Lata', preco: 6.00, desc: 'Coca 350ml.', image: 'img/coca-lata.png' }
];

const selfServiceSabores = ["Açaí Puro", "Açaí Trufado", "Creme de cupuaçu", "Açaí com Pistache", "Açaí com Ninho", "Chocolate", "Chocolate Belga", "Kit Kat", "Maltino", "Super Black", "Abacaxi", "Banana flambada", "Amendoim", "Coco", "Frutas do Bosque", "Café Holandês", "Chocolate Branco", "Frutas Tropicais", "Limão Galego", "Maracujá", "Mousse de Maracuja", "Doce de leite", "Morango", "Flocos Italiano", "Morango Natural", "Kinder Ovo", "Pistache", "Leite condensado", "Torta de limão", "Ninho", "Ninho com Avelã", "Ninho Trufado", "Jabuticaba", "Danoninho", "Blue Ice", "Chiclete", "Chocomenta"];

// AQUI: Adicionei as rotas das imagens para os adicionais
const adicionaisList = [
    { nome: 'Banana', preco: 3.00, image: 'img/banana.png' }, 
    { nome: 'Biz', preco: 3.00, image: 'img/bis.png' }, 
    { nome: 'Biscoito Oreo', preco: 3.00, image: 'img/oreo.png' }, 
    { nome: 'Cobertura Chocoball', preco: 3.00, image: 'img/chocoball.png' }, 
    { nome: 'Creme de Ninho', preco: 3.00, image: 'img/creme-ninho.png' }, 
    { nome: 'Disquete', preco: 3.00, image: 'img/disquete.png' }, 
    { nome: 'Granola', preco: 3.00, image: 'img/granola.png' }, 
    { nome: 'Jujuba', preco: 3.00, image: 'img/jujuba.png' }, 
    { nome: 'Leite Condensado', preco: 3.00, image: 'img/leite-condensado.png' }, 
    { nome: 'Leite em Pó', preco: 3.00, image: 'img/leite-po.png' }, 
    { nome: 'Morango', preco: 3.00, image: 'img/morango.png' }, 
    { nome: 'Paçoca', preco: 3.00, image: 'img/pacoca.png' }, 
    { nome: 'Mousse de Morango', preco: 3.00, image: 'img/mousse-morango.png' },
    { nome: 'Mousse de Maracujá', preco: 3.00, image: 'img/mousse-maracuja.png' },
    { nome: 'Calda de Chocolate', preco: 4.00, image: 'img/calda-chocolate.png' }, 
    { nome: 'Geleia de Morango', preco: 4.00, image: 'img/geleia-morango.png' }, 
    { nome: 'Geleia de Maracujá', preco: 4.00, image: 'img/geleia-maracuja.png' }, 
    { nome: 'Salada de Frutas', preco: 4.00, image: 'img/salada-frutas.png' }, 
    { nome: 'Chantilly', preco: 4.00, image: 'img/chantilly.png' }, 
    { nome: 'Cereja', preco: 4.00, image: 'img/cereja.png' }, 
    { nome: 'Kiwi', preco: 4.00, image: 'img/kiwi.png' },
    { nome: 'Creme de Avelã', preco: 5.00, image: 'img/creme-avela.png' }
];

let cart = [];
let currentItemWithOptions = null;


function showPage(pageId, categoryToLoad = 'potes') {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    const cartBtn = document.getElementById('cart-fixed-circular');
    
    // ESTA É A PARTE NOVA:
    if (pageId === 'cardapio-page') {
        filterMenu(categoryToLoad);
        if (cartBtn) cartBtn.style.display = 'flex';
    } 
    else if (pageId === 'horarios-page') {
        verificarStatusLoja(); // Atualiza se está aberto ou fechado
        rodarBanner();         // Dá o "play" nas imagens
        if (cartBtn) cartBtn.style.display = 'none';
    } 
    else {
        if (cartBtn) cartBtn.style.display = 'none';
    }
    
    window.scrollTo(0, 0);
}


function filterMenu(category) {
    const listContainer = document.getElementById('product-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    // Lógica das Abas (Troca de cor do botão da categoria)
    const tabs = document.querySelectorAll('.category-tabs button');
    tabs.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.style.backgroundColor = '#587e69';
        } else {
            btn.style.backgroundColor = '#ed3237';
        }
    });

    // Filtra os produtos da categoria
    const products = database.filter(item => item.cat === category);
    
    products.forEach(p => {
        // Cálculo de preço (A partir de... ou preço fixo)
        let precoTexto = p.complexOptions ? 
            `A partir de R$ ${Math.min(...Object.values(p.tamanhos)).toFixed(2)}` : 
            `R$ ${p.preco.toFixed(2)}`;
        
        const div = document.createElement('div');
        div.className = 'product-item';
        
        // Aqui está a mágica: Adicionei o comando de abrir o modal no BOTÃO também!
        div.innerHTML = `
            <div class="product-content-wrapper" style="display: flex; align-items: center; width: 100%; gap: 15px;">
                ${p.image ? `<img src="${p.image}" alt="${p.nome}" style="width: 70px; height: 70px; object-fit: contain; border-radius: 8px; background: #fff;">` : ''}
                
                <div class="product-info" style="flex: 1;">
                    <h4 style="margin: 0; font-size: 16px;">${p.nome}</h4>
                    <p style="margin: 3px 0; font-size: 12px; color: #666;">${p.desc}</p>
                    <span class="product-price" style="font-weight: bold; color: #ed3237;">${precoTexto}</span>
                </div>

                <button class="btn-add" 
                        onclick="openOptionsModal(${p.id})" 
                        style="background: #28a745; color: white; border: none; border-radius: 50%; width: 35px; height: 35px; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                    +
                </button>
            </div>
        `;
        
        // Mantém o clique na div inteira como garantia
        div.onclick = () => openOptionsModal(p.id);
        listContainer.appendChild(div);
    });
}

function openOptionsModal(id) {
    const prod = database.find(p => p.id === id);
    if (!prod) return; 

    currentItemWithOptions = prod;
    const modal = document.getElementById('product-options-modal');
    const detailsArea = document.getElementById('product-details-area');
    
    if (!modal || !detailsArea) return;

    let modalHTML = `
        <div style="text-align:center;">
            ${prod.image ? `<img src="${prod.image}" alt="${prod.nome}" style="width:100%; max-height:220px; object-fit:contain; border-radius:10px; margin-bottom:15px; background:#fdf6e3;">` : ''}
            <h3>${prod.nome}</h3>
            <p style="font-size:14px; color:#666; margin-bottom:10px;">${prod.desc}</p>
        </div>
        <hr style="border:0; border-top:1px solid #eee; margin:15px 0;">
    `;

    if (prod.complexOptions) {
        modalHTML += `<h4>Escolha o Tamanho:</h4><select id="opt-tam-select" class="opt-select" style="width:100%; padding:10px; margin-bottom:15px; border-radius:5px;">`;
        for (const [tam, preco] of Object.entries(prod.tamanhos)) {
            modalHTML += `<option value="${tam}">${tam} - R$ ${preco.toFixed(2)}</option>`;
        }
        modalHTML += `</select>`;
    } else {
        modalHTML += `<p><strong>Preço: R$ ${prod.preco.toFixed(2)}</strong></p><input type="hidden" id="opt-tam-select" value="Unico">`;
    }

    if (prod.selfServiceFlavors) {
        modalHTML += `
            <h4 style="margin-top:15px;">Escolha até 2 Sabores:</h4>
            <input type="text" id="opt-flavor-input-1" class="opt-input" style="width:100%; padding:8px; margin-bottom:5px; border:1px solid #ccc; border-radius:5px;" placeholder="Primeiro Sabor" list="opt-flavor-list">
            <input type="text" id="opt-flavor-input-2" class="opt-input" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:5px;" placeholder="Segundo Sabor (Opcional)" list="opt-flavor-list">
            <datalist id="opt-flavor-list">${selfServiceSabores.map(s => `<option value="${s}">`).join('')}</datalist>
        `;
    }

    // AQUI: Lógica atualizada para Adicionais com Miniaturas
    if (prod.cat === 'acai' || prod.cat === 'shakes') {
        modalHTML += `
            <div class="accordion-header" onclick="toggleAdicionais()" style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f9f9f9; border-radius: 8px; cursor: pointer; margin-top: 15px; border: 1px solid #eee; font-weight: bold;">
                <span>Acrescentar Adicionais?</span>
                <i id="icon-angle" class="fas fa-plus"></i>
            </div>
            
            <div id="container-adicionais" style="display: none; max-height:200px; overflow-y:auto; border:1px solid #eee; padding:5px; border-radius:0 0 8px 8px; background:#fff; border-top:none;">
        `;
        
        let listToUse = prod.cat === 'shakes' ? adicionaisList.filter(a => a.nome === 'Chantilly') : adicionaisList;

        listToUse.forEach(add => {
            modalHTML += `
                <label style="display:flex; align-items:center; justify-content:space-between; padding: 10px; border-bottom: 1px solid #eee; cursor:pointer;">
                    <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                        ${add.image ? `<img src="${add.image}" alt="${add.nome}" style="width: 50px; height: 50px; object-fit: contain; border-radius: 6px; background: #f9f9f9; flex-shrink: 0;">` : ''}
                        <div style="flex: 1;">
                            <span style="font-size:14px; font-weight: 500; color: #333;">${add.nome}</span>
                            <br>
                            <span style="font-size:13px; font-weight: bold; color: #ed3237;">R$ ${add.preco.toFixed(2)}</span>
                        </div>
                    </div>
                    <input type="checkbox" class="opt-add-on-check" data-nome="${add.nome}" data-preco="${add.preco}" style="width: 18px; height: 18px; cursor: pointer; margin-left: 10px;">
                </label>
            `;
        });
        modalHTML += `</div>`;
    }

    modalHTML += `
        <h4 style="margin-top:15px;">Observações:</h4>
        <textarea id="opt-obs" style="width:100%; height:60px; border-radius:5px; border:1px solid #ccc; padding:8px; font-family:inherit;" placeholder="Ex: Sem granola, caprichar na calda..."></textarea>
    `;

    modalHTML += `
    <h4 style="margin-top:15px;">Quantidade:</h4>
    <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
        <button onclick="changeQty(-1)" type="button" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid #ccc; background: #eee; font-size: 20px; cursor: pointer;">-</button>
        <span id="prod-qty" style="font-size: 20px; font-weight: bold;">1</span>
        <button onclick="changeQty(1)" type="button" style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid #ccc; background: #eee; font-size: 20px; cursor: pointer;">+</button>
    </div>
`;

    detailsArea.innerHTML = modalHTML;
    modal.classList.remove('hidden');
}

let currentQty = 1; // Variável global para controlar a quantidade no modal

// Função que aumenta ou diminui o número na tela
function changeQty(delta) {
    currentQty += delta;
    if (currentQty < 1) currentQty = 1; // Não deixa ser menos que 1
    const qtyEl = document.getElementById('prod-qty');
    if (qtyEl) qtyEl.innerText = currentQty;
}

// IMPORTANTE: Resetar a quantidade para 1 sempre que abrir o modal
// Adicione esta linha no INÍCIO da sua função openOptionsModal(id):
// currentQty = 1;

function closeOptionsModal() { 
    const modal = document.getElementById('product-options-modal');
    if (modal) modal.classList.add('hidden'); 
    currentItemWithOptions = null;
}

function addProductWithOptionsToCart() {
    // 1. Verificação de segurança
    if (!currentItemWithOptions) {
        alert("Erro: Nenhum produto selecionado.");
        return;
    }

    const p = currentItemWithOptions;

    // 2. Captura os elementos do DOM
    const tamSelect = document.getElementById('opt-tam-select');
    const obsField = document.getElementById('opt-obs');
    const s1 = document.getElementById('opt-flavor-input-1')?.value || "";
    const s2 = document.getElementById('opt-flavor-input-2')?.value || "";

    // 3. Define Preço e Tamanho
    let precoFinal = 0;
    let tamanhoTexto = "";

    if (p.complexOptions) {
        tamanhoTexto = tamSelect.value;
        precoFinal = p.tamanhos[tamanhoTexto];
    } else {
        tamanhoTexto = "Único";
        precoFinal = p.preco;
    }

    // 4. Lógica de Adicionais
    let adicionaisNomes = [];
    let valorAdicionais = 0;
    const checks = document.querySelectorAll('.opt-add-on-check:checked');
    
    checks.forEach(c => {
        adicionaisNomes.push(c.getAttribute('data-nome'));
        valorAdicionais += parseFloat(c.getAttribute('data-preco'));
    });

    // 5. Formatação dos detalhes
    let detalhesArray = [];
    if (tamanhoTexto !== "Único") detalhesArray.push(`Tam: ${tamanhoTexto}`);
    if (s1 || s2) detalhesArray.push(`Sabores: ${[s1, s2].filter(x => x).join(' e ')}`);
    if (adicionaisNomes.length > 0) detalhesArray.push(`Adds: ${adicionaisNomes.join(', ')}`);
    if (obsField && obsField.value) detalhesArray.push(`Obs: ${obsField.value}`);

    // 6. Monta o objeto do item
    const novoItem = {
        id: Date.now(),
        nomeOriginal: p.nome,
        nomeFormatado: p.nome,
        detalhes: detalhesArray.join(' | '),
        preco: (precoFinal + valorAdicionais) * currentQty,
        quantidade: currentQty
    };

    // 7. Adiciona ao carrinho e fecha o modal
    cart.push(novoItem);
    updateCartCount(); 
    closeOptionsModal();

    // --- 8. MENSAGEM VISUAL (AGORA NO LUGAR CERTO) ---
    const toast = document.createElement('div');
    toast.innerHTML = `✅ ${currentQty}x ${p.nome} adicionado!`;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #28a745;
        color: white;
        padding: 12px 25px;
        border-radius: 30px;
        font-weight: bold;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        transition: opacity 0.5s;
        text-align: center;
        white-space: nowrap;
    `;
    document.body.appendChild(toast);

    // Sumir depois de 2 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2000);
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
    let subtotal = 0;

    cart.forEach(item => {
    itemsDiv.innerHTML += `
        <div style="border-bottom:1px solid #eee; padding:10px 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="flex:1;">
                <strong>${item.quantidade}x ${item.nomeFormatado}</strong>
                <p style="font-size:12px; color:#666; margin:0;">${item.detalhes}</p>
                <span style="color:#587e69; font-weight:bold;">R$ ${item.preco.toFixed(2)}</span>
            </div>
            <i class="fas fa-trash" onclick="removeItem(${item.id})" style="color:#ed3237; cursor:pointer; padding:10px;"></i>
        </div>`;
    subtotal += item.preco;
});

    const bairroSelect = document.getElementById('cust-bairro');
    const taxaValue = bairroSelect ? parseFloat(bairroSelect.value) : 0;
    const totalFinal = subtotal + taxaValue;

    itemsDiv.innerHTML += `
        <div style="margin-top:15px; text-align:right; background:#f9f9f9; padding:10px; border-radius:8px;">
            <p style="margin:2px 0;">Subtotal: R$ ${subtotal.toFixed(2)}</p>
            <p style="margin:2px 0;">Taxa Entrega: R$ ${taxaValue.toFixed(2)}</p>
            <h3 style="color:#ed3237; margin:5px 0;">TOTAL: R$ ${totalFinal.toFixed(2)}</h3>
        </div>`;

    const btnSend = document.querySelector('.btn-send');
    const minMsg = document.getElementById('min-order-msg');
    if (btnSend) {
        if (subtotal < 20) {
            if (minMsg) minMsg.innerHTML = `<p style="color:red; font-size:12px; font-weight:bold; text-align:center; margin-bottom:10px;">* Mínimo de R$ 20,00 para entrega.</p>`;
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
    if(cart.length === 0) closeCartModal();
    else renderCartModal();
}

function toggleTroco() {
    const pagtoSelect = document.getElementById('cust-payment');
    const trocoCont = document.getElementById('troco-container');
    if (pagtoSelect && trocoCont) {
        trocoCont.style.display = (pagtoSelect.value === 'Dinheiro') ? 'block' : 'none';
    }
}

function sendWhatsApp() {
    const nome = document.getElementById('cust-name').value;
    const endereco = document.getElementById('cust-address').value;
    const bairroSelect = document.getElementById('cust-bairro');
    
    if(!nome || !endereco || !bairroSelect || bairroSelect.value === "0") {
        alert("Por favor, preencha o Nome, Endereço e selecione o Bairro.");
        return;
    }

    const bairroText = bairroSelect.options[bairroSelect.selectedIndex].text;
    const taxa = parseFloat(bairroSelect.value);
    const pagto = document.getElementById('cust-payment').value;
    const troco = document.getElementById('cust-troco').value;

    let subtotal = 0;
    
    // 1. Cabeçalho e Cliente
    let msg = `🍦*PEDIDO - SORVETE AMIGO SALINAS*\n\n`;
    msg += `*Cliente:* ${nome}\n`;
    msg += `-------------------------------------\n\n`;
    
    // 2. Itens do Pedido (usando o hífen "-" como você pediu)
    cart.forEach(i => {
        msg += `- *${i.quantidade}x ${i.nomeFormatado}*\n  _${i.detalhes}_\n\n`;
        subtotal += i.preco;
    });
    
    msg += `-----------------------------\n`;

    // 3. Total e Pagamento
    msg += `*Total:* R$ ${(subtotal + taxa).toFixed(2)}\n\n`;
    msg += `*Pagamento:* ${pagto}`;
    if (pagto === 'Dinheiro' && troco) {
        msg += ` (Troco para R$ ${troco})`;
    }
    msg += `\n----------------------------\n\n`;

    // 4. Endereço e Bairro por último
    msg += `*Endereço:* ${endereco}\n`;
    msg += `*Bairro:* ${bairroText}`;

    window.open(`https://wa.me/5538988353543?text=${encodeURIComponent(msg)}`, '_blank');
}

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
            <div class="product-content-wrapper" style="display: flex; align-items: center; width: 100%; gap: 15px;">
                ${p.image ? `<img src="${p.image}" alt="${p.nome}" style="width: 70px; height: 70px; object-fit: contain; border-radius: 8px; background: #fff;">` : ''}
                <div class="product-info" style="flex: 1;">
                    <h4 style="margin: 0; font-size: 16px;">${p.nome}</h4>
                    <p style="margin: 3px 0; font-size: 12px; color: #666;">${p.desc}</p>
                    <span class="product-price" style="font-weight: bold; color: #ed3237;">${precoTexto}</span>
                </div>
                <button class="btn-add" onclick="openOptionsModal(${p.id})" style="background: #28a745; color: white; border: none; border-radius: 50%; width: 35px; height: 35px; font-size: 20px; cursor: pointer;">+</button>
            </div>
        `;
        div.onclick = () => openOptionsModal(p.id);
        listContainer.appendChild(div);
    });
}

// FUNÇÃO PARA ABRIR/FECHAR ADICIONAIS
function toggleAdicionais() {
    const container = document.getElementById('container-adicionais');
    const icon = document.getElementById('icon-angle');
    
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
        icon.classList.replace('fa-plus', 'fa-minus');
    } else {
        container.style.display = 'none';
        icon.classList.replace('fa-minus', 'fa-plus');
    }
}


function verificarStatusLoja() {
    const agora = new Date();
    const hora = agora.getHours();
    const statusDiv = document.getElementById('status-loja-box');
    if (!statusDiv) return;

    // Considerando aberto das 13h às 23h
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

function verificarStatusLoja() {
    const agora = new Date();
    const hora = agora.getHours();
    const statusDiv = document.getElementById('status-loja-box');
    
    if (!statusDiv) return;

    // Regra: Aberto das 13h às 23h
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

// LÓGICA DO BANNER
let currentSlide = 0;
let bannerTimer = null;

function rodarBanner() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if(slides.length === 0) return;
    
    if(bannerTimer) clearTimeout(bannerTimer);
    
    // Esconde tudo
    slides.forEach(s => s.style.display = 'none');
    dots.forEach(d => {
        d.style.background = 'rgba(255,255,255,0.5)';
        d.style.transform = 'scale(1)';
    });
    
    // Mostra o atual e destaca a bolinha
    slides[currentSlide].style.display = 'block';
    if(dots[currentSlide]) {
        dots[currentSlide].style.background = '#fff'; // Bolinha ativa fica branca
        dots[currentSlide].style.transform = 'scale(1.3)'; // E um pouco maior
    }
    
    currentSlide = (currentSlide + 1) % slides.length;
    bannerTimer = setTimeout(rodarBanner, 3500); 
}

// Função para clicar na bolinha e ir direto para a imagem
function jumpToSlide(index) {
    currentSlide = index;
    rodarBanner();
}