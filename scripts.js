const convertButton = document.querySelector(".convert-button")
const selecionar = document.querySelector(".selecionar-moeda")
function convertValores() {
    const inputValor = parseFloat(document.querySelector(".input-valor").value);
    const valor = document.querySelector(".valor")
    const valor1 = document.querySelector(".valor1")
    
    const dolarToday = 4.94
    const euroToday = 6.00
    const libraToday = 6.20
    const bitcoinToday = 215.205
    

    if (selecionar.value == "dolar") {

        valor1.innerHTML = new Intl.NumberFormat("en-Us", {
            style : "currency",
            currency : "USD"
        }) .format(inputValor / dolarToday)

    }
    if (selecionar.value == "euro") {
        valor1.innerHTML = new Intl.NumberFormat("de-De", {
            style : "currency",
            currency : "EUR"
        }) .format(inputValor / euroToday)
        
    }

    if (selecionar.value == "libra") {
        valor1.innerHTML = new Intl.NumberFormat("en-Gb", {
            style : "currency",
            currency : "GBP"
        }) .format(inputValor / libraToday)
        
    }

    if (selecionar.value == "bitcoin") {
        valor1.innerHTML = new Intl.NumberFormat("es-SV", { 
            style: "currency",
            currency: "BTC",
        }).format(inputValor / bitcoinToday) + `(${(inputValor/bitcoinToday).toFixed(10)})`;
      }


    valor.innerHTML = new Intl.NumberFormat("pt-BR", {
        style : "currency",
        currency : "BRL"
    }) .format(inputValor)


    
    
    
}

function changeMoeda(){

    const moedaTroca = document.getElementById("moeda-convertida")
    const imagemTroca = document.querySelector(".img")
    

    if (selecionar.value == "dolar") {
    
        moedaTroca.innerHTML = "US$ Dólar americano"
        imagemTroca.src = "./assets/dolar.png"
       
    }

    if (selecionar.value == "euro") {
    
        moedaTroca.innerHTML = "€ Euro"
        imagemTroca.src = "./assets/euro.png"
    }

    if (selecionar.value == "libra") {
    
        moedaTroca.innerHTML = "£ Libra"
        imagemTroca.src = "./assets/libra.png"
    }

    if (selecionar.value == "bitcoin") {
    
        moedaTroca.innerHTML = "₿ Bitcoin"
        imagemTroca.src = "./assets/bitcoin.png"
    }



    convertValores()
}

selecionar.addEventListener ("change",changeMoeda)
convertButton.addEventListener ("click", convertValores)