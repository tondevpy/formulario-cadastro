let container = document.createElement('div')
container.id = 'container'
document.body.appendChild(container)

let containerItems = document.createElement('div')
containerItems.id = 'containerItems'
container.appendChild(containerItems)

let form = document.createElement('form')
form.id = 'formulario'
containerItems.appendChild(form)

let titulo = document.createElement('h1')
titulo.innerText = 'Cadastro'

let inputName = document.createElement('input')
inputName.type = 'text'
inputName.id = 'nome'
inputName.placeholder = 'Informe seu nome'
inputName.required = 'true'

let inputLastName = document.createElement('input')
inputLastName.type = 'text'
inputLastName.id = 'sobrenome'
inputLastName.placeholder = 'Informe seu sobrenome'
inputLastName.required = 'true'

let inputEmail = document.createElement('input')
inputEmail.type = 'email'
inputEmail.id = 'email'
inputEmail.placeholder = 'Informe seu email'
inputEmail.required = 'true'

let inputPassword = document.createElement('input')
inputPassword.type = 'password'
inputPassword.id = 'senha'
inputPassword.placeholder = 'Informe sua senha'
inputPassword.required = 'true'

let btnCadastrar = document.createElement('button')
btnCadastrar.innerText = 'Cadastrar'
btnCadastrar.id = 'cadastrar'



form.append(titulo,inputName,inputLastName,inputEmail,inputPassword, btnCadastrar)

let cadastros = []

let cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', function(ev) {
    ev.preventDefault(); // Evitar a atualização automática da página
  
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    if (nome) {
      cadastros.push({ nome: nome, sobrenome: sobrenome, email: email, senha: senha });
  
      // Criar um elemento para exibir as informações do cadastro
      const cadastroInfo = document.createElement('p');
      cadastroInfo.innerText = `Nome: ${nome}\nSobrenome: ${sobrenome}\nEmail: ${email}\nSenha: ${senha}`;
  
      // Adicionar o elemento ao formulário ou a outro local apropriado no DOM
      form.appendChild(cadastroInfo);
  
      console.log(cadastros);
    }
  });
  