var numeroSecreto = parseInt(Math.random() * 1000) + 1;
var i = 0;
var n = 0;

while(i == 0){
    var chute = prompt("Digite um numero entre 1 e 1000");
    n++;

    if (chute == numeroSecreto){
        alert("ACERTOU!\nVoce utilizou " + n + " Tentativas");
        i++;
    }
    else if(chute > numeroSecreto){
        alert("ERROU!\nO numero secreto é menor.\nVoce ja deu " + n + " Chutes.");
    }
    else{
        alert("ERROU!\nO numero secreto é maior.\nVoce ja deu " + n + " Chutes.");
    }
}