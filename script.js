// BANCO DE DADOS COMPLETO (Copie e cole isso tudo)
const database = [
    // POTES
    { id: 1, cat: 'potes', nome: 'Pote Trufatto 1L', preco: 35.00, desc: 'Leite condensado com chocolate trufado.' },
    { id: 2, cat: 'potes', nome: 'Pote Chocolate Belga 1L', preco: 35.00, desc: 'Chocolate, creme leitíssimo e gotas.' },
    { id: 3, cat: 'potes', nome: 'Pote Pistache 1L', preco: 40.00, desc: 'Pistache premium cremoso.' },
    { id: 4, cat: 'potes', nome: 'Pote Ninho com Avelã 1.5L', preco: 36.00, desc: 'Leite condensado, chocolate e avelã.' },
    { id: 5, cat: 'potes', nome: 'Pote Morango Cremoso 1.5L', preco: 32.00, desc: 'Leite condensado com morango.' },
    { id: 6, cat: 'potes', nome: 'Pote Leite Condensado 1.5L', preco: 27.00, desc: 'Mix com morango.' },
    { id: 7, cat: 'potes', nome: 'Pote Napolitano 1.8L', preco: 33.00, desc: 'Chocolate, creme e morango.' },
    { id: 8, cat: 'potes', nome: 'Pote Ninho 1L', preco: 22.00, desc: 'Puro sabor Ninho.' },
    { id: 9, cat: 'potes', nome: 'Pote Flocos 1.5L', preco: 31.00, desc: 'Creme com chocolate.' },
    { id: 10, cat: 'potes', nome: 'Pote Chocolate Branco 1.5L', preco: 31.00, desc: 'Com raspas e cobertura.' },
    { id: 11, cat: 'potes', nome: 'Pote Abacaxi 1.5L', preco: 32.00, desc: 'Com cobertura de caramelo.' },
    { id: 12, cat: 'potes', nome: 'Pote Mousse de Maracujá 1.5L', preco: 32.00, desc: 'Azedinho e cremoso.' },
    { id: 13, cat: 'potes', nome: 'Açaí Puro 1.5L', preco: 50.00, desc: 'Açaí premium concentrado.' },
    { id: 14, cat: 'potes', nome: 'Açaí com Cupuaçu 1L', preco: 35.00, desc: 'Mix perfeito.' },
    { id: 15, cat: 'potes', nome: 'Açaí Puro 240ml', preco: 12.00, desc: 'Individual.' },
    { id: 16, cat: 'potes', nome: 'Napolitano 500ml', preco: 19.00, desc: 'Individual.' },
    { id: 17, cat: 'potes', nome: 'Açaí Zero 240ml', preco: 15.00, desc: 'Sem açúcar.' },
    { id: 18, cat: 'potes', nome: 'Morango Zero 240ml', preco: 15.00, desc: 'Sem açúcar.' },

    // PICOLÉS
    { id: 100, cat: 'picoles', nome: 'Picolé Limão', preco: 5.00, desc: 'Fruta.' },
    { id: 101, cat: 'picoles', nome: 'Picolé Uva', preco: 5.00, desc: 'Fruta.' },
    { id: 102, cat: 'picoles', nome: 'Picolé Napolitano', preco: 5.00, desc: 'Ao leite.' },
    { id: 103, cat: 'picoles', nome: 'Picolé Groselha', preco: 5.00, desc: 'Fruta.' },
    { id: 104, cat: 'picoles', nome: 'Picolé Morango Cremoso', preco: 6.00, desc: 'Ao leite.' },
    { id: 105, cat: 'picoles', nome: 'Picolé Chocolate', preco: 6.00, desc: 'Ao leite.' },
    { id: 106, cat: 'picoles', nome: 'Picolé Milho', preco: 6.00, desc: 'Ao leite.' },
    { id: 107, cat: 'picoles', nome: 'Picolé Mousse Maracujá', preco: 6.00, desc: 'Ao leite.' },
    { id: 108, cat: 'picoles', nome: 'Picolé Ninho', preco: 6.00, desc: 'Ao leite.' },
    { id: 109, cat: 'picoles', nome: 'Picolé Coco', preco: 6.00, desc: 'Ao leite.' },
    { id: 110, cat: 'picoles', nome: 'Picolé Graviola', preco: 6.00, desc: 'Fruta.' },
    { id: 111, cat: 'picoles', nome: 'Picolé Açaí com Ninho', preco: 7.00, desc: 'Energia.' },
    { id: 112, cat: 'picoles', nome: 'Picolé Morango Zero Açúcar', preco: 7.00, desc: 'Saudável.' },
    { id: 113, cat: 'picoles', nome: 'Picolé Pinta Língua', preco: 4.50, desc: 'Kids.' },
    { id: 114, cat: 'picoles', nome: 'Picolé Supremo Ninho Trufado', preco: 9.00, desc: 'Linha Premium.' },
    { id: 115, cat: 'picoles', nome: 'Picolé Maracujá Trufado', preco: 9.00, desc: 'Linha Premium.' },
    { id: 116, cat: 'picoles', nome: 'Picolé Brigadeiro', preco: 8.00, desc: 'Cremoso.' },
    { id: 117, cat: 'picoles', nome: 'Paleta Ninho com Ovomaltine', preco: 12.00, desc: 'A gigante.' },
    { id: 118, cat: 'picoles', nome: 'Paleta Croquito', preco: 12.00, desc: 'A gigante.' },
    { id: 120, cat: 'picoles', nome: 'Picolé Pistache Supremo', preco: 15.00, desc: 'Premium máxima.' },

    // AÇAÍS COMPLEXOS (with complexOptions=true)
    { id: 200, cat: 'acai', nome: 'CALOR Açaí Amigo', preco: 0, desc: 'Granola, Salada de Frutas, Leite em Pó.', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 201, cat: 'acai', nome: 'UNIÃO Açaí Amigo', preco: 0, desc: 'Creme Ninho, Mousse Morango, Creme Avelã.', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 202, cat: 'acai', nome: 'COMPANHIA Açaí Amigo', preco: 0, desc: 'Creme Avelã, Creme Ninho, Gotas Chocolate.', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    { id: 203, cat: 'acai', nome: 'ABRAÇO Açaí Amigo', preco: 0, desc: 'Banana, Leite em Pó, Leite Condensado.', complexOptions: true, tamanhos: { '330ml': 18.00, '440ml': 20.00, '550ml': 22.00 } },
    { id: 204, cat: 'acai', nome: 'ALEGRIA Açaí Amigo', preco: 0, desc: 'Leite em Pó e Creme Avelã.', complexOptions: true, tamanhos: { '330ml': 22.00, '440ml': 23.00, '550ml': 25.00 } },
    
    // AÇAÍS SIMPLES (sem complexOptions)
    { id: 205, cat: 'acai', nome: 'Açaí AMOR 480ml', preco: 26.00, desc: 'Frutas da Época, Ninho, Condensado.' },
    { id: 206, cat: 'acai', nome: 'Açaí AVENTURA 450ml', preco: 32.00, desc: 'Bombom, Ninho, Picolé Premium.' },
    { id: 207, cat: 'acai', nome: 'Açaí DIVERSÃO 250ml', preco: 15.00, desc: 'Ninho, Banana e Disqueti.' },

    // MILKSHAKES COMPLEXOS (with complexOptions=true)
    { id: 300, cat: 'shakes', nome: 'AMIGO IMAGINÁRIO', preco: 0, desc: 'Escolha até 2 Sabores do Self-Service + Cobertura.', complexOptions: true, selfServiceFlavors: true, tamanhos: { '330ml': 18.00, '440ml': 19.00, '550ml': 21.00 } },
    { id: 301, cat: 'shakes', nome: 'Shake Trufado AFETO', preco: 0, desc: 'Sorvete Café, Creme Avelã, Café Solúvel.', complexOptions: true, tamanhos: { '330ml': 21.00, '440ml': 23.00 } },
    { id: 302, cat: 'shakes', nome: 'Shake Trufado FESTA', preco: 0, desc: 'Sorvete Ninho, Geleia Morango, Leite em Pó.', complexOptions: true, tamanhos: { '330ml': 21.00, '440ml': 23.00 } },
    { id: 303, cat: 'shakes', nome: 'Shake Trufado RECREIO', preco: 0, desc: 'Sorvete Ninho, Leite em Pó, Creme Avelã.', complexOptions: true, tamanhos: { '330m': 21.00, '440ml': 23.00 } },
    { id: 304, cat: 'shakes', nome: 'Shake Trufado ENERGIA', preco: 0, desc: 'Kinderovo, Ovomaltine, Creme Avelã, Ninho.', complexOptions: true, tamanhos: { '330ml': 21.00, '440ml': 23.00 } },

    // OUTROS
    { id: 305, cat: 'shakes', nome: 'Taça Encontro 320ml', preco: 25.00, desc: 'Pistache e Ninho com Chantilly.' },
    { id: 306, cat: 'shakes', nome: 'Taça Carinho 400ml', preco: 21.00, desc: 'Ninho e Morango com Geleia.' },
    { id: 307, cat: 'shakes', nome: 'Água / Água com Gás', preco: 3.00, desc: '' },
    { id: 308, cat: 'shakes', nome: 'Coca-Cola Lata', preco: 6.00, desc: '' },
];

const selfServiceSabores = ["Açaí Puro", "Açaí Trufado", "Açaí Zero", "Creme de cupuaçu", "Açaí com Pistache", "Açaí com Ninho", "Chocolate", "Chocolate Belga", "Kit Kat", "Maltino", "Super Black", "Abacaxi", "Banana flambada", "Amendoim", "Coco", "Frutas do Bosque", "Café Holandês", "Chocolate Branco", "Frutas Tropicais", "Limão Galego", "Creme Maracujá", "Mousse de Maracuja", "Doce de leite", "Morango", "Flocos", "Italiano", "Morango Natural", "Kinder Ovo", "Pistache", "Leite condensado", "Torta de limão", "Ninho", "Ninho com Avelã", "Ninho Trufado", "jabuticaba", "Danoninho", "Blue Ice", "Chiclete", "Chocomenta"];

const adicionaisList = [
    { nome: 'Banana', preco: 3.00 }, { nome: 'Biz', preco: 3.00 }, { nome: 'Biscoito Oreo', preco: 3.00 }, { nome: 'Cobertura Chocoball', preco: 3.00 }, { nome: 'Creme de Ninho', preco: 3.00 }, { nome: 'Disquete', preco: 3.00 }, { nome: 'Granola', preco: 3.00 }, { nome: 'Jujuba', preco: 3.00 }, { nome: 'Leite Condensado', preco: 3.00 }, { nome: 'Leite em Pó', preco: 3.00 }, { nome: 'Morango', preco: 3.00 }, { nome: 'Paçoca', preco: 3.00 }, { nome: 'Mousse de Morango', preco: 3.00 },
    { nome: 'Calda de Chocolate', preco: 4.00 }, { nome: 'Geleia de Morango', preco: 4.00 }, { nome: 'Geleia de Maracujá', preco: 4.00 }, { nome: 'Salada de Frutas', preco: 4.00 }, { nome: 'Chantilly', preco: 4.00 }, { nome: 'Cereja', preco: 4.00 }, { nome: 'Kiwi', preco: 4.00 },
    { nome: 'Creme de Avelã', preco: 5.00 }
];

let cart = [];
let currentItemWithOptions = null; // Armazena o item que está sendo configurado no modal

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    const cartCircular = document.getElementById('cart-fixed-circular');
    if (pageId === 'cardapio-page') {
        cartCircular.classList.remove('hidden');
        filterMenu('potes');
    } else {
        cartCircular.classList.add('hidden');
    }
    
    window.scrollTo(0, 0);
}

