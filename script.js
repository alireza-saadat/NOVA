
const facts = [
    "A day on Venus is longer than its year!",
    "Jupiter has 95 officially recognized moons.",
    "Light from the Sun takes about 8 minutes to reach Earth.",
    "Saturn could theoretically float in water.",
    "Neutron stars are incredibly dense.",
    "Footprints on the Moon can last millions of years.",
    "The universe is approximately 13.8 billion years old."
];

const factElement = document.getElementById("fact");
const button = document.getElementById("newFact");

let previousIndex = -1;

button.addEventListener("click", function () {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;

    factElement.textContent = facts[randomIndex];
});
