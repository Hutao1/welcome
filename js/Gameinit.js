var urlload = ['logo1','logo2','logo3'];
var imgjson = {};
loadingimg();
function  loadingimg() {


}
class Gameinit {
    constructor(){
        this.init()
    }
    init(){
        console.log('init')
        var loadingnum = 0;
        var _this = this;
        for(let i = 0; i < urlload.length;i++){
            var img = new Image();
            console.log(i)
            img.onload = function () {
                loadingnum++;
                imgjson[urlload[i]] = this;
                _this.setloadingshow(loadingnum,urlload.length);
                if(loadingnum == urlload.length){
                    console.log('完成')
                    _this.gamestart()
                }
            }
            img.src = './img/game/'+urlload[i]+'.png'
        }
    }
    //加载完成初始化
    gamestart(){
        this.createenergy();
    }
    //显示图片加载进度条
    setloadingshow(nownum,allnum) {

    }
    //创建能量
    setenergy(){
        var createnergy = $('<img src="./img/game/'+urlload[getRandom(0,2)]+'.png"/>');
        // createnergy.css({'width':'1rem','height':'1rem','left':getRandom(0,document.body.clientWidth-createnergy.width)});
        createnergy.addClass('gameimg');
        $('.content').append(createnergy)
        createnergy.css({'width':'1rem','height':'1rem'});
        createnergy.css({'left':getRandom(0,document.body.clientWidth-createnergy[0].width),'top':-createnergy[0].height});
        /*createnergy.animate({top:document.body.clientHeight+100+'px'},2000,'linear',function () {
            $(this).remove()
        })*/
        this.sportmove(createnergy[0],{top:document.body.clientHeight+100},3000,function () {
            console.log('结束')
        })
    }
    createenergy() {
        setTimeout(()=>{
            this.setenergy()
            this.createenergy()
        },getRandom(500,1000))
    }

    //获得能量
    getenergy(){

    }
    sportmove(el,options,time,callback){
        // var startleft = el.style.left;
        var starttop = parseFloat(el.style.top);
        console.log(starttop)
        // var endleft = options.left;
        var endtop = options.top;
        // var leftdiffer = endleft-startleft;
        // var leftstep = leftdiffer/time*40;
        var topdiffer = endtop-starttop;
        var topstep = topdiffer/time*40;
        var timer = setInterval(()=>{
            el.style.top =parseFloat(el.style.top)+topstep+'px';
            if(parseInt(el.style.top)>endtop){
                el.remove();
                callback();
                clearInterval(timer)
            }
            // el.style.left +=
        },30)
    }
}

