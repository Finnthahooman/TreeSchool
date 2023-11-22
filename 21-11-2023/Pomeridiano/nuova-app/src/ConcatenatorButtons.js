// Partendo da una stringa iniziale 
// che viene settata dalle props.
// passiamo una prop di nome "initialString" e mettiamola come argomento
// di useState (passiamola come stato iniziale).

// Scriviamo 3 bottoni
// - il primo bottone aggiunge una seconda parte alla stringa ( " bottone 1")
// - il secondo bottone aggiunge un numero alla stringa (un numero arbitrario)
// - il terzo bottone ripristina la stringa iniziale ( valore della prop initialString )

import React, { useState } from 'react';

function Strings(props) {

    const [stringa, setStringa] = useState(props.initialString);

    function aggiungiBottone1(){
        setStringa(stringa + " bottone 1");
    }

    function aggiungiNumero(){
        setStringa(stringa + 1337);
    }

    function ripristina(){
        setStringa(props.initialString);
    }

    return (
        <div>
            <p>{stringa}</p>
            <button onClick={aggiungiBottone1}>Aggiungi bottone1 alla stringa</button>
            <button onClick={aggiungiNumero}>Aggiungi numeri alla stringa</button>
            <button onClick={ripristina}>Ripristina</button>
        </div>
    );

}

export default Strings;