function filterMenu(category) {
    const listContainer = document.getElementById('product-list');
    listContainer.innerHTML = '';

    database.filter(p => p.cat === category).forEach(p => {
        let priceDisplay = p.complexOptions ? `A partir de R$ ${Math.min(...Object.values(p.tamanhos)).toFixed(2)}` : `R$ ${p.preco.toFixed(2)}`;
        
        // Verifica se é um produto simples ou complexo
        let clickAction = p.complexOptions ? `openOptionsModal(${p.id})` : `addToCart(${p.id})`;

        listContainer.innerHTML += `
            <div class="product-item">
                <div class="product-info">
                    <h4>${p.nome}</h4>
                    <p>${p.desc}</p>
                </div>
                <div style="display:flex; align-items:center;">
                    <span class="product-price">${priceDisplay}</span>
                    <button class="btn-add" onclick="${clickAction}">+</button>
                </div>
            </div>
        `;
    });
}

// LÓGICA DE PRODUTOS COMPLEXOS (MODAL DE OPÇÕES)

function openOptionsModal(id) {
    const prod = database.find(p => p.id === id);
    currentItemWithOptions = prod; // Define o item atual para configuração
    
    document.getElementById('product-options-modal').classList.remove('hidden');
    document.getElementById('opt-product-name').innerText = `Opções do ${prod.nome}`;
    
    const detailsArea = document.getElementById('product-details-area');
    detailsArea.innerHTML = ''; // Limpa as opções anteriores

    // 1. TAMANHOS (Obrigatório)
    let tamHTML = `<h4>1. Escolha o Tamanho (Obrigatório)</h4><select id="opt-tam-select" class="opt-tam-select">`;
    tamHTML += `<option value="">Selecione o tamanho</option>`;
    for (const [tam, preco] of Object.entries(prod.tamanhos)) {
        tamHTML += `<option value="${tam}">${tam} - R$ ${preco.toFixed(2)}</option>`;
    }
    tamHTML += `</select>`;
    detailsArea.innerHTML += tamHTML;

    // 2. SABORES SELF-SERVICE (Se aplicável)
    if (prod.selfServiceFlavors) {
        let flavorHTML = `<h4>2. Escolha os Sabores (Self-Service)</h4>
            <p style="font-size:0.8rem; color:#666; margin-top:-10px; margin-bottom:10px;">Você pode escolher até 2 sabores para o Milk Shake Amigo Imaginário.</p>
            <input type="text" id="opt-flavor-input-1" class="opt-flavor-input" placeholder="Sabor 1" list="opt-flavor-list">
            <input type="text" id="opt-flavor-input-2" class="opt-flavor-input" placeholder="Sabor 2 (Opcional)" list="opt-flavor-list">
            
            <datalist id="opt-flavor-list">
                ${selfServiceSabores.map(sabor => `<option value="${sabor}">`).join('')}
            </datalist>
        `;
        detailsArea.innerHTML += flavorHTML;
    }

    // 3. ADICIONAIS (Opcional, com preço somado)
    // Se for Milk Shake, adiciona Chantilly. Se for Açaí, adiciona os adicionaisList
    let addsToRender = prod.cat === 'shakes' ? [{ nome: 'Adicional de Chantilly', preco: 4.00 }] : adicionaisList;
    
    if (addsToRender.length > 0) {
        let addOnsHTML = `<h4>${prod.cat === 'shakes' ? '3. Adicionais' : '3. Escolha seus Adicionais (Opcional)'}</h4>
            <div id="opt-adds-area" class="options-area">`;
        
        addsToRender.forEach((add, index) => {
            addOnsHTML += `
                <div class="add-on-option">
                    <span>${add.nome} (+ R$ ${add.preco.toFixed(2)})</span>
                    <input type="checkbox" class="opt-add-on-check" data-nome="${add.nome}" data-preco="${add.preco}">
                </div>`;
        });
        addOnsHTML += `</div>`;
        detailsArea.innerHTML += addOnsHTML;
    }
}

