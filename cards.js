var card1 = {
    name: "Killua",
    image: "https://a-static.besthdwallpaper.com/hunter-x-hunter-killua-zoldyck-papel-de-parede-1024x768-51897_18.jpg",
    attributes: { 
        zetsu: 8,
        ren: 9,
        hatsu: 7
    }
}
var card2 = {
    name: "Gon",
    image: "https://wallpaperaccess.com/full/1857201.png",
    attributes: { 
        zetsu: 7,
        ren: 7,
        hatsu: 8
    }
}
var card3 = {
    name: "Hisoka",
    image: "https://a-static.besthdwallpaper.com/hunter-x-hunter-hisoka-papel-de-parede-1920x1440-42630_25.jpg",
    attributes: { 
        zetsu: 9,
        ren: 10,
        hatsu: 10 
    }
}
var card4 = {
    name: "Ging",
    image: "https://i.pinimg.com/474x/bd/9e/41/bd9e415f43d9c9db6958d10ddc23177f--hunters-to-the.jpg",
    attributes: { 
        zetsu: 8,
        ren: 9,
        hatsu: 10 
    }
}
var card5 = {
    name: "Kurapika",
    image: "https://wallpaperaccess.com/full/1894736.jpg",
    attributes: { 
        zetsu: 8,
        ren: 6,
        hatsu: 9 
    }
}
var card6 = {
    name: "Leorio",
    image: "https://wallpapercave.com/wp/wp7109589.png",
    attributes: { 
        zetsu: 7,
        ren: 6,
        hatsu: 8 
    }
}


var cards = [card1, card2, card3, card4, card5, card6];
var cardMachine = 0
var cardPlayer = 0

function sortearCarta() {
    var numberCardMachine = parseInt(Math.random() * 6);
    cardMachine = cards[numberCardMachine];
    

    var numberCardPlayer = parseInt(Math.random() * 6);
    while (numberCardMachine == numberCardPlayer) {
        numberCardPlayer = parseInt(Math.random() * 6);
    }
    cardPlayer = cards[numberCardPlayer];
    console.log(cardPlayer)

    document.getElementById("btnSortear").disabled = true 
    document.getElementById("btnJogar").disabled = false

    
    showCardPlayer()
}


function getSelectedAttribute () {
    var radioAttibute = document.getElementsByName("attribute");
    for (var i = 0; i < radioAttibute.length; i++) {
        if (radioAttibute[i].checked == true) {
            return radioAttibute[i].value
        }

    }

}

function jogar() {
    var resultElement = document.getElementById("resultado")
    var selectedAttibute = getSelectedAttribute()
    
    if (selectedAttibute == undefined) {
        alert  ("Selecione um atributo")

    } else {
        var valueCardPlayer = cardPlayer.attributes[selectedAttibute];
    var valueCardMachine = cardMachine.attributes[selectedAttibute];

    if (valueCardPlayer > valueCardMachine) {
        resultHTML = "<p class='resultado-final'>Você venceu!</p>";

    } else if (valueCardMachine > valueCardPlayer) {
        resultHTML = "<p class='resultado-final'>Você perdeu!</p>";
    } else {
        resultHTML = "<p class='resultado-final'>Empatou</p>";
    }
    resultElement.innerHTML = resultHTML
    document.getElementById("btnJogar").disabled = true
    showCardMachine()


    }
    
}
function showCardPlayer() {
    var divCardPlayer = document.getElementById("carta-jogador")
    divCardPlayer.style.backgroundImage = `url(${cardPlayer.image})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes'class='carta-status'>"

    var optionsText = ""
    for (var attribute in cardPlayer.attributes) {
        optionsText += "<input type='radio' name='attribute' value='" + attribute + "'>" + attribute + " " + cardPlayer.attributes[attribute] + "<br>";
    
    }
    var name = `<p class="carta-subtitle">${cardPlayer.name}</p>`
    divCardPlayer.innerHTML = moldura + name + tagHTML + optionsText + '</div>'
}
function showCardMachine() {
    var divCardMachine = document.getElementById("carta-maquina")
    divCardMachine.style.backgroundImage = `url(${cardMachine.image})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes'class='carta-status'>"

    var optionsText = ""
    for (var attribute in cardMachine.attributes) {
        optionsText += "<p type='text' name='attribute' value='" + attribute + "'>" + attribute + " " + cardMachine.attributes[attribute] + "</p>";
    
    }
    var name = `<p class="carta-subtitle">${cardMachine.name}</p>`
    divCardMachine.innerHTML = moldura + name + tagHTML + optionsText + '</div>'
}



