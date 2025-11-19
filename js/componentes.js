async function carregarComponente(caminho, seletor) {
  try {
    const resposta = await fetch(caminho);
    const html = await resposta.text();
    document.querySelector(seletor).innerHTML = html;
  } catch (erro) {
    console.error('Erro ao carregar componente:', erro);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  carregarComponente('componentes/header.html', 'header');
  carregarComponente('componentes/footer.html', 'footer');
});