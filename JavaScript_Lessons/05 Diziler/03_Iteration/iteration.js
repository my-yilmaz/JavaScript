//**==============DIZILERDE ITERATION============== */

//*====FOR DONGUSU====*/

const koordinatlar = [120, 100, -100, 220, 330, -50];

let pozitif = 0;
let negatif = 0;
for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}

console.log(`Negatifler toplami ${negatif}, pozitifler toplami ${pozitif}`);

//*====FOR IN DONGUSU====*/

// let pozitif = 0;
// let negatif = 0;
/*for (let i in koordinatlar) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}

console.log(`Negatifler toplami ${negatif}, pozitifler toplami ${pozitif}`);*/

// todo SORU: Bir hayvanat bahçesinde bulunan hayvan turlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları turune
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar = [
  "aslan",
  "fil",
  "kartal",
  "kanarya",
  "aslan",
  "aslan",
  "timsah",
];

/* const ara = prompt("Sayisini ogrenmek istediginiz hayvanin adini yazin");
const bulDondur = function (ara) {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      hayvanSayisi++;
    }
  }
  hayvanSayisi == 0
    ? alert("Aradiginiz hayvandan hic yok")
    : alert(`Aradiginiz ${ara} hayvanindan ${hayvanSayisi} tane var.`);
};
bulDondur(ara);
*/
//*====FOR OF DONGUSU====*/

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

let arabalar = ["BMW", "Volvo", "Mini"];
for (let i of arabalar) {
  console.log(i);
}

//*====FOR EACH METHODU====*/
//! for each methodu orijinal diziyi bozmaz

let ogrenciler = ["Onur", "Hakan", "Furkan"];
const dene = ogrenciler.forEach((x) => console.log(x));
console.log(dene); //*undefined

ogrenciler.forEach((deger, index) =>
  console.log(index + ". kisi " + deger + "'dir.")
);

console.log(ogrenciler); //* ["Onur", "Hakan", "Furkan"];

//*====MAP METHODU====*/
//! map methodu orijinal diziyi degistirmez

//? Ornek 1: Butun elemanlarin 3 katini aliniz
const rakamlar = [3, 5, 3, 2, 6, 7, 9];
console.log(rakamlar.map((x) => x * 3)); //*[9, 15, 9, 6, 18, 21, 27] bunu forEach ile de yazdirabiliriz

console.log(
  rakamlar.map((x, index) => `${index + 1}. elemanin 3 kati ${x * 3}`)
);
//*['1. elemanin 3 kati 9', '2. elemanin 3 kati 15', '3. elemanin 3 kati 9', '4. elemanin 3 kati 6', '5. elemanin 3 kati 18', '6. elemanin 3 kati 21', '7. elemanin 3 kati 27']

//? Ornek 2: İsimler dizisinin icerisindeki her ismi buyuk harf olarak yeni bir diziye sakla

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

//* map methodu bir dizi dondurur

const buyuk = isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);
//*['AHMET', 'MEHMET', 'ISMET', 'SAFFET', 'CAN', 'CANAN', 'CAVIDAN']

document.querySelector(".baslik").textContent = buyuk.join(" ");

//*====FILTER METHODU====*/

//? Ornek 1: Fiyatlar dizisindeki 250'den buyuk fiyatlari yazdir

const fiyatlar = [120, 260, 300, 322.5, 400, 768];
console.log(fiyatlar.filter((t) => t > 250)); //*[260, 300, 322.5, 400, 768]

//? ============Ornek===========//
//? Maası 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];
const yeni = maaslar.filter((a) => a < 4000).map((a) => a * 1.5);
console.log(yeni); //*[4500]

//?-------------- ÖRNEK --------------/
const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

//?ilk harfi A olanları konsol da yazdır
adlar.filter((x) => x.startsWith("A")).forEach((x) => console.log(x));

//*====REDUCE METHODU====*/
//! reduce cikis methodudur... Reduce'ten sonra forEach calismaz

const maaslarim = [3000, 5000, 4000, 2000, 1000];
console.log(maaslarim.reduce((x, y) => x + y, 0));
