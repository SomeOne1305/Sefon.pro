
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
    //     function playPauseMusic(){
        audio.setAttribute('src', source);
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
        document.querySelector('.pauseAndplay i.fa').classList.remove('fa-play')
        document.querySelector('.pauseAndplay i.fa').classList.add('fa-pause')
        audio.play()
      
    } else{
            icon[index].classList.remove('fa-pause')
            icon[index].classList.add('fa-play');
            document.querySelector('.pauseAndplay i.fa').classList.add('fa-play')
            document.querySelector('.pauseAndplay i.fa').classList.remove('fa-pause')
            audio.pause()
    }
    })
})
document.querySelector('.pauseAndplay').addEventListener

let likeBtn = document.querySelectorAll('.like i');
let likeNumber = document.querySelectorAll('.like span');
likeBtn.forEach((item, index)=>{
    item.addEventListener('click',function liked(){
        this.classList.toggle('liked')
    })
})

function setProgress(e){
    const height = this.clientHeight;
    const clickY = e.offsetY
    const volume = audio.volume

    audio.volume = (clickY / height) * volume;
    document.querySelector('.volumePercent').style.height = audio.volume * 100 + "%";

}

document.querySelector('.volume').addEventListener('click', setProgress);

document.querySelector('.voice').addEventListener('click', ()=>{
    document.querySelector('.voiceController').classList.toggle('visible')
})
