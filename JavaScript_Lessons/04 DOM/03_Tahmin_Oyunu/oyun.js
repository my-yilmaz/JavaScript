//! Bilgisayara 1-20 arasinda sayi tutturalim
let randomSayi = Math.floor(Math.random() * 20 + 1);
let puanPC = 10;
let rekorPC = 0;

//! Kontrol et butonuna her tiklandiginda calistirdim
document.querySelector(".kontrol").onclick = function () {
    //* tahmin dogruysa:
    const guess = document.querySelector(".tahmin").value;
    if (guess == randomSayi) {
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".question").textContent = randomSayi; //* ? yerine bilgisayarin tuttugu sayi gorunecek
        document.querySelector(".mesaj").textContent = "Tebrikler, bildiniz! 👏";

        //* rekoru guncelle:
        if (puanPC > rekorPC) {
            rekorPC = puanPC;
            document.querySelector(".rekorskor").textContent = puanPC;
        }
    }
    //*tahmin yanlissa:
    else {
        if (puanPC > 1) {
            puanPC--;
            let notif = document.querySelector(".mesaj");
            guess < randomSayi
                ? (notif.textContent = "Arttır⏫")
                : (notif.textContent = "Azalt⏬");
            document.querySelector(".skor").textContent = puanPC;
        } else {
            document.querySelector(".mesaj").textContent = "Oyunu kaybettiniz. 😔";
            document.querySelector(".skor").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
};

//* Tekrar butonuna basildiginda baslangic degerleri yuklensin
document.querySelector(".tekrar").onclick = () => {
    randomSayi = Math.floor(Math.random() * 20 + 1);
    document.querySelector("body").style.backgroundColor = "#2d3436";
    document.querySelector(".question").textContent = "?";
    document.querySelector(".mesaj").textContent = "Tahmine Başlanıyor!";
    puanPC = 10;
    document.querySelector(".skor").textContent = puanPC;
    document.querySelector(".tahmin").value = "";
};

//! Klavyeden bir tusa basildiginda calis
document.querySelector(".tahmin").onkeydown = function (tus) {
    if (tus.keyCode == 13) {
        document.querySelector(".kontrol").onclick();
    }
    if (tus.keyCode == 82) {
        document.querySelector(".tekrar").onclick();
    }
};
