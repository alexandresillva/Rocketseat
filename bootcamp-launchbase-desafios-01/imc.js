// Programa para calcular o índice de massa corporal(IMC) e percentual de gordura
// Autor: Alexandre Ribeiro

// Definição das variaveis a serem utilizadas no sistema
const nome = "Carlos";
const peso = 84;
const altura = 1.84;

// IMC => peso / (altura * altura)

const imc = peso / (altura * altura);

// Verifica o imc da pessoa e informa a situção atual. 

if (imc >= 30.00)
{
  console.log(`${nome} você está acima do peso.`)
}else
{
  console.log(`${nome} você não está acima do peso.`)
}

