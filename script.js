
let time = window.document.getElementById('time')
let segundos = 0
let minutos = 0
let hora = 0
let intervalo
 
function Start(){
    intervalo = setInterval(()=>{
        segundos++
        if(segundos == 60){
            segundos = 0
            minutos++;
            if(minutos == 60){
                minutos = 0
                hora++
            }
        }
        let h = hora < 10?  "0" + hora : hora
        let m =  minutos < 10? "0" + minutos : minutos
        let s = segundos < 10? "0"  + segundos : segundos

        time.innerHTML = `${h}:${m}:${s}`
    }, 100)
}


function Stop(){
    clearInterval(intervalo);
}

function Recet(){
    clearInterval(intervalo)
    segundos = 0
    minutos = 0
    hora = 0
    time.innerHTML = "00:00:00"
}