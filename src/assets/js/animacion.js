window.onload = function() {
    let hamburguer = document.getElementById('hamburguer')
    let side = document.getElementById('side')
    let cart = document.getElementById('cart')
    let cartContainer = document.getElementById('cartContainer')
    let cartBack =document.getElementById('cartBack')
    let cartSide = document.getElementById('cart-side')
    let body = document.getElementsByTagName('body')
    hamburguer.addEventListener('click', ()=>{
        window.scroll(0,0) 
        if(hamburguer.classList.contains('hamburguer')){
            hamburguer.classList.remove('hamburguer')
            hamburguer.classList.add('close')
            side.classList.add('open')
            body[0].classList.toggle('overflow')

        }else{
            hamburguer.classList.add('hamburguer')
            hamburguer.classList.remove('close')
            side.classList.remove('open')
            cart.classList.remove('open')
            body[0].classList.toggle('overflow')

        }
    })

    cartContainer.addEventListener('click', () =>{
        cartContainer.classList.toggle('cartContainer')
        cart.classList.toggle('d-none')
        cartBack.classList.toggle('d-none')
        cartSide.classList.toggle('open')
        body[0].classList.toggle('overflow')
    })
    
};





