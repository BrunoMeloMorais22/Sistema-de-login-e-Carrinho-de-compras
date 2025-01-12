


document.getElementById('formCadastro').addEventListener('submit', function(event){
    event.preventDefault()

    let emailCadastro = document.getElementById('emailCadastro').value
    let senhaCadastro = document.getElementById('senhaCadastro').value
    let confirmarsenha = document.getElementById('confirmarsenha').value
    let feedbackCadastro = document.getElementById('feedbackCadastro')


    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(confirmarsenha !== senhaCadastro){
        feedbackCadastro.textContent = "As senhas não combinam"
        feedbackCadastro.style.color = "red"
        return
    }

    if(regex.test(senhaCadastro)){
        localStorage.setItem('email', emailCadastro)
        localStorage.setItem('senha', senhaCadastro)

        feedbackCadastro.textContent = "Conta criada com sucesso"
        feedbackCadastro.style.color = "green"
    }
    else{
        feedbackCadastro.textContent = "A senha precisa conter pelo menos: \n 8 caracteres \n 1 letra Maiúscula \n 1 caractere especial \n 1 Número"
        feedbackCadastro.style.color = "red"
    }

})

document.getElementById('formLogin').addEventListener('submit', function(event){
    event.preventDefault()
    let emailLogin = document.getElementById('emailLogin').value
    let senhaLogin = document.getElementById('senhaLogin').value
    let feedbackLogin = document.getElementById('feedbackLogin')

    const emailSalvo = localStorage.getItem('email')
    const senhaSalva = localStorage.getItem('senha')

    if(emailLogin === emailSalvo && senhaLogin === senhaSalva){
        feedbackLogin.textContent = "Login Bem-Sucedido"
        feedbackLogin.style.color = "green"
    }
    else{
        feedbackLogin.textContent = "Email ou Senha Inválidos"
        feedbackLogin.style.color = "red"
    }
})

function adicionar(){
    let produto = document.getElementById('produto').value
    let li = document.createElement('li')
    let p = document.createElement('p')

    li.textContent = produto
    p.textContent = "Seu produto foi adicionado ao carrinho"

    li.onclick = () => li.remove()

    document.getElementById('info').appendChild(li)
    document.body.appendChild(p)

    setTimeout(() => {
        p.remove()
    }, 2000);
    
}

let cart = {
    itens: 0,
    total: 0
}

document.getElementById('add-to-cart').addEventListener('click', function(){
    cart.itens++;
    cart.total+= 50;
    updatecart()
})

function updatecart(){
    document.getElementById('cart-itens').textContent = "Itens no carrinho: " + cart.itens
    document.getElementById('cart-total').textContent = "Total R$: " + cart.total.toFixed(2)
}
