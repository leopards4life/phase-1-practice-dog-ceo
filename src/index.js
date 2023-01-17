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
        img.style.width = "250px";
        img.style.height = "250px";
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
breedDropdown.addEventListener("change", filterBreeds);


function filterBreeds(event) {
    const allBreeds = document.querySelectorAll("li");
    const breedList = [...allBreeds];

    let filteredOutBreeds = breedList.filter(dog => dog.firstChild.textContent.charAt(0) !== event.target.value)
    for (breed of filteredOutBreeds) {
        breed.style.display = "none";
    }

    let filteredInBreeds = breedList.filter(dog => dog.firstChild.textContent.charAt(0) === event.target.value)
    for (breed of filteredInBreeds) {
        breed.style.display = "list-item";
    }

    if (event.target.value === "default") {
    for (breed of breedList) {
        breed.style.display = "list-item"; 
    }};
};
