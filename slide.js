

// quantidade de slides exibidos
let qtdeSlides = document.querySelectorAll('.slide-item').length;
let slideLargura = document.querySelector('.slide').clientWidth;


let slideAtual= 0;

// ajustando largura e altura
document.querySelector('.slide-largura').style.width = `calc(100vw*${qtdeSlides})`;
document.querySelector('.slide-controles').style.height = 
`${document.querySelector('.slide').clientHeight}px`;


// funcoes

 function atualizarMargem(){
        let novaMargem = slideAtual*slideLargura;  
        //setar  o novo valor
        document.querySelector('.slide-largura').style.marginLeft = `-${novaMargem}px`;
        
 }

function voltarSlide(){
    slideAtual--;
    if(slideAtual < 0){
        slideAtual = qtdeSlides-1;
    }
    atualizarMargem();
}

function seguirSlide(){
    slideAtual++;
    if(slideAtual > qtdeSlides-1){
        slideAtual= 0;
    }
    atualizarMargem();
}

setInterval(goNext, 2000);