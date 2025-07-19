const backPromo = document.querySelector('.backPromo')

console.log(backPromo)

backPromo.addEventListener('click', ()=>{
    if(backPromo.classList.contains('back1')){
        backPromo.classList.remove('back1')
        backPromo.classList.add('back2')
    }else if(backPromo.classList.contains('back2')){
backPromo.classList.remove('back2')
        backPromo.classList.add('back1')
     }
})