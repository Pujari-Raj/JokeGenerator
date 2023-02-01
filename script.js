//
const generatejokebtn = document.querySelector("#jokeBtn");
const grabbedjoke = document.querySelector(".joke");

generatejokebtn.addEventListener('click', () => {
    console.log('button clicked!!');
    fetch('https://api.chucknorris.io/jokes/random')
    .then((resp) =>{
        return resp.json();
    })
    .then((data) => {
        grabbedjoke.innerHTML = data.value;
    })
});