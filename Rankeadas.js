function partidasRanqueadas(vitoria, derrota){
    let mmr = vitoria - derrota;
    return mmr;
}

let saldoVitoria = partidasRanqueadas(200, 99);

let nivel = saldoVitoria;

if(nivel <= 10){
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível Ferro`)
}
else if(nivel >= 11 && nivel <= 20){
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível Bronze`)
}
else if(nivel >=21 && nivel <= 50){
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível Prata`)
}
else if(nivel >=51 && nivel <= 80){
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível Ouro`)
}
else if(nivel >= 81 && nivel <= 90){
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível Diamante`)
}
else if(nivel >=91 && nivel <= 100){
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível Lendário`)
}
else{
    console.log(`O Herói tem saldo de ${saldoVitoria} e está no nível Imortal`)
}
