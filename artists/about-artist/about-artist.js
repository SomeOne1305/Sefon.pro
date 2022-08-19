window.addEventListener('scroll', ()=>{
    if (scrollY > 150) {
        document.querySelector('nav').classList.add('fixed')
        document.querySelector('.MainBlock').style.marginTop = "220px"
    } else {
        document.querySelector('nav').classList.remove('fixed')
        document.querySelector('.MainBlock').style.marginTop = "0"
    }
})