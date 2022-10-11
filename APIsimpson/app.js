const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
const img = document.querySelector(".img");
const title = document.querySelector(".title");
const phrase = document.querySelector(".phrase");
const btnGenere = document.querySelector(".btnGenere");

btnGenere.addEventListener("click", getApi);

function getApi(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        img.src = (data[0].image)
        title.textContent = (data[0].character)
        phrase.textContent = (data[0].quote)
    })  

}
