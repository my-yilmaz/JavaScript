// =========
// todo Ara butonuna tiklandiginda duran calan telefon  ciksin, zil calsin

let resim = document.querySelector(".resim"); // resim'e ulastim
let ringtone = document.querySelector(".ses"); //audioya ulastim
document.querySelector(".on").onclick = function () {
  //Ara butonuna ulastim
  resim.src = "./img/img.gif"; //resim degistirdim
  ringtone.play(); //sesi calistirdim
};

// todo Bağlat butonuna basinca gif gelsin, ses kesilsin

document.querySelector(".off").onclick = function () {
  //Bağlat butonunu cagirdik
  resim.src = "./img/telbağla.gif";
  ringtone.pause(); //sesi susturduk
};

// todo Konuş butonuna basinca yeni gif gelsin

document.querySelector(".speak").onclick = function () {
  resim.src = "./img/telfırlat.gif";
};

//? UZUN YOL: Ekle butonuna basildiginda yeni bir <li> ekle
// // yeni girilen satiri saklamak icin bir li olusturduk.
//  // const yeniLi = document.createElement("li");
//  // yeni li icin textnode olusturduk
//  // const textNode = document.createTextNode(satir.value);
//  //olusturdugumuz texnode'u yeni li'ye bagladik.
//  // yeniLi.appendChild(textNode);
//  // yeni eklenen satiri var olan listeye (ul) baglayalim.
//  // liste.appendChild(yeniLi);

//todo KISA YOL: Ekle butonuna basildiginda yeni bir <li> ekle

const liste = document.querySelector(".liste");
document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".dil");
  liste.innerHTML = liste.innerHTML + `<li>${satir.value}</li>`;
  //todo listenin innerhtml'ine, ne yaziyorsam li olarak ekle. Backtick ile ne yazarsak ekler
  satir.value = ""; //todo bu sekilde de ekleme yaptiktan sonra satirin icini temizliyor
};

//todo Sil butonuna basildiginda <li> elemani silinsin
//! listeyi 27. satirda fonksiyon disinda yazdigimiz icin burdan tekrar cagirmamiza gerek yok

document.querySelector(".sil").onclick = function () {
  liste.removeChild(liste.lastElementChild); //todo Listeye son gireni sil
};

// todo Bu yukarıdaki ekleme silme isleminin farkli yolu:
// todo onkeydown=klavyedeki tusa basip cekince

document.querySelector(".dil").onkeydown = function (tus) {
  if (tus.keyCode == 13) {
    // enter:13
    document.querySelector(".ekle").onclick();
  } else if (tus.keyCode == 46) {
    //delete:46
    document.querySelector(".sil").onclick();
  }
};

//* Araya baslik ekleyelim
const parag = document.querySelector(".forB1");
parag.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

//todo SETATTRIBUTE methodu:
//* document.querySelector(".checkbox").setAttribute("type", "checkbox");
//todo Index.html'de checkbox class'inin type'ini girmedik diyelim, sonradan girmek istersek boyle gireriz.

//* Klavyeden bir tusa basildiginda buyusun kuculsun
document.querySelector(".textbox").onkeyup = function () {
  const check = document.querySelector(".checkbox");
  const text = document.querySelector(".textbox");
  if (check.checked) {
    text.value = text.value.toUpperCase();
  } else {
    text.value = text.value.toLowerCase();
  }
};

//* Mouse resmin uzerine geldiginde kukreyen aslan resmi gelsin
resim.onmouseover = function () {
  resim.src = "./img/aslan2.jpeg";
};

/* 2.YOL:
resim.addEventListener("mouseout", function () {
  resim.src = "./img/aslan2.jpeg";
});*/

//* Mouse resmin uzerinden cekilince normal aslan gelsin
resim.onmouseout = function () {
  resim.src = "./img/aslan1.jpeg";
};