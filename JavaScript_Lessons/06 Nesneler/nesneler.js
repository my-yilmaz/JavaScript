//! en tepeye boyle use strict yazarsak kodlardaki hatalari gosterir, duzgun kod yazmaya zorlar
//*============NESNELER===========*/

//TODO Diziler sirali bellek bolgeleridir. Dolayisiyla dizilere erisim index ile olur. Eger diziler karisiksa (nesne) indexle erisim guclugu ortaya cikar. Bu yuzden:

//! OBJECT (NESNE)

//TODO Nesnelerde key-value (property-value) yapisi kullanilir.
//TODO Nesnelerde aradigimiz veriye erismek icin key adini kullanmamiz gerekir.

const insan = {
  ad: "Kenan",
  soyad: "Kul",
  yas: 30,
  meslek: "Developer",
  diller: ["Java", "JS", "SQL", "HTML"],
};
console.log(insan);

//* 1. CAGIRMA YONTEMI:.dot notasyonu
console.log(insan.ad); //* Kenan
console.log(insan.diller);

//* 2. CAGIRMA YONTEMI:koseli parantez icine
console.log(insan["ad"]); //* Kenan
console.log(insan["diller"]);

console.log(`Adım ${insan.ad} ve yasim ${insan.yas}`); //*Adım Kenan ve yasim 30

/*const bilgi = prompt(
  "İnsan nesnesinden hangisini gormek istersin? (Ad, soyad, yas ...)"
);
console.log(insan[bilgi]);*/

//TODO Objeye property-valuelar ekleme:

insan.konum = "Turkiye";
insan.email = "insan@hotmail.com";
insan["dogumTarihi"] = 1991;

console.log(insan);

//*========NESNE METHODLARI=========*/
//*bugunun yilini al=>Date().getFullYear()

const kisi = {
  ad: "Merve",
  soyad: "Aslan",
  dogumTarihi: 1990,
  meslek: "Tester",
  tool: "Selenium",
  ehliyet: true,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi;
  },
  ozet: function () {
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir`;
  },
};
console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());

//*=======NESNE (OBJECT) ITERATION ORNEKLERI======*/

const people = [
  {
    ad: "Hakan",
    soyad: "Inal",
    meslek: "Developer",
    yas: 41,
  },
  {
    ad: "Said",
    soyad: "Can",
    meslek: "Tester",
    yas: 37,
  },
  {
    ad: "Kubilay",
    soyad: "Tuncel",
    meslek: "Team Lead",
    yas: 33,
  },
  {
    ad: "Osman",
    soyad: "Turker",
    meslek: "Grafiker",
    yas: 29,
  },
  {
    ad: "Huseyin",
    soyad: "Harran",
    meslek: "Doktor",
    yas: 32,
  },
];

console.log(people);

//* Ornek 1: people dizisindeki kisilerin mesleklerini konsola yazdirin

people.forEach((x) => console.log(x.meslek));

//* Ornek 2: people dizisindeki tum kisilerin yaslarini bir arttirarak yazdirin

people.map((x) => x.yas + 1).forEach((x) => console.log(x));

//* Ornek 3: Yasi 35'e esit veya kucuk olanlarin adlarini yazdirin

people.filter((x) => x.yas <= 35).forEach((x) => console.log(x.ad));

//* Ornek 4: people dizisindeki kisilerin isimlerini buyuk harf yapan ve yaslarini 5 arttiran ve soyadinin ilk 2 harfini alan diziyi dondurun

people
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas + 5,
      soyad: x.soyad.slice(0, 2),
    };
  })
  .forEach((x) => console.log(x));

//* Ornek 5: Meslegi Developer olanlarin isimlerini buyuk harfle ve yaslarini yazdirin.(İsterseniz diziye atayip diziyi yazdirin)

//TODO 1:
people
  .filter((x) => x.meslek == "Developer")
  .forEach((x) => console.log(x.ad.toUpperCase(), x.yas));

//TODO 2:
const yeni = people
  .filter((x) => x.meslek == "Developer")
  .map((x) => {
    return {
      ad: x.ad.toUpperCase(),
      yas: x.yas,
    };
  });
console.log(yeni);
