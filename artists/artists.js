window.addEventListener('scroll', ()=>{
    if (scrollY > 150) {
        document.querySelector('nav').classList.add('fixed')
        document.querySelector('.MainBlock').style.marginTop = "220px"
    } else {
        document.querySelector('nav').classList.remove('fixed')
        document.querySelector('.MainBlock').style.marginTop = "0"
    }
})
let SingersBlock = document.querySelector('.singers')
let artistsInformations = [
    {
        Name: 'MiyaGi',
        imgUrl: "https://sefon.pro/img/artist_photos/miyagi.jpg"
    },
    {
        Name: "Король и Шут",
        imgUrl: "https://sefon.pro/img/artist_photos/korol-i-shut.jpg"
    },
    {
        Name: "Руки Вверх",
        imgUrl: "https://sefon.pro/img/artist_photos/ruki-vverh.jpg"
    },
    {
        Name: "Виктор Цой",
        imgUrl: "https://sefon.pro/img/artist_photos/viktor-tsoj.jpg"
    },
    {
        Name: "Юрий Шатунов",
        imgUrl: "https://sefon.pro/img/artist_photos/yurij-shatunov.jpg"
    },
    {
        Name: "Сектор Газа",
        imgUrl: "https://sefon.pro/img/artist_photos/sektor-gaza.jpg"
    },
    {
        Name: "Jony",
        imgUrl: "https://sefon.pro/img/artist_photos/jony.jpg"
    },
    {
        Name: "Михаил Круг",
        imgUrl: "https://sefon.pro/img/artist_photos/mihail-krug.jpg"
    },
    {
        Name: "Zivert",
        imgUrl: "https://sefon.pro/img/artist_photos/zivert.jpg"
    },
    {
        Name: "Ленинград",
        imgUrl: "https://sefon.pro/img/artist_photos/leningrad.jpg"
    },
    {
        Name: "Бутырка",
        imgUrl: "https://sefon.pro/img/artist_photos/butyrka.jpg"
    },
    {
        Name: "Ислам Итляшев",
        imgUrl: "https://sefon.pro/img/artist_photos/islam-itlyashev.jpg"
    },
    {
        Name: "Rammstein",
        imgUrl: "https://sefon.pro/img/artist_photos/rammstein.jpg"
    },
    {
        Name: "Григорий Лепс",
        imgUrl: "https://sefon.pro/img/artist_photos/grigorij-leps.jpg"
    },
    {
        Name: "BTS",
        imgUrl: "https://sefon.pro/img/artist_photos/bts.jpg"
    },
    {
        Name: "Макс Корж",
        imgUrl: "https://sefon.pro/img/artist_photos/maks-korzh.jpg"
    },
    {
        Name: "Би-2",
        imgUrl: "https://sefon.pro/img/artist_photos/bi-2.jpg"
    },
    {
        Name: "Стас Михайлов",
        imgUrl: "https://sefon.pro/img/artist_photos/stas-mihajlov.jpg"
    },
    {
        Name: "Andy Panda",
        imgUrl: "https://sefon.pro/img/artist_photos/andy-panda.jpg"
    },
    {
        Name: "Баста",
        imgUrl: "https://sefon.pro/img/artist_photos/basta.jpg"
    },
    {
        Name: "Олег Винник",
        imgUrl: "https://sefon.pro/img/artist_photos/oleg-vinnik.jpg"
    },
    {
        Name: "Океан Ельзи",
        imgUrl: "https://sefon.pro/img/artist_photos/okean-elzi.jpg"
    },
    {
        Name: "Modern Talking",
        imgUrl: "https://sefon.pro/img/artist_photos/modern-talking.jpg"
    },
    {
        Name: "Ария",
        imgUrl: "https://sefon.pro/img/artist_photos/ariya.jpg"
    },
    {
        Name: "HammAli And Navai",
        imgUrl: "https://sefon.pro/img/artist_photos/hammali-and-navai.jpg"
    },
    {
        Name: "Eminem",
        imgUrl: "https://sefon.pro/img/artist_photos/eminem.jpg"
    },
    {
        Name: "Инна Вальтер",
        imgUrl: "https://sefon.pro/img/artist_photos/inna-valter.jpg"
    },
    {
        Name: "Егор Крид",
        imgUrl: "https://sefon.pro/img/artist_photos/egor-krid.jpg"
    },
    {
        Name: "Ани Лорак",
        imgUrl: "https://sefon.pro/img/artist_photos/ani-lorak.jpg"
    },
    {
        Name: "Михаил Шуфутинский",
        imgUrl: "https://sefon.pro/img/artist_photos/mihail-shufutinskij.jpg"
    },
    {
        Name: "Скриптонит",
        imgUrl: "https://sefon.pro/img/artist_photos/skriptonit.jpg"
    },
    {
        Name: "Imagine Dragons",
        imgUrl: "https://sefon.pro/img/artist_photos/imagine-dragons.jpg"
    },
    {
        Name: "NЮ",
        imgUrl: "https://sefon.pro/img/artist_photos/nyu.jpeg"
    },
    {
        Name: "Ирина Круг",
        imgUrl: "https://sefon.pro/img/artist_photos/irina-krug.jpg"
    },
    {
        Name: "Владимир Высоцкий",
        imgUrl: "https://sefon.pro/img/artist_photos/vladimir-vysotskij.jpg"
    },
    {
        Name: "ЭGO",
        imgUrl: "https://sefon.pro/img/artist_photos/ehgo.jpg"
    },
    {
        Name: "Виктор Королёв",
        imgUrl: "https://sefon.pro/img/artist_photos/viktor-korolev.jpg"
    },
    {
        Name: "Земфира",
        imgUrl: "https://sefon.pro/img/artist_photos/zemfira.jpg"
    },
    {
        Name: "Каспийский Груз",
        imgUrl: "https://sefon.pro/img/artist_photos/kaspijskij-gruz.jpg"
    },
]


