
window.addEventListener('scroll', ()=>{
    if (scrollY > 150) {
        document.querySelector('nav').classList.add('fixed')
        document.querySelector('.MainBlock').style.marginTop = "220px"
    } else {
        document.querySelector('nav').classList.remove('fixed')
        document.querySelector('.MainBlock').style.marginTop = "0"
    }
})

let musicSources = [
    './musics/music1.mp3',
    './musics/music2.mp3'
];

let icon = document.querySelectorAll('.playOrPause i.fa');
let btns = document.querySelectorAll('.playOrPause');
let audio = document.querySelector('.MusicPlayer audio')
let like = document.querySelector('.like')

// btns.forEach( async (item, index)=>{
//     let source = item.getAttribute('data-music-name');
//     item.addEventListener('click',()=>{
//     //     function playPauseMusic(){
//         audio.setAttribute('src', source);
//     //    }
//     //    playPauseMusic()
//     document.querySelector('.fullDuration').innerHTML = Math.floor(audio.duration)
//     if (icon[index].classList.contains('fa-play')) {
//         btns.forEach((item, index) =>{
//             icon[index].classList.remove('fa-pause')
//             icon[index].classList.add('fa-play')
//             audio.pause()
//         })
//         icon[index].classList.add('fa-pause');
//         icon[index].classList.remove('fa-play');
//         document.querySelector('.pauseAndplay i.fa').classList.remove('fa-play')
//         document.querySelector('.pauseAndplay i.fa').classList.add('fa-pause')
//         audio.play()
      
//     } else{
//             icon[index].classList.remove('fa-pause')
//             icon[index].classList.add('fa-play');
//             document.querySelector('.pauseAndplay i.fa').classList.add('fa-play')
//             document.querySelector('.pauseAndplay i.fa').classList.remove('fa-pause')
//             audio.pause()
//     }
//     })
// })
function playMusic(item, index) {
        btns.forEach((item, index) =>{
            icon[index].classList.remove('fa-pause')
            icon[index].classList.add('fa-play')
            item.classList.remove('isActive')
            item.classList.remove('isPause')
        })
        icon[index].classList.add('fa-pause');
        icon[index].classList.remove('fa-play');
        document.querySelector('.pauseAndplay i.fa').classList.remove('fa-play')
        document.querySelector('.pauseAndplay i.fa').classList.add('fa-pause')
        audio.play()
        item.classList.add('isActive')
        
}
function pauseMusic(item, index) {
            icon[index].classList.remove('fa-pause')
            icon[index].classList.add('fa-play');
            document.querySelector('.pauseAndplay i.fa').classList.add('fa-play')
            document.querySelector('.pauseAndplay i.fa').classList.remove('fa-pause')
            audio.pause()
            item.classList.add('isPause')
}
function fullDur() {
    let duration = audio.duration
    let min = Math.floor(duration/60);
    let sec = Math.floor(duration%60);
    if (min < 10 && sec < 10) {
        document.querySelector('.fullDuration').innerHTML = `0${min}`+ ':' +`0${sec}`
    }else if(min < 10 && sec > 10){
        document.querySelector('.fullDuration').innerHTML = `0${min}` + ':' + `${sec}`
    }else {
        document.querySelector('.fullDuration').innerHTML = `${min}` + ':' + `${sec}`
    }
}
btns.forEach((item, index)=>{
   
    item.addEventListener('click', ()=>{
        if (item.querySelector('i.fa').classList.contains('fa-play')) {
            if(item.classList.contains('isActive')){
                fullDur();
                if (item.classList.contains('isPause')) {
                    playMusic(item, index)
                }else{
                    pauseMusic(item, index)
                }
            }else{
                audio.src = item.getAttribute('data-music-name')
                playMusic(item, index)
            }
        }else{
            pauseMusic(item, index)
        }
    })

    
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

let hearts = document.querySelectorAll('.like');
let dislike = document.querySelectorAll('.dislike');
let span1 = document.querySelectorAll('.dislike span');
let span = document.querySelectorAll('.like span');
span.forEach(item=>{
   item.innerHTML = 0;

})
span1.forEach(item=>{
   item.innerHTML = 0;

})
hearts.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.querySelector('i').style.color = "#FC5D5D"
        item.querySelector('i').style.webkitTextStroke = "none"
        let number = 0;
        item.querySelector('span').innerHTML = number;
        item.querySelector('span').innerHTML = +(number + 1)
    })
})
dislike.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.querySelector('i').style.webkitTextStroke = "2px #FC5D5D"
        let number = 0;
        item.querySelector('span').innerHTML = number;
        item.querySelector('span').innerHTML = +(number + 1)
    })
})

