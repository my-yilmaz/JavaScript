/*========= getElementById() ==========*/

const paragraf = document.getElementById("par").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.color = "red";
buton.style.fontSize = "18px";
buton.textContent = "ARA"; //!!!!! textContent=> taglerin icerigindeki yaziyi degistirmek istersek

/*========= getElementsByTagName() ==========*/

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px"; //! 0 burada index gibi, 1. resim icin 0, 2. resim icin 1 yazıyoruz
resim[0].style.height = "300px";
resim[1].style.border = "3px solid red";

/*========= getElementsByClassName() ==========*/

const baslik = document.getElementsByClassName("H1");
baslik[0].style.textAlign = "center";

/*========= querySelector ==========*/
// todo- Bu en cok kullanilan cagirma yoludur.

document.querySelector(".title").textContent = "DOM Selector Kavramı 👌";
document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green, red, yellow)";

/*======= EVENT ========*/

//! (onmouseover, onmouseout=mouse uzerine gelince/ayrilinca)

const h = document.querySelector(".H1");
h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "white";
};
h.onmouseout = function () {
  h.style.color = "pink";
  h.style.backgroundColor = "orange";
};

//todo 1. resme tikladigimizda img'ler yer degistirsin

document.querySelector(".l1").onclick = function () {
  document.querySelector(".l1").src = "./img/logo2.png"; //todo js'te html'den farkli olarak burada kaynagi cagirirken basina ./ koyuyoruz bir de
  document.querySelector(".l2").src = "./img/js_logo.png";
}; // todo Bu ustte ikisi yer degisince de birbirlerinin ozelliklerini aliyorlar. Style olarak 1'e ne verdiysek o artik 2'de (ve vice versa)