function closeOptionsModal() {
    document.getElementById('product-options-modal').classList.add('hidden');
    currentItemWithOptions = null;
}

// ADICIONAR PRODUTO COMPLEXO AO CARRINHO
function addProductWithOptionsToCart() {
    if (!currentItemWithOptions) return;

    // 1. Pega o Tamanho Escolhido e o Preço Base
    const tamSelect = document.getElementById('opt-tam-select');
    const tamanho = tamSelect.value;
    if (!tamanho) return alert("Você precisa escolher o tamanho!");
    
    const precoBase = currentItemWithOptions.tamanhos[tamanho];
    
    // 2. Pega os Adicionais Escolhidos e Soma o Preço
    let totalAdicionaisPreco = 0;
    let adicionaisEscolhidos = [];
    const checks = document.querySelectorAll('.opt-add-on-check:checked');
    checks.forEach(check => {
        totalAdicionaisPreco += parseFloat(check.getAttribute('data-preco'));
        adicionaisEscolhidos.push(check.getAttribute('data-nome'));
    });

    // 3. Pega os Sabores Escolhidos (Se aplicável)
    let saboresEscolhidos = [];
    if (currentItemWithOptions.selfServiceFlavors) {
        const sab1 = document.getElementById('opt-flavor-input-1').value;
        const sab2 = document.getElementById('opt-flavor-input-2').value;
        if (sab1) saboresEscolhidos.push(sab1);
        if (sab2) saboresEscolhidos.push(sab2);
    }

    // 4. Monta o Item Final para o Carrinho
    const totalItemPreco = precoBase + totalAdicionaisPreco;
    
    let nomeFinal = `${currentItemWithOptions.nome} (${tamanho})`;
    let descFinal = `${currentItemWithOptions.desc}`;
    if (saboresEscolhidos.length > 0) descFinal += ` Sabores: ${saboresEscolhidos.join(', ')}.`;
    if (adicionaisEscolhidos.length > 0) descFinal += ` Adicionais: ${adicionaisEscolhidos.join(', ')}.`;

    // Adiciona ao carrinho com o preço total calculado
    const cartId = Date.now(); // Cria um ID único baseado na data
    cart.push({ ...currentItemWithOptions, id: cartId, nome: nomeFinal, preco: totalItemPreco, desc: descFinal });
    
    updateCartCount();
    closeOptionsModal();
    alert(`${nomeFinal} adicionado ao pedido!`);
}


