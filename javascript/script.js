och1=0
function rand_bu2(){
    interval=setInterval(rand_bu, 500)
}

vip1=Math.floor(Math.random()*2)
function rand_bu(){

    vip1=Math.floor(Math.random()*2)
    if(vip1<1){
        button.src='img/green_button.png'
    } if(vip1>=1){
        button.src='img/red_button.png'
    }

}


var time1=60
function tim2(){
interval3=setInterval(timer, 1000)
start.src=""
}
function timer(){

    time1--;
    time.innerHTML='Осталось: '+time1;
    if(time1<0){
        och1=0;
        ochk.innerHTML='Очки: '+och1;
        time.innerHTML='Игра окончена'
        button.src=''
        clearInterval(interval)
        clearInterval(interval3)
        start.src='img/yellow_button.png'
        time1=60
        
    }
}



function schet(){
    if(vip1<1){

        och1=och1+200;
        ochk.innerHTML='Очки: '+och1;

    } else{
        och1=och1-500;
        ochk.innerHTML='Очки: '+och1;
    }
}

function check(){
    if(och1>=2000){
        time.innerHTML='Поздравляю, вы победили!'
        button.src='img/Salut.gif'
        clearInterval(interval)
        clearInterval(interval3)
        start.src='img/yellow_button.png'
        och1=0;
        ochk.innerHTML='Очки: '+och1;
        clearInterval(interval3)
        time1=60
    } if(och1<=-1000){
        time.innerHTML='К сожалению, вы проиграли :('
        button.src='img/loose.jpg'
        clearInterval(interval)
        clearInterval(interval3)
        start.src='img/yellow_button.png'
        och1=0;
        ochk.innerHTML='Очки: '+och1;
        clearInterval(interval3)
        time1=60
    }
}
