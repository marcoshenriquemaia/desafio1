const campos = [...document.querySelectorAll('.campo-cadastro')];
const campoNome = document.querySelector('.campo-primeiro-nome');
const campoSobrenome = document.querySelector('.campo-sobrenome');
const campoEmail = document.querySelector('.campo-email');
const campoSenha = document.querySelector('.campo-senha');
const campoConfirmarSenha = document.querySelector('.campo-confirmar-senha');
const botaoCadastrar = document.querySelector('.botao-cadastrar');
const aviso = document.querySelector('.aviso');
const containerCadastro = document.querySelector('.container-cadastro');

botaoCadastrar.addEventListener('click', e =>{
    textarCampos();
    if (campoSenha.value != campoConfirmarSenha.value){
        aviso.textContent = 'As senhas não são iguais';
        
    }else if ((campoSenha.value == campoConfirmarSenha.value) && (campoSenha.value != '')){
        containerCadastro.innerHTML = '';
    }
})

const criaConfirmacao = () =>{
    const boxConfirmacao = document.createElement('div');
    boxConfirmacao.classList.add('box-confirmacao');

    const textConfirmacao = document.createElement('span');
    textConfirmacao.classList.add('text-confirmacao');
    textConfirmacao.textContent = 'Cadastrado com sucesso';

    boxConfirmacao.appendChild(textConfirmacao);
    containerCadastro.appendChild(boxConfirmacao);
};

const textarCampos = () =>{
    campos.map(campo =>{
        if (campo.value == ''){
            aviso.textContent = `O campo ${campo} não está preeenchido`;
        }
    })
};