window.addEventListener('scroll', ()=>{
    if (scrollY > 150) {
        document.querySelector('nav').classList.add('fixed')
        document.querySelector('.MainBlock').style.marginTop = "220px"
    } else {
        document.querySelector('nav').classList.remove('fixed')
        document.querySelector('.MainBlock').style.marginTop = "0"
    }
})

// document.querySelector('.playOrPause').addEventListener('click', ()=>{
//     if (document.querySelector('.playOrPause i.fa').classList.contains('fa-play')) {
//         document.querySelector('.playOrPause i.fa').classList.add('fa-pause')
//         document.querySelector('.playOrPause i.fa').classList.remove('fa-play')
//     } else {
//         document.querySelector('.playOrPause i.fa').classList.remove('fa-pause')
//         document.querySelector('.playOrPause i.fa').classList.add('fa-play')
//     }
// })
// function change() {
//     if (document.querySelector('.playOrPause i.fa').classList.contains('fa-play')) {
//         document.querySelector('.playOrPause i.fa').classList.add('fa-pause')
//         document.querySelector('.playOrPause i.fa').classList.remove('fa-play')
//     } else {
//         document.querySelector('.playOrPause i.fa').classList.remove('fa-pause')
//         document.querySelector('.playOrPause i.fa').classList.add('fa-play')
//     }
// }
let icon = document.querySelectorAll('.playOrPause i.fa');
let btns = document.querySelectorAll('.playOrPause');
btns.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        if (icon[index].classList.contains('fa-play')) {
            icon[index].classList.add('fa-pause');
            icon[index].classList.remove('fa-play');
        } else {
            icon[index].classList.remove('fa-pause');
            icon[index].classList.add('fa-play');
        }
    })
})

// let likeBtn = document.querySelectorAll('.like i');
// likeBtn.forEach((item, index)=>{
//     item.addEventListener('click',()=>{
//         item[1].classList.toggle('liked')
//     })
// })

