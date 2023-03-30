// kullanıcı adı girişi ve kullanıcı adını yazdırma

let userName = prompt("Lütfen adınızı giriniz: ")
let myName = document.querySelector("#myName")

myName.innerHTML = `${userName}`


// gün ve saat bilgisi yazdırma

function saatGoster() {
    let tarih = new Date()

    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()

    let myClock = document.querySelector("#myClock")

    myClock.innerHTML = `${saat}:${dakika}:${saniye}`
}

setInterval(saatGoster, 1000)
