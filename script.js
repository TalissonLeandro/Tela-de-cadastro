document.getElementById('cadastroForm').addEventListener('submit', function (event) {
  event.preventDefault();

  //Pega os elementos pelo ID definido no HTML e armazena em uma constante

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  
  const telefone = document.getElementById('telefone').value;

  const lista = document.getElementById('listaUsuarios');
  const item = document.createElement('li');
  item.textContent = `Nome: ${nome} | Email: ${email} | Telefone: ${telefone}`;
  lista.appendChild(item);

  // Limpar formulário e apresenta um alerta no navegador
  document.getElementById('cadastroForm').reset();
  alert("Usuário cadastrado com sucesso!")
  
});
