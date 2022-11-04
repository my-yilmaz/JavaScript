var showListe = [];

//!=======JSON DOSYASINDAN VERI GETIRME ASAMALARI========//

fetch("./tv-shows.json")
  .then((cevap) => cevap.json())
  .then((data) => {
    showListe = data;
    showIzle(showListe); //* method call
  });

//* method olustur:
//!https://getbootstrap.com/docs/4.0/components/card/
function showIzle(showListe) {
  var liste = document.querySelector(".liste"); //* divi cagirdik .liste ile
  showListe.forEach((a) => {
    liste.innerHTML =
      liste.innerHTML +
      `<div class="card col-md-3">
    <img class="card-img-top" src=${a.show.image ? a.show.image.medium : ""
      } alt="">
    <div class="card-body">
      <h5>${a.show.name}</h5>
      <a href=${a.show.url} target="_blank" class="btn btn-success">Detaylar</a>
    </div>
  </div>`; //* backtick kullanarak bootstrapten hazir card lar alip buraya yapistirdik
  });
}

//*21. satirda sunu dedik eger show'un icinde image varsa medium olani al eger yoksa hiclik olsun
