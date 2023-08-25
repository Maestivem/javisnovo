
let palavrasecreta =  prompt("Digite a palavra secreta: ").toUpperCase();
 let tamanhopalavra = palavrasecreta.length;
 let letrasjachutadas = "";
 let letraserradas = "";
 let letrasacertadas = "";

 for (let i = 0; i < tamanhopalavra; i++){
    letrasacertadas += "_";
 }

 let tentativas = 0;
 const maxtentativas = 6;

 while (tentativas < maxtentativas) {
    let letrachutada = prompt (`Palavra: ${letrasacertadas}\ntentativas: ${tentativas}\nLetras ja chutadas:
    ${letrasjachutadas}\nLetras erradas: ${letraserradas}\nDigite uma letra: `).toUpperCase();
 if (letrasjachutadas.includes(letrachutada) ||
letrasacertadas.includes(letrachutada) ||
letraserradas.includes(letrachutada)) {
    alert("Voce ja chutou essa letra, tente outra");
continue;
}
 if(palavrasecreta.includes(letrachutada)){
    for(let i = 0; i < tamanhopalavra; i++){
        if (palavrasecreta[i] == letrachutada){
            letrasacertadas = letrasacertadas.substr(0,i) + letrachutada + letrasacertadas.substr(i+1);
        }
    }
 }
if(letrasacertadas === palavrasecreta){
    alert(`Parabens! Voce acertou a palavra secreta" ${palavrasecreta}" com ${tentativas + 1} tentativas.`);
    break;
}
else {
    letraserradas += tentativas++;
    if (tentativas === maxtentativas){
        alert(`Game over, a palavra secreta era "${palavrasecreta}"`)
    }
    letrasjachutadas +=letrachutada + " ";
}
}