// LÓGICA DO CARRINHO (SIMPLES E REMOVER)

function addToCart(id) {
    const prod = database.find(p => p.id === id);
    const cartId = Date.now(); // Cria um ID único
    cart.push({...prod, id: cartId});
    updateCartCount();
    alert(`${prod.nome} adicionado ao pedido!`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function openCartModal() {
    document.getElementById('cart-modal').classList.remove('hidden');
    renderCartModal();
}

function closeCartModal() {
    document.getElementById('cart-modal').classList.add('hidden');
}

// Renderiza o carrinho com o ícone de LIXEIRA para remover
function renderCartModal() {
    const itemsDiv = document.getElementById('cart-items');
    itemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        itemsDiv.innerHTML += `
            <div class="cart-item-row">
                <div class="cart-item-info">
                    <span>${item.nome}</span>
                    <p style="font-size:0.8rem; color:#666; margin:0;">${item.complexOptions ? item.desc : ''}</p>
                </div>
                <div style="display:flex; align-items:center;">
                    <strong style="margin-right:15px; color:#ed3237;">R$ ${item.preco.toFixed(2)}</strong>
                    <i class="fas fa-trash cart-item-remove" onclick="removeProductFromCart(${item.id})"></i>
                </div>
            </div>
        `;
        total += item.preco;
    });

    // Taxa de Entrega
    const taxaValue = parseFloat(document.getElementById('cust-bairro').value) || 0;
    
    itemsDiv.innerHTML += `<hr><p style="text-align:right">Subtotal: R$ ${total.toFixed(2)}</p>`;
    if(taxaValue > 0){
        itemsDiv.innerHTML += `<p style="text-align:right">Taxa Entrega: R$ ${taxaValue.toFixed(2)}</p>`;
    }
    itemsDiv.innerHTML += `<h4 style="text-align:right; color:#ed3237; font-size:1.5rem">TOTAL: R$ ${(total + taxaValue).toFixed(2)}</h4>`;
}

