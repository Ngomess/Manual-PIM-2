// FAQ

document.querySelectorAll(".faq").forEach(botao=>{

    botao.addEventListener("click",()=>{

        let resposta = botao.nextElementSibling;

        resposta.classList.toggle("abrir");

    });

});


// Animação das seções

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

sections.forEach(sec=>observer.observe(sec));


// Pesquisa

const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("keyup",()=>{

    let valor = pesquisa.value.toLowerCase();

    sections.forEach(sec=>{

        if(sec.innerText.toLowerCase().includes(valor)){

            sec.style.display="block";

        }else{

            sec.style.display="none";

        }

    });

});


// Menu ativo

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let atual="";

    sections.forEach(sec=>{

        const topo = sec.offsetTop-150;

        if(pageYOffset>=topo){

            atual=sec.id;

        }

    });

    links.forEach(link=>{

        link.classList.remove("ativo");

        if(link.getAttribute("href")==="#"+atual){

            link.classList.add("ativo");

        }

    });

});


// Botão voltar ao topo

const botaoTopo = document.createElement("button");

botaoTopo.id="topo";

botaoTopo.innerHTML="⬆";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        botaoTopo.style.display="block";

    }else{

        botaoTopo.style.display="none";

    }

});

botaoTopo.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// Zoom nas imagens

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("click",()=>{

        if(img.style.transform==="scale(1.8)"){

            img.style.transform="scale(1)";

            img.style.zIndex="0";

        }else{

            img.style.transform="scale(1.8)";

            img.style.zIndex="999";

        }

    });

});