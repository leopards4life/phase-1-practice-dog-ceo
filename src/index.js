document.addEventListener("DOMContentLoaded", function() {
    fetchDogs();
    fetchBreeds();
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchDogs() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => renderDogs(json))
}

function renderDogs(dogs) {
    let allDogs = dogs.message;
    const main = document.getElementById("dog-image-container");
    allDogs.forEach(dog => {
        const img = document.createElement("img");
        img.src = dog;
        main.appendChild(img);
    });
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(breeds) {
    let allBreeds = Object.keys(breeds.message);
    const breedList = document.getElementById("dog-breeds");
    allBreeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        li.addEventListener("click", breedColorChange)
        breedList.appendChild(li)
    })
}

function breedColorChange (event) {
    event.target.style.color = "green";
}

const breedDropdown = document.querySelector("#breed-dropdown");
console.log(breedDropdown);
// breedDropdown.addEventListener("change", filterBreeds);


function filterBreeds(event) {
    let allBreeds = document.querySelectorAll("#li");
    let breedList = [...allBreeds];
    let filteredOutBreeds = breedList.filter(dog => dog.firstChild.innerText.charAt(0) !== event.target.value)
    for (breed of filteredOutBreeds) {
        breed.style.display = "none";
    }
};