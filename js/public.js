//屏幕适配自适应
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 640) deviceWidth = 640;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

function  indexbackmusic() {
    var musicbg =new Audio();
    musicbg.src = './audio/index.mp3';
    musicbg.autoplay=true;
    musicbg.loop = true;
}
function  startinvite() {
    var musicbg =new Audio();
    musicbg.src = './audio/starivite.mp3';
    musicbg.autoplay=true;
    musicbg.loop = true;
}
function  gamebeforemusic() {
    var musicbg =new Audio();
    musicbg.src = './audio/gamebefore.mp3';
    musicbg.autoplay=true;
    musicbg.loop = true;
}
function  gamemusic() {
    var musicbg =new Audio();
    musicbg.src = './audio/game.mp3';
    musicbg.autoplay=true;
    musicbg.loop = true;
}
function  playbackground() {
    var musicbg =new Audio();
    musicbg.src = './audio/background.mp3';
    musicbg.autoplay=true;
    musicbg.loop = true;
}
function playbirdbg() {
    var musicbg =new Audio();
    musicbg.src = './audio/background.mp3';
    musicbg.autoplay=true;
    musicbg.loop = true;
    /*var musicbird1 = new Audio()
    musicbird1.src = './audio/bird1.mp3';
    var musicbird2 = new Audio()
    musicbird2.src = './audio/bird2.mp3';*/
    var musicbird3 = new Audio()
    musicbird3.src = './audio/bird3.mp3';
    // musicbird3.volume = musicbird2.volume = musicbird3.volume = 0;
    musicbird3.onloadedmetadata = function () {
        setTimeout(()=>{
            musicbird3.play()
        },4000)
    }
    var arr =[5000,10000]
    musicbird3.onended = function () {
        setTimeout(()=>{
            musicbird3.play()
        },arr[Math.floor(Math.random()*2)])
    }
    /*musicbird2.onended = function () {
        setTimeout(()=>{
            musicbird1.play()
        },3000)
    }
    musicbird1.onended = function () {
        setTimeout(()=>{
            musicbird3.play()
        },3000)
    }*/
}
function  playtouch() {
    var musicbg =new Audio();
    musicbg.src = './audio/touch.mp3';
    musicbg.autoplay=true;
    // document.querySelector('.touchbg').play()
}

function getRandom(min,max) {
    var num = Math.floor(Math.random()*(max-min+1)+min);
    return num;
}

