
/*
    <h1 id="title"></h1>
    <ul id="planets_list">

    </ul>
    <h3 style="display:none;" id="finally">è bello conoscere altri appassionati</h3>
    <p id="error_text"></p> 
*/

function getOrCreateElementById(id, tagName, callback){
    const rootElement = document.getElementById("root")
    const foundElement = document.getElementById(id)
    if(foundElement){
        callback(foundElement)
        return 
    }

    // non ho trovato un elemento per l'id parametro
    const newElement = document.createElement(tagName)
    newElement.id = id;
    const manipulatedElement = callback(newElement)
    rootElement.append(manipulatedElement)
    return document.getElementById(id)
}

async function printPlanetsFullJS(id){
    try {
        const movie = await fetchMovieById(id);
        // throw new Error("non si passa")

        // 1. recuperiamo il nostro h1 e riempiamolo con il testo richiesto
        getOrCreateElementById("title", "h1", function(h1Element){
            h1Element.innerText = `Titolo: ${movie.title}, id episodio: ${movie.episode_id}`
            return h1Element
        })
        
        // 2. crea un ul, riempiamo la lista con gli li
        const ulElement = getOrCreateElementById("planets_list", "ul", function(ulElement){
            ulElement.innerHTML = ""
            return ulElement
        })

        movie.planets.forEach(function(planet){
            const liElement = document.createElement("li")
            liElement.innerText = planet // url pianeta
            ulElement.appendChild(liElement)
        })
    
    } catch(e){
        console.log(e)
        //3. nel caso di errore riempiamo il nostro elemento dedicato 
        // con un testo
        getOrCreateElementById("error_text", "p", function(pElement){
            pElement.innerText = "qualcosa è andato storto"
            return pElement
        })
    
    } finally {
        // 4. mostriamo il nostro elemento dedicato modificando 
        // la proprietà display nel suo attributo style
        getOrCreateElementById("finally", "h3", function(h3Element){
            h3Element.innerText = "è bello conoscere altri appassionati"
            return h3Element
        })
        
    
    }
}

// printPlanetsFullJS(1)

//*** COMPONENTI JS *****/

function renderTitle(props){
    getOrCreateElementById("title", "h1", function(h1Element){
        h1Element.innerText = `Titolo: ${props.movieTitle}, id episodio: ${props.movieEpisodeId}`
        return h1Element
    })
}

function renderDirector(props){
    getOrCreateElementById("director", "h2", function(h2Element){
        h2Element.innerText = `Direttore: ${props.movieDirector}`
        return h2Element
    })
}

function renderProducer(props){
    getOrCreateElementById("producer", "h3", function(h3Element){
        h3Element.innerText = `Produttore: ${props.movieProducer}`
        return h3Element
    })
}

function renderOpening (props){
    getOrCreateElementById("opening_crawl", "p", function(pElement){
        pElement.innerText = props.movieOpening
        return pElement
    })
}

function renderPlanets(props){
    const ulElement = getOrCreateElementById("planets_list", "ul", function(ulElement){
        ulElement.innerHTML = ""
        return ulElement
    })

    props.planets.forEach(function(planet){
        const liElement = document.createElement("li")
        liElement.innerText = planet // url pianeta
        ulElement.appendChild(liElement)
    })
}

function renderSpecies(props){
    const ulEl = getOrCreateElementById("species_list", "ul", function(ulElement){
        ulElement.innerHTML = "";
        return ulElement
    })

    props.species.forEach(function(specie){
        const liElement = document.createElement("li");
        liElement.innerText = specie // url specie
        ulEl.appendChild(liElement)
    })
}

function renderLi(props){
    getOrCreateElementById("species_list", "ul", function(liElement){
        liElement.innerText = props
        return liElement
    })
}

function renderGreeting(props){
    getOrCreateElementById("finally", "h3", function(h3Element){
       
        h3Element.innerText = "è bello conoscere altri appassionati"
        return h3Element
    })
}
function renderError(props){
    getOrCreateElementById("error_text", "p", function(pElement){
       
        pElement.innerText = "qualcosa è andato storto"
        return pElement
    })
}

// COMPONENTE APP
function renderApp(props){

    if (props.isLoading === true ){
        return
    }
    if(props.hasError){
        renderError()

        renderGreeting()
        return 
    }

    if(props.planets !== undefined){
renderSpecies
        renderTitle({
            movieTitle: props.movieTitle,
            movieEpisodeId: props.movieEpisodeId
        })

        // qui vogliamo renderizzare il movie.director con un h2
        // renderDirector

        renderDirector({
            movieDirector: props.movieDirector
        })

        // inseriamo il nostro movie producer ( h3 )
        renderProducer({
            movieProducer: props.movieProducer
        })

        // inseriamo il movie "opening_crawl" ( p )
        renderOpening({
            movieOpening: props.movieOpening
        })


        renderPlanets({
            planets: props.planets
        })

        // qui vogliamo renderizzare la lista movie.species con ul e relativi li
        // renderSpecies

        renderSpecies({
            species: props.movieSpecies
        })
        


        renderGreeting()
    }
}

/*
  Lo scopo del nostro componente:
  - fetchare un film per Id
  - gestire un'interfaccia che mostri il dato e i vari momenti 
    di caricamento/errore relativi alla chiamata api
*/
async function App(props){

    async function fetchMovieById(id){
 
        const url = `https://swapi.dev/api/films/${id}/`
        // effettuare la nostra richiesta e vedere
        // che cosa intercetta il ritorno fetch
        // la response
        const res = await fetch(url);
        // ora che abbiamo la response vogliamo
        // ottenere un qualcosa che sia in un formato che
        // conosciamo e possiamo manipolare in JS
        // per questo utilizziamo il metodo json
        const movie = await res.json();
        return movie
    }
    // stato APPLICATIVO

    // 1. la mia app inizia il suo ciclo di vita, invochiamo il componente che lo 
    // gestisce passandogli tramite le props la situazione attuale
    renderApp({
        planets: undefined,
        isLoading: false,
        hasError: false
    })

    try {
        // 2. stiamo per fare la chiamata api
        // invochiamo nuovamente il nostro componente che gestisce il DOM
        // e gli passiamo tramite props la descrizione della nuova situazione
        renderApp({
            planets: undefined,
            isLoading: true,
            hasError: false
        })
        const movie = await fetchMovieById(props.id);
        // 3 - success
        // la chiamata api è andata bene
        // invochiamo il componente che gestisce il DOM
        // e gli passiamo tramite props la descrizione della nuova situazione
        //console.log(movie.opening_crawl)
        renderApp({
            planets: movie.planets,
            movieEpisodeId: movie.episode_id,
            movieTitle: movie.title,
            movieDirector: movie.director,
            movieProducer: movie.producer,
            movieOpening: movie.opening_crawl,
            movieSpecies: movie.species,
            isLoading: false,
            hasError: false
        })
    } catch(e){
        console.log(e)
        // 3 - failure
        // la chiamata api è andata male
        // invochiamo il componente che gestisce il DOM
        // e gli passiamo tramite props la descrizione della nuova situazione
        renderApp({
            planets: undefined,
            isLoading: false,
            hasError: true
        })
    }
}

// componente è una funzione
// -> ha in ingresso le props che sono rigorosamente un'oggetto ( props -> properties)
// -> può eseguire altri componenti o codice js arbitrario
// -> i dati ad altri componenti si passano sempre tramite formato oggetto
async function MyApplication(props){
    console.log("ciao sono qui")
    await App({id: props.id})
}

MyApplication({id: 1})



