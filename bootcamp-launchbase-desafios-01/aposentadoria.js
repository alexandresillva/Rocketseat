// Programa para calcular a aposentadoria de uma pessoa

const nome = "Silvana";
const sexo = "F";
const idade = 30;
const contribuicao = 30;

if (sexo === "F") {
  if (contribuicao >= 30) {
    if ((idade + contribuicao) >= 85) {
      console.log(`${nome}, você pode se aposentar!`)
    } else {
      console.log(`${nome}, você ainda não pode se aposentar! Faltam ${85 - (idade+contribuicao)} anos.`)
    }
  } else {
    console.log(`${nome}, você não possui tempo de contribuição suficiente para se aposentar.`)
  }
} else {
  if (contribuicao >= 35) {
    if ((idade + contribuicao) >= 95) {
      console.log(`${nome}, você pode se aposentar!`)
    } else {
      console.log(`${nome}, você ainda não pode se aposentar!`)
    }
  } else {
    console.log(`${nome}, você não possui tempo de contribuição suficiente para se aposentar.`)
  }
}
