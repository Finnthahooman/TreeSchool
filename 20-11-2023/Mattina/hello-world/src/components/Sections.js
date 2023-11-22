// Esercizio:
// Creare un componente che accetti un contenuto props.children 
// e che se è presente il children mostri anche un elemento p 
// con del testo che arrivi da un'altra prop ( additionalText )

import React from 'react';

function Section(props){

    return (
        <section>
            {props.children}
            {   props.children ? 

                <>
                <p>{props.additionalText}</p>
                </>  

                : null
                }
                    
        </section>
    )

}

export default Section