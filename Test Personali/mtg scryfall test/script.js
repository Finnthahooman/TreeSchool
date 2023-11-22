
function fetchCardByName(name) {
    setTimeout(() => {
        fetch(`https://api.scryfall.com/cards/search?order=name&q=${name}`)
            .then(response => response.json())
            .then(data => {
                const cardArray = data.data;
                const ul = document.getElementById('cardList');
                ul.innerHTML = ''; // clear the list first

                cardArray.forEach(card => {
                    const li = document.createElement('li');
                    li.textContent = card.name;
                    ul.appendChild(li);
                });
            })
            .catch(error => console.log(error));
    }, 60);
}
