gon = document.getElementById('gon')
function janken(ppt){
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    mytry = Number(ppt)
    gontry = getRandomInt(0,3)
    gon.innerHTML=`<p>Primeiro é pedra...</p> <br> <audio controls autoplay><source src="audio/jankenpo.mp3" type="audio/mpeg"></audio>`
    /* 0 = Pedra   1 = Papel   2 = tesoura*/
    setTimeout(function(){
        if(gontry===0){
                if(mytry===0){
                    gon.innerHTML = '<p>Empate</p>'
                }else if(mytry===1){
                    gon.innerHTML = '<p>Você venceu!!!</p>'
                }else{
                    gon.innerHTML = '<p>Gon venceu!!!</p>'
                }
                gon.innerHTML+='<p>E Gon escolheu Pedra'
            }else if(gontry==1){
                if(mytry===0){
                    gon.innerHTML = '<p>Gon venceu!!!</p>'
                }else if(mytry===1){
                    gon.innerHTML = '<p>Empate</p>'
                }else{
                    gon.innerHTML = '<p>Você venceu!!!</p>'
                }
                gon.innerHTML+='<p>E Gon escolheu Papel</p>'
            }else if(gontry===2){
                if(mytry===0){
                    gon.innerHTML = '<p>Você venceu!!!</p>'
                }else if(mytry===1){
                    gon.innerHTML = '<p>Gon venceu!!!</p>'
                }else{
                    gon.innerHTML = '<p>Empate</p>'
                }
                gon.innerHTML+='<p>E Gon escolheu Tesoura</p>'
            }
    }, 4000)
    
}