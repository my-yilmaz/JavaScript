const yaslar = [5, 10, 28, 42];
const isimler = [
  "Hakan",
  "Alaattin",
  "Furkan",
  "Dayanch",
  20,
  40,
  true,
  23.5,
  yaslar,
];
//! JavaScript bir dizi icinde farkli data type koymaya sorun cikarmiyor
console.log(isimler);
console.log(isimler[3]); //*Dayanch
console.log((isimler[3] = "Sadi")); //*Sadi olacak artik Dayanch yerine

//todo Const degistirilemiyordu ama non-primitivelerde (Arraylerde) degistirilebiliyor. Dizi bir adres gosterir isimler gibi, o yuzden primitiveden farkli

isimler[isimler.length - 2] = "false"; //* 23.5 yerine false yazdik

console.log(isimler[8][1]); //* yaslar'in icinden 1. indexi getir= 10

//*========DIZIYI DEGISTIREN METHODLAR=========/

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
const browser = document.querySelector(".baslik");

//! pop() en son elemani siler ve eger log icinde yazdirirsak sildigi elamni yazdirir
// meyveler.pop(); // ['Elma', 'Armut', 'Muz']
console.log(meyveler.pop()); // Kivi

//! shift() dizinin 0 indexli elemanini, yani ilk elemani siler ve yazdirirsak sildigi elemani dondurur
// meyveler.shift(); ['Armut', 'Muz']
console.log(meyveler.shift()); //Elma

//! push() dizinin sonuna bir veya daha fazla eleman ekler
meyveler.push("Cilek", "Karpuz");

//! unshift() dizinin 0 indexine eleman ekler
meyveler.unshift("Ayva");

//! reverse() dizinin tamamini ters cevirir
//*Ayva, Armut, Muz, Cilek, Karpuz son hali buydu
//* meyveler.reverse(); //* Karpuz, Cilek, Muz, Armut,Ayva boyle cevirir

//! sort() diziyi natural ordera gore siralar
meyveler.sort(); //* Armut,Ayva,Cilek,Karpuz,Muz

//! splice(eklenecek index,0/1,eklenecek veri)=>0 ve 1 degerlerinin mantigi su sekilde: 0 silmez iteler, 1 siler.
meyveler.splice(1, 0, "Erik"); //* 1. indexe, o indextekini silmeden Erik yaz=>Armut,Erik,Ayva,Cilek,Karpuz,Muz
meyveler.splice(4, 1, "Seftali"); //* 4. indexe, o indextekini silerek Seftali yaz=>Armut,Erik,Ayva,Cilek,Seftali,Muz

//*========DIZI ERISIM METHODLARI=========/
//todo Bunlar diziyi degistirmezler

const sayilar = [3, 4, 5, 2, "2", "uc", "bes", 5, 2, 7];

//! includes() kapsiyor mu
console.log(sayilar.includes("5")); //* false
console.log(sayilar.includes(5)); //* true

//! indexOf() ilk eslesen indexi dondurur
console.log(sayilar.indexOf(2)); //*3 (2'nin indexi 3)
console.log(sayilar.lastIndexOf(5)); //*7 (5'in son indexi 7)
console.log(sayilar.indexOf(2, 4)); //* 8 (4. indexten itibaren ilk 2'nin indexi)
console.log(sayilar.indexOf(5, 3)); //* 7

//! join() Dizinin elemanlarini birlestirip tek bir eleman olarak geri dondurur
//! Default olarak virgullerle ayirarak diziden kurtarir.
//! Ama istersek " "(yani bosluklarla), "-" ile ayirabiliriz.
console.log(sayilar.join("-")); //* 3-4-5-2-2-uc-bes-5-2-7

//! toString(), join gibidir ama sadece virgulle ayirir
console.log(sayilar.toString()); //* 3,4,5,2,2,uc,bes,5,2,7

//*==================================================*/

const arabalar = ["audi", "bmw", "mercedes", "Volvo", "sahin"];
console.log(arabalar.slice(2)); //* 2. indexten itibaren sona kadar yazdirir=>['mercedes', 'Volvo', 'sahin']
console.log(arabalar.slice(1, 3)); //* İlk index dahil ikinci index haric aradakileri yazdir=>['bmw', 'mercedes']

//*========CONCAT()=========/

const birlesik = sayilar.concat(arabalar, true, false, [3, 4, 5], meyveler);
console.log(birlesik); //* [3, 4, 5, 2, '2', 'uc', 'bes', 5, 2, 7, 'audi', 'bmw', 'mercedes', 'Volvo', 'sahin', true, false, 3, 4, 5, 'Armut', 'Erik', 'Ayva', 'Cilek', 'Seftali', 'Muz']
