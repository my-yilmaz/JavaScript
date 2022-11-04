/*=================================================*/
/*=======KONSOL=======*/
/*console.log("Yo JavaScript");
alert("Warning! Watch Your Step!");
console.warn("This is a warning.");
console.error("This is an error.");
prompt("Adınızı girin:"); */

/*=======DEGİSKEN TANIMLAMA=======*/

/* VAR */

// todo // Ancak, modern JS var keywordunun kullanımı azaldı.
// todo // Çünkü, var global değişken gibi düşünülebilir.
// todo // Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.
var isim = "ipek"; /*var scopeless'tir, her yerden cagirip kullanabiliriz*/
console.log(typeof isim); /*string*/
isim = 3.14; /*Boyle bile oluyor mesela, o yuzden cok guvenli degil*/
console.log(typeof isim); /*number*/

/* CONST */

// todo const ve let Modern JS ile gelmiş yeni değişken tanımlama keywordleridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitiveler hariç).mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.
const pi = 3.14;
/* pi=3; yapamayız bunu mesela, const degisken degil var gibi*/
const isim1 = "Osman";
console.log(typeof isim1); /*string*/
// ! const number; hatali yazım bundan sonra const'a yeni deger atayamayiz const degisken degil dedik

/* LET */

// todo Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// todo Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.
let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat =
  "Erdem"; /*Bunu da var gibi degistirebiliyoruz ama her yerden kullanılmıyor, nerdeysen ordan kullanilir*/

/*String tanimlamak icin 3 farkli karakter kullanilabilir */

let name1 = "Alaattin";
let name2 = "Faruk";
let name3 = `Oguzhan`;
console.log(name3);

/* ARITMETIK OPERATORLER */

const kola = 5;
const cips = 6;
const ekmek = 2;
console.log(kola + cips + ekmek);
console.log("Toplam fiyat", kola + cips + ekmek);

const ad = "Can";
const soyad = "Canan";
console.log(ad + soyad); //CanCanan
console.log(ad, soyad); //Can Canan

const s1 = 7;
let s2 = "7";
console.log(s1 + s2); // 77 oluyor let'ten geleni String alıyor

console.log("Benim adım" + " " + ad + " " + "yaşım" + " " + s1);
// ! Template literal ile yazdiralim
console.log(`Benim adım ${ad} yasim ${s1}`);

// todo us alma **
const taban = 2;
const us = 3;
console.log(taban ** us); //2*2*2=8

// todo mod alma %
const sayi = 123;
const birler = 123 % 10;
console.log(birler); //3

// todo karsilastirma operatorleri ==/===
const s3 = 5;
const s4 = "5";
console.log(s3 == s4); //true - burda içerik neyse ona bakıyor
console.log(s3 === s4); // false - === ile type'ına da bakıyor

// todo Type Degisimleri ======
const para = "100";
console.log(para + 15); // 10015
console.log(Number(para) + 15); //115

const s5 = 56;
console.log(String(s5) + s5); //5656
console.log(typeof s5); //number
