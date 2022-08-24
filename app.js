
window.addEventListener('scroll', ()=>{
    if (scrollY > 150) {
        document.querySelector('nav').classList.add('fixed')
        document.querySelector('.MainBlock').style.marginTop = "220px"
    } else {
        document.querySelector('nav').classList.remove('fixed')
        document.querySelector('.MainBlock').style.marginTop = "0"
    }
})
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
document.querySelector('.pauseAndplay').addEventListener('click', ()=>{
})

let likeBtn = document.querySelectorAll('.like i');
let likeNumber = document.querySelectorAll('.like span');
likeBtn.forEach((item, index)=>{
    item.addEventListener('click',function liked(){
        this.classList.toggle('liked')
    })
})

// function setProgress(e){
//     const height = this.clientHeight;
//     const clickY = e.offsetY

//    document.querySelector('.volumePercent').style.height = (clickY / height) *100  + '%';
//     console.log((clickY / height) *100  + '%')
// }
// document.querySelector('.volume').addEventListener('click', setProgress)