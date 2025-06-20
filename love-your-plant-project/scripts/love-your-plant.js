const currentYear = document.querySelector("#currentyear");

const hamButton = document.querySelector('#menu');
const pages = document.querySelector('.pages');

const today = new Date();

currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

hamButton.addEventListener('click', () => {
    pages.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const houseplants = [
    {
        plantName: "Aloe Vera",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/aloe-vera.webp"
    },
    {
        plantName: "Anthurium",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/anthurium.webp"
    },
    {
        plantName: "Jade Plant",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/houseplants/jade-plant.webp"
    },
    {
        plantName: "Kalanchoe",
        size: "Small",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/houseplants/kalanchoe.webp"
    },
    {
        plantName: "Monstera",
        size: "Large",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/monstera.webp"
    },
    {
        plantName: "Orchid",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/orchid.webp"
    },
    {
        plantName: "Peace Lily",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/peace-lily.webp"
    },
    {
        plantName: "Philodendron",
        size: "Large",
        flowers: "No",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/philodendron.webp"
    },
    {
        plantName: "Pothos",
        size: "Large",
        flowers: "No",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/pothos.webp"
    },
    {
        plantName: "Rubber Plant",
        size: "Medium",
        flowers: "No",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/rubber-plant.webp"
    },
    {
        plantName: "Snake Plant",
        size: "Large",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/snake-plant.webp"
    },
    {
        plantName: "Spider Plan",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/spider-plant.webp"
    },
    {
        plantName: "Succulents",
        size: "Small",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/houseplants/succulents.webp"
    },
    {
        plantName: "ZZ Plant",
        size: "Large",
        flowers: "No",
        sunlightExposure: "Indirect light",
        imgSource: "images/houseplants/zz-plant.webp"
    },
];

const outdoorplants = [
    {
        plantName: "Bougainvillea",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/bougainvillea.webp"
    },
    {
        plantName: "Boxwood",
        size: "Large",
        flowers: "No",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/boxwood.webp"
    },
    {
        plantName: "Daisy",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/daisy.webp"
    },
    {
        plantName: "Geranium",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/geranium.webp"
    },
    {
        plantName: "Hibiscus",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/hibiscus.webp"
    },
    {
        plantName: "Hosta",
        size: "Large",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/outdoor-plants/hosta.webp"
    },
    {
        plantName: "Hydrangea",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Indirect light",
        imgSource: "images/outdoor-plants/hydrangea.webp"
    },
    {
        plantName: "Lavander",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/lavander.webp"
    },
    {
        plantName: "Marygold",
        size: "Small",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/marygold.webp"
    },
    {
        plantName: "Oleander",
        size: "Large",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/oleander.webp"
    },
    {
        plantName: "Petunia",
        size: "Small",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/petunia.webp"
    },
    {
        plantName: "Rose",
        size: "Large",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/rose.webp"
    },
    {
        plantName: "Rosemary",
        size: "Medium",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/rosemary.webp"
    },
    {
        plantName: "Sunflower",
        size: "Large",
        flowers: "Yes",
        sunlightExposure: "Direct light",
        imgSource: "images/outdoor-plants/sunflower.webp"
    },
];

if (document.getElementById("album-content")) {
    createPlantCard(houseplants, "album-content");
}

if (document.getElementById("outdoor-album-content")) {
    createPlantCard(outdoorplants, "outdoor-album-content");
}

function createPlantCard(plantsArray, containerId) {
    const plantCardsContainer = document.getElementById(containerId);

    plantCardsContainer.innerHTML = "";

    plantsArray.forEach(plant => {
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = plant.imgSource;
        img.alt = plant.plantName;
        img.setAttribute("loading", "lazy");
        img.setAttribute("tabindex", "0");

        const table = document.createElement("table");

        table.innerHTML = `
            <tr><th class="titleCard" colspan="2">${plant.plantName}</th></tr>
            <tr><td class="label">Flowers: </td><td>${plant.flowers}</td></tr>
            <tr><td class="label">Sunlight Exposure: </td><td>${plant.sunlightExposure}</td></tr>
            <tr><td class="label">Size: </td><td>${plant.size}</td></tr>
        `;
        
        plantCardsContainer.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(table);
    });
}

function filterPlants(plantsArray, filterProperty, filterValue, containerId) {
    const filteredPlants = plantsArray.filter(plant => {
        return plant[filterProperty] === filterValue;
    });
    createPlantCard(filteredPlants, containerId);
}

function setActiveFilterLink(clickedId) {
    const links = document.querySelectorAll(".navigation a");
    links.forEach(link => {
        if (link.id === clickedId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function setupFilter(id, property, value) {
    const link = document.getElementById(id);
    if (!link) return;

    link.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveFilterLink(id);

        if (document.getElementById("album-content")) {
            filterPlants(houseplants, property, value, "album-content");
        } else if (document.getElementById("outdoor-album-content")) {
            filterPlants(outdoorplants, property, value, "outdoor-album-content");
        }
    });
}

setupFilter("small", "size", "Small");
setupFilter("medium", "size", "Medium");
setupFilter("large", "size", "Large");
setupFilter("flowers", "flowers", "Yes");
setupFilter("directSunlightExposure", "sunlightExposure", "Direct light");
setupFilter("indirectSunlightExposure", "sunlightExposure", "Indirect light");


const commonQuestionsWithAnswersHP = [
    {
        question: "How much light does this plant need?",
        answer: "Most indoor plants prefer bright, indirect light.",
    },
    {
        question: "How often should I water it?",
        answer: "Usually once a week, but check if the soil is dry first.",
    },
    {
        question: "Can I place it in the bathroom or bedroom?",
        answer: "Yes, as long as it gets enough light and ventilation.",
    },
    {
        question: "Is it toxic to pets or children?",
        answer: "Check the specific plant — some are toxic if ingested.",
    },
    {
        question: "Why are its leaves turning yellow?",
        answer: "Often due to overwatering or low light.",
    },
]

const commonQuestionsWithAnswersOP = [
    {
        question: "Does this plant tolerate direct sunlight?",
        answer: "Check the species — some love sun, others prefer shade.",
    },
    {
        question: "What is the minimum temperature it can handle?",
        answer: "Many outdoor plants can handle mild frost; check the label.",
    },
    {
        question: "How often should I water it if it's in the garden?",
        answer: "Usually 1-2 times per week, depending on weather.",
    },
    {
        question: "Does it need pruning? In which season?",
        answer: "Yes, usually in late winter or early spring.",
    },
    {
        question: "Does it attract beneficial insects or pests?",
        answer: "Many flowering plants attract pollinators like bees.",
    },
]

function createQuestionsAndAnswersSection(QuestionsAndAnswersArray, containerQandAId) {
    const questionsAndAnswersContainer = document.getElementById(containerQandAId);

    questionsAndAnswersContainer.innerHTML = "";

    const titleSectionElement = document.createElement("h2");
    titleSectionElement.textContent = `FREQUENTLY ASKED QUESTIONS`;
    questionsAndAnswersContainer.appendChild(titleSectionElement);

    QuestionsAndAnswersArray.forEach(item => {
            
        const questionElement = document.createElement("h3");
        questionElement.textContent = item.question;

        const answerElement = document.createElement("p");
        answerElement.textContent = item.answer;

        
        questionsAndAnswersContainer.appendChild(questionElement);
        questionsAndAnswersContainer.appendChild(answerElement);
    });
}

if (document.getElementById("questionAndAnswer-content")) {
    createQuestionsAndAnswersSection(commonQuestionsWithAnswersHP, "questionAndAnswer-content");
}

if (document.getElementById("outdoor-questionAndAnswer-content")) {
    createQuestionsAndAnswersSection(commonQuestionsWithAnswersOP, "outdoor-questionAndAnswer-content");
}