/*==========FONKSIYONLAR==========*/

/* 1. YONTEM: FUNCTION DECLARATION*/

//todo Declaration yontemi ile fonksiyonun tanimlanmasi cagirilmasindan once veya sonra olabilir

//todo ===== Fonksiyonun tanimlanmasi:
function yazdirAd() {
  console.log("İpek");
}
//todo ==== Fonksiyonun cagirilmasi:
yazdirAd();

/*Ornek 1: Kullanicidan alinan sayinin tek mi cift mi oldugunu gosteren bir fonksiyon yaziniz */
const sayiniz = prompt("Lutfen bir sayi giriniz.");
console.log(tekCift(sayiniz));
function tekCift(sayiniz) {
  return sayiniz % 2 == 0 ? `${sayiniz} çifttir.` : `${sayiniz} tektir.`;
} //todo buradan 16. satira donecek orada functioni cagiriyoruz yazdiriyoruz

/* 2. YONTEM: FUNCTION EXPRESSION (BU YONTEM DAHA YAYGIN) */

const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? `${sayi} CIFT` : `${sayi} TEK`;
};
console.log(tekCift1(5));

/*Ornek 2: Verilen 3 sayidan en buyuk sayiyi bulma */
let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else {
    enBuyuk = z;
  }
  return enBuyuk;
};
console.log(buyukBul(5, 8, 11));

/* 3. YONTEM: FUNCTION ARROW */

const ciftMi = (num) => (num % 2 == 0 ? `${num} çift sayi` : `${num} tek sayi`);
console.log(ciftMi(7));

/* Ornek 3: */

const taban = prompt("Taban sayiyi girin");
const us = prompt("Ussu girin");

const usAl = (taban, us) => taban ** us;
console.log(usAl(taban, us));
