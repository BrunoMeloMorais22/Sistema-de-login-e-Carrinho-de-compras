


document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()

    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value
    let feedback = document.getElementById('feedback')

    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(regex.test(senha)){
        feedback.textContent = "Login Bem-Sucedido"
        feedback.style.color = "green"
    }
    else{
        feedback.textContent = "A senha precisa conter pelo menos: \n 8 caracteres \n 1 letra Maiúscula \n 1 caractere especial \n 1 Número"
        feedback.style.color = "red"
    }

})

function adicionar(){
    let produto = document.getElementById('produto').value
    let li = document.createElement('li')
    let p = document.createElement('p')

    li.textContent = produto

    document.getElementById('info').appendChild(li)
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