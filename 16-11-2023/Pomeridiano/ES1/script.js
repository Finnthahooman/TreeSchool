/*
se non ci sono errori nella chiamata stampo un ul nel DOM con i planets negli li
e sopra la lista un tag h1 con il titolo del film e il numero di episodio
se c'è un errore mostriamo nel DOM un messaggio di errore
in ogni caso alla fine mostrate un h3 con scritto "è bello conoscere altri appassionati"
*/

async function fetchData(){
    try {
        let isCheck = document.getElementById("error").checked;

        let pianeti = "";
        if(isCheck){
            throw new Error("Hai attivato l'errore");
        }
        else{
            pianeti = "https://swapi.info/api/films/";
        }

        let response = await fetch(pianeti);
        let data = await response.json();
        console.log(data)
     
        let ul = document.getElementById("listaFilm");

        ul.innerHTML="";

        data.forEach(movie => {   
        // let h1 = document.createElement("h1");
        // h1.innerText=movie.title;
            ul.innerHTML += "<li><h1>" + movie.title + ":" + movie.episode_id + "</h1>" + movie.planets.join("<br>") +"</li>";
    });
    }
    catch (error) {
        alert("Errore nel caricamento dei dati" + error);
    }
    finally{
        let h3 = document.createElement("h3");
        h3.innerText = "è bello conoscere altri appassionati";
        document.body.appendChild(h3);
    }

}