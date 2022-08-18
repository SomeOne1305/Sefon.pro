
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
let audio = document.querySelector('.MusicPlayer audio')
let like = document.querySelector('.like')




btns.forEach( async (item, index)=>{
    let source = item.getAttribute('data-music-name');
    
    item.addEventListener('click',()=>{
       
        audio.setAttribute('src', source);

    //     function playPauseMusic(){

    //    }
    //    playPauseMusic()
 
    if (icon[index].classList.contains('fa-play')) {
        btns.forEach((item, index) =>{
            icon[index].classList.remove('fa-pause')
            icon[index].classList.add('fa-play')
            audio.pause()
        })
        icon[index].classList.add('fa-pause');
        icon[index].classList.remove('fa-play');
        audio.play()
      
    } else{
            icon[index].classList.remove('fa-pause')
            icon[index].classList.add('fa-play');
            audio.pause()
    }
    })
})

// let likeBtn = document.querySelectorAll('.like i');
// likeBtn.forEach((item, index)=>{
//     item.addEventListener('click',()=>{
//         item[1].classList.toggle('liked')
//     })
// })

