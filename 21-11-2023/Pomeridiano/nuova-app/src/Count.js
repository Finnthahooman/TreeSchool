// Esercizio 1

// Creare un componente che in un h1 mostri sempre un numero 
// (che sarà il nostro stato ), lo stato iniziale sarà 1.

// Creo dei bottoni che:
// - aggiungano 2
// - dividano per 2
// - moltiplichino per 2
// - sottraggano 2

// extra:
// p -> una label che ci dica se in nostro numero 
// ( stato ) è pari o dispari

import React, { useState } from 'react';

function Counter(props){
    console.log("RENDERIZZO COUNT")

    //     Nome Var , Funzione di set
    const [contatore, setContatore]= useState(0);

    console.log("STATO CONTATORE", contatore)

    function incrementa(){
        //Creo una variabile temporanea per il nuovo valore
        const nextState = contatore + 2
        
        setContatore(nextState)
        console.log("count dopo la modifica nella funzione increment", contatore)
        console.log("lo stato del mio prossimo render", nextState)
    }

    function dividi(){
        const nextState = contatore / 2
        setContatore(nextState)
    }

    function moltiplica(){
        const nextState = contatore * 2
        setContatore(nextState)
    }
    function sottrai() {
        // Creo una variabile temporanea per il nuovo valore
        const nextState = contatore - 2;
        
        setContatore(nextState);
        console.log("count dopo la modifica nella funzione sottrai", contatore);
        console.log("lo stato del mio prossimo render", nextState);
    }

    function controllaPariDispari(){
        return contatore % 2 === 0 ? "Pari" : "Dispari"
    }
    
    return (
        <div>
            <h1>Il conteggio è: {contatore}</h1>
            <button onClick={incrementa}>Incrementa di 2</button>
            <button onClick={dividi}>Dividi per 2</button>
            <button onClick={moltiplica}>Moltiplica per 2</button>
            <button onClick={sottrai}>Sottrai 2</button>
            <p> Il numero {contatore} è {controllaPariDispari()}</p>
        </div>
    )
}

export default Counter;