// LÓGICA DE REMOVER ITEM DO CARRINHO
function removeProductFromCart(cartId) {
    // Filtra o carrinho para remover o item com o ID único
    cart = cart.filter(item => item.id !== cartId);
    
    // Se o carrinho ficar vazio, fecha o modal
    if(cart.length === 0){
        closeCartModal();
    } else {
        renderCartModal(); // Re-renderiza o modal para atualizar a lista e o total
    }
    updateCartCount();
}

// FORMATAR E ENVIAR WHATSAPP (A MELHORIA QUE VOCÊ PEDIU)
function sendWhatsApp() {
    const nome = document.getElementById('cust-name').value;
    const endereco = document.getElementById('cust-address').value;
    const bairroSelect = document.getElementById('cust-bairro');
    const bairro = bairroSelect.selectedOptions[0].text;
    const taxa = parseFloat(bairroSelect.value);
    const pagto = document.getElementById('cust-payment').value;
    
    if(!nome || !endereco || taxa === 0 || cart.length === 0) return alert("Preencha Nome, Endereço e selecione o Bairro de Salinas para o pedido!");

    let subtotal = 0;
    // Resumir itens para o Zap
    let summaryCart = {};
    cart.forEach(item => {
        // Usa o nome final (com tamanho/adicionais) para o resumo
        if (!summaryCart[item.nome]) {
            summaryCart[item.nome] = {...item, quantity: 0};
        }
        summaryCart[item.nome].quantity += 1;
        subtotal += item.preco;
    });

    let totalGeral = subtotal + taxa;

    // A MENSAGEM FORMATADA
    let mensagem = `*PEDIDO SORVETE AMIGO SALINAS*\n`;
    mensagem += `*Cliente:* ${nome}\n`;
    mensagem += `*Endereço:* ${endereco}\n`;
    mensagem += `*Bairro:* ${bairro}\n`;
    mensagem += `--------------------------\n`;
    
    // Lista de itens resumida (ex: 2x CALOR Açaí (440ml)... )
    Object.values(summaryCart).forEach(item => {
        mensagem += `• ${item.quantity}x ${item.nome}`;
        // Se tiver complexOptions (adicionais), adiciona na mensagem do zap
        if(item.complexOptions){
            mensagem += ` - (${item.desc})`;
        }
        mensagem += ` - (R$ ${item.preco.toFixed(2)})\n`;
    });
    
    mensagem += `--------------------------\n`;
    mensagem += `*TOTAL:* R$ ${totalGeral.toFixed(2)}\n`;
    mensagem += `--------------------------\n`;
    mensagem += `*Pagamento:* ${pagto}\n`;

    const url = `https://wa.me/5538988353543?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}