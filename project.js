
/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ');
let xp = prompt('Digite sua experiencia: ');
let nivelDoHeroi;

if (xp < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log(`O heroi de nome: ${nome} esta no nivel: ${nivelDoHeroi}`);
