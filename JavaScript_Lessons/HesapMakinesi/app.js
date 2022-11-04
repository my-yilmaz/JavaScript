function hesapEt(sonuc) {
  if (form.displayResult.value == 0) {
    form.displayResult.value = sonuc;
  } else {
    form.displayResult.value += sonuc;
  }
}
document.querySelector(".bosalt").onclick = function () {
  document.querySelector(".screenBorder").value = "";
};
