window.onload = function() {
    let hamburguer = document.getElementById('hamburguer')
    hamburguer.addEventListener('click', ()=>{
        if(hamburguer.classList.contains('hamburguer')){
            hamburguer.classList.remove('hamburguer')
            hamburguer.classList.add('close')
        }else{
            hamburguer.classList.add('hamburguer')
            hamburguer.classList.remove('close')
        }
    })
};



