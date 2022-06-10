"use strict";

const data = [
    {
        titulo: "Tipo Agua",
        descripcion: "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición.",
        icono: "./images/water_type.png",
        estiloClase: "agua"
    },
    {
        titulo: "Tipo Planta",
        descripcion: "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate.",
        icono: "./images/grass_type.png",
        estiloClase: "planta"
    },
    {
        titulo: "Tipo Electricidad",
        descripcion: "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad.",
        icono: "./images/electric_type.png",
        estiloClase: "electricidad"
    },
    {
        titulo: "Tipo Fuego",
        descripcion: "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc.",
        icono: "./images/fire_type.png",
        estiloClase: "fuego"
    }
];


let accumulator = ""
for(const pokemonTipo of data){
    accumulator+=    
    `
    <article class="${pokemonTipo.estiloClase}">
    <div class="header">
        ${pokemonTipo.titulo}
    </div>            
    <div>
        <p id="descripcion">
            ${pokemonTipo.descripcion}
        </p>
    </div>
    <img
    src=${pokemonTipo.icono}
    class="icon-type"
    alt="icon type"
    />
    </article>
    `
};

const section = document.querySelector("section");
section.innerHTML = accumulator;
