"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");

const pokeName = document.querySelector('#pokeName');
const pokeTypes = document.querySelector('#pokeTypes');
const pokeStats = document.querySelector('#pokeStats');


const processData = (data) => {

    pokeName.textContent = data.name;
    const stats = data.stats;
    const types = data.types;

    pokeTypes.innerHTML = '';  // Borrar todos los divs dentro
    types.forEach(type => {
        // Por cada type crear un div cuyo contenido sea el tipo de pokemon
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });

    pokeStats.innerHTML = '';  // Borrar todos los divs dentro
    stats.forEach(stat => {
        // Por cada type crear un div cuyo contenido
        // sea el nombre del atributo (name) y su cantidad (amount)
        const statElement = document.createElement("div");

        const statElementName = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        
        const statElementAmount = document.createElement("div");
        statElementAmount.textContent = stat.base_stat;       
        
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });

}

fetch("bulbasaur.json") 
    .then(response => response.json())
    .then(data => {
        processData(data);
});