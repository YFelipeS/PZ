var tajertas_destapadas=0;
var tarjeta1=null;
var tarjeta2=null;
var primer_numero=null;
var segundo_numero=null;
var movimientos=null;
var aciertos=0;
var temporizador=false;
var timer=30;
var timer_inicial=30;
var tiempo_regresivo=null;
var tarjetabloqueada=null;
var click=new Audio('sounds/sound.wav');
var correcto=new Audio('sounds/correcto.wav');
var win=new Audio('sounds/win.wav');
var cuenta_regresiva=new Audio('sounds/cuenta_regresiva.wav');
var Game_Over=new Audio('sounds/Game_Over.wav');
var lose=new Audio('sounds/lose.wav');
var mostar_mov=document.getElementById("movimientos");
var mostraraciertos=document.getElementById("aciertos");
var mostrartiempo=document.getElementById("t-restante");







var numbers=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers=numbers.sort(()=>{return Math.random()-0.5});


function contartiempo(){
    tiempo_regresivo=setInterval(()=>{
        timer--;
        mostrartiempo.innerHTML=`Tiempo: ${timer} segundos`
        
        if(timer<8 && timer>1){
            cuenta_regresiva.play();
        }
        if(timer==0){
            clearInterval(tiempo_regresivo);
            bloqueartarjetas();

        }
    },1000);
}




function destapar(id){

    if(temporizador==false){
        contartiempo();
        temporizador=true;
    }




    tajertas_destapadas++;
    if(tajertas_destapadas==1){
        click.play();
        tarjeta1=document.getElementById(id);
        primer_numero=numbers[id];
        tarjeta1.innerHTML=`<img src="images/${primer_numero}.png"></img>`;


        tarjeta1.disabled=true;
    }else if(tajertas_destapadas==2){
        tarjeta2=document.getElementById(id);
        segundo_numero=numbers[id];
        tarjeta2.innerHTML=`<img src="images/${segundo_numero}.png"></img>`;

        tarjeta2.disabled=true;
        movimientos++
        mostar_mov.innerHTML=`Movimientos: ${movimientos}`;

        if(primer_numero==segundo_numero){
            cuenta_regresiva.pause();
            correcto.play();
            tajertas_destapadas=0;

            aciertos++;
            mostraraciertos.innerHTML=`Aciertos ${aciertos}`

            if(aciertos==8){
                win.play();
                clearInterval(tiempo_regresivo);
                mostraraciertos.innerHTML=`JUEGO TERMINADO <br>  Aciertos ${aciertos} `
                mostraraciertos.className="text-center";
                mostrartiempo.innerHTML=`Tiempo Final ${timer_inicial-timer} segundos`;
                mostrartiempo.className="text-center";
                mostar_mov.innerHTML=`Terminaste en ${movimientos} Movimientos `;
                mostar_mov.className="text-center";
            }
            
        }else{
            lose.play();
            setTimeout(()=>{
                tarjeta1.innerHTML=' ';
                tarjeta2.innerHTML=' ';
                tarjeta1.disabled=false;
                tarjeta2.disabled=false;
                tajertas_destapadas=0;
            },700)
        }
    }

};



function bloqueartarjetas(){
    Game_Over.play();

    for(i=0;i<=15;i++){
        tarjetabloqueada=document.getElementById(i);
        tarjetabloqueada.innerHTML=`<img src="images/${numbers[i]}.png"></img>`;
        tarjetabloqueada.disabled=true;
    }
};



let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
    con=confirm('desea reiniciar el juego')
    if(con==true){
            location.reload();}
})