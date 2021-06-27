function checar() {
  let all = document.getElementsByName('menu')

  if (all[0].checked) {
    window.open("pages/sobre.html")
  }
  if (all[1].checked) {
    window.open("pages/agradecimentos.html")
  }
  if (all[2].checked) {
    window.open("pages/contato.html")
  }
}
function back() {
  window.open("https://otoniel19.github.io/LOGIN-V1/")
}