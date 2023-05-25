const navbar = document.getElementById("navbar")
const checkNavName = localStorage.getItem('nome')
navbar.innerHTML= `<div>
    <a class="links-navbar" href="./index.html">Home  </a>
    <a class="links-navbar" href="./cartoons.html">Cartoons  </a>
    <a class="links-navbar" href="./animations.html">Animations  </a>
    </div>
    <div id="info-navbar">
        <div id="nome-navbar"><p id="nome-na-nav">${checkNavName}</p></div>
        <img onclick="logar()" id="navbar-image" src="./images/NavBar/morty.jpeg">
    </div>

    `

function logar(){
    var userName = prompt('Por favor coloque seu nome: ')
    localStorage.setItem('nome', userName)
    localStorage.removeItem('userName')
    const userNameCampo = document.getElementById('nome-navbar')
    userNameCampo.innerHTML = `<p id="nome-na-nav">${userName}</p>`;
    if (userName === null){
        userNameCampo.innerHTML = `<p id="nome-na-nav">Não Logado</p>`
    }
}