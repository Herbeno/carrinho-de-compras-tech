// Criando a varíável para somar o valor total da compra     
let totalGeral;
limpar();
    
// No caso desse projeto, a primeira coisa que fazemos é criar as funções dos botões, que são adicionar para adicionar um produto ao carrinho, e  limpar para tirar todos os produtos do carrinho.
function adicionar() {
    // Aqui iremos recuperar os valores do nome, quantidade e valor dos produtos
    let produto = document.getElementById('produto').value;
    // Usaremmos o 'split' que é uma função do JS em que você dá o caractere que você quer usar como separador e ele devolve um array separando todas as vezes que esse caractere aparecer
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    // Código para fazer uma validação para que apareça um alerta e a função não continue caso o usuário colocar um número que não seja valido no campo de quantidade.
    if (quantidade <= 0) {
        alert('Por favor, escolha uma quantidade válida.')
        return
    }
    
    // Somando o preço
    let preco = quantidade * valorUnitario;
    
    // Adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;
    // Somar o valor total da compra
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}
    
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}