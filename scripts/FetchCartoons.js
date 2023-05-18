var urlCartoon = 'https://api.sampleapis.com/cartoons/cartoons2D'

fetch(urlCartoon)
    .then(res=>res.json())
    .then(data=>PopularATela(data))
    .then(data=>console.log(data))
    .catch(erro =>console.log(erro))

    function PopularATela(data){
        const div = document.getElementById("cartoonsList");
        const allCards = data.map(item=>`
        <div>
            <div class="textCards">
                <h2 class="itensCard">${item.title}</h2>
                <h2 class="itensCard">Episodios: ${item.episodes}</h2>
                <h2 class="itensCard">Gênero ${item.genre}</h2>
            </div>
            <img class="imageCard" src="${item.image}">
        </div>
        `).join('');
        div.innerHTML = allCards;
    }