for (let i = 0; i < artistsInformations.length; i++) {
    let link = document.createElement('a')
    SingersBlock.append(link)
    link.setAttribute('href', './about-artist/about-artist.html')

    let singer = document.createElement('div')
    singer.className = "singer";
    link.append(singer);
    
    let singerImg = document.createElement("div")
    singerImg.className = 'singerImg'
    singer.append(singerImg);

    let img = document.createElement('img');
    img.setAttribute('src', artistsInformations[i].imgUrl)
    singerImg.append(img)

    let singerMusic = document.createElement('div');
    singerMusic.className = "singerMusic";
    singerImg.append(singerMusic);

    let PlayIcon = document.createElement('i');
    PlayIcon.className = "fa fa-play"
    singerMusic.append(PlayIcon);

    let artistName = document.createElement('h4');
    singer.append(artistName);
    artistName.innerHTML = artistsInformations[i].Name
}
let commentsBlock = document.querySelector('commentsBlock')
const inText = document.getElementById('comment')
const outText = document.getElementById('outText')
const delay = 1000

let timer
inText.addEventListener('input', code => {
  clearTimeout(timer);
  timer = setTimeout(x => {
    localStorage.setItem('inputValue', inText.value)
  }, delay, code)
})

let val312321 = localStorage.getItem('inputValue');
console.log(val312321);
function create() {
    let comment = document.createElement('div')
    comment.className = "comment"
    commentsBlock.append(comment)

    let fromWhom = document.createElement('div')
    fromWhom.className = "fromWhom"
    comment.append(fromWhom)

    let who = document.createElement('h4');
    fromWhom.append(who);
    
    let text = document.createElement('p');
    comment.append(text)
    text.innerHTML = localStorage.getItem('inputValue')
}


document.querySelector('.sendComment').addEventListener('click', create)