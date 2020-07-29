
function carregar(){
    var date = new Date();

    var hora = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();
    var horario = hora + " : " + min + " : " + seg;

    var bgSite = document.querySelector("body");
    var link = document.querySelector("a");
    var texto = document.querySelector("p.text");
    var img = document.querySelector("div.img");

    if (hora >= 5  && hora < 12){
        bgSite.style.backgroundColor = "#fedb67";
        bgSite.style.color = "black";
        link.style.color = "black";
        texto.innerHTML = `Agora são ${horario}`;
        img.style.backgroundImage = "url(img/manha.jpg)";
        img.style.backgroundSize = "cover"
    }
    else if (hora >= 12 && hora < 18){
        bgSite.style.backgroundColor = "#EE7D15";
        bgSite.style.color = "black";
        link.style.color = "white";
        texto.innerHTML = `Agora são ${horario}`;
        img.style.backgroundImage = "url(img/tarde.jpg)";
        img.style.backgroundSize = "cover"
    }
    else{
        bgSite.style.backgroundColor = "#334254";
        bgSite.style.color = "white";
        link.style.color = "white";
        texto.innerHTML = `Agora são ${horario}`;
        img.style.backgroundImage = "url(img/noite.jpg)";
        img.style.backgroundSize = "cover"
        img.style.backgroundPosition = "center"
    }
}

window.setInterval("carregar()",1000);

/*
background-image: url(img/manha.jpg);
background-size: cover;
background-color: #fedb67;
*/

/*
background-color: #EE7D15;
*/

/*
background-color: #334254;
*/