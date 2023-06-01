var urlCartoon = 'https://api.sampleapis.com/movies/animation'

fetch(urlCartoon)
    .then(res=>res.json())
    .then(data=>PopularATela(data))
    .then(data=>console.log(data))
    .catch(erro =>console.log(erro))

    function PopularATela(data){
        const div = document.getElementById("AnimationsList");
        const allCards = data.map(item=>`
        <div class="animationCard">
            <div class="cardContent">
                <h2 class="itensCard">${item.title}</h2>
                <img class="imageCard" src="${item.posterURL}">
            </div>
        </div>
        `).join('');
        div.innerHTML = allCards;
    }



