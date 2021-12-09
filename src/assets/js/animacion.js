window.onload = function() {
    let hamburguer = document.getElementById('hamburguer')
    let side = document.getElementById('side')
    let body = document.getElementsByTagName('body')
    hamburguer.addEventListener('click', ()=>{
        window.scroll(0,0) 
        if(hamburguer.classList.contains('hamburguer')){
            hamburguer.classList.remove('hamburguer')
            hamburguer.classList.add('close')
            side.classList.add('open')
            body[0].style.overflow = 'hidden'
        }else{
            hamburguer.classList.add('hamburguer')
            hamburguer.classList.remove('close')
            side.classList.remove('open')
            body[0].style.overflow = ''
        }
    })
};





