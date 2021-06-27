function oi() {
  let submenu = document.getElementsByClassName('submenu')[0]
  submenu.style.visibility = "hidden"
}
function log() {

  let nome = document.getElementById('nome')
  let senha = document.getElementById('senha')
  let nascimento = document.getElementById('data')
  let email = document.getElementById('email')
  if (nome.value.length === 0) {
    alert("DEFINA UM NOME")
    return;
  } else if (Number(senha.value.length) === 0) {
    alert("DEFINA UMA SEMHA")
    return;
  } else if (Number(nascimento.value.length) === 0) {
    alert("DEFINA SEU NASCIMENTO")
    return;
  } else if ((email.value.length) === 0) {
    alert("INSIRA SEU EMAIL")
  }

  let n = (nome.value)
  let s = (senha.value)
  let ns = parseInt(nascimento.value)
  let em = (email.value)

  let dados = [n,
    s,
    ns,
    em]

  let all = document.getElementsByClassName('2menu')[0]
  all.style.visibility = "hidden"

  let no1 = document.getElementById('no')
  no1.innerHTML = " nome: " + (dados[0])

  let se1 = document.getElementById('se')
  se1.innerHTML = " senha: " +(dados[1])

  let e1 = document.getElementById('e')
  e1.innerHTML = " email: " + (dados[3])

  let anoAtual = new Date().getFullYear()

  if (dados[2] > anoAtual) {
    alert("[ERRO] ANO INVÁLIDO")
    return;
  }

  let totali = (anoAtual - (dados[2]))

  let ida = document.getElementById('ida')
  ida.innerHTML = " idade: " + totali + " Anos "



  let v = document.getElementById('voltar1')
  v.style.visibility = "visible"
}
function abrimenu() {
  window.open("MENU-LOGIN/menu.html")
}