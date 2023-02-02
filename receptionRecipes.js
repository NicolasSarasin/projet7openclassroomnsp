async function getData() {
    const response = await fetch("recipes.js");
    const data = await response.js();
    return data;
}

async function getRecipesData() {
    const recipers = (await getData()).recipers;
    console.log(recipers);

    // return recipers tab one time
    return [...recipers];
}

/*async function getReciperData(id) {	
}*/

function algorithmic() {
    const research1 = document.getElementById("ingredient");
    const research2 = document.getElementById("devices");
    const research3 = document.getElementById("utensils");
    if (research1) {
    } else if (research2) {
    } else {
    }
}

function recipersFactory(data) {
    const { name, ingredient, quantity, unit } = data;
    function getRecipersCardDOM() {
        const displayResipers = document.createElement("article");
        const generalDiv = document.createElement("div");
        const reciperDiv = document.createElement("div");
        const name = document.createElement("h1");
        const titleReciper = document.createElement("h1");
        const span = document.createElement("span");
        generalDiv.classList.add("mainDiv");
        reciperDiv.classList.add("bottomDiv");
        name.textContent = name;
        titleReciper.textContent = ingredient + ": ";
        span.textContent = quantity + unit;
        displayResipers.appendChild(generalDiv);
        displayResipers.appendChild(reciperDiv);
        reciperDiv.appendChild(name);
        reciperDiv.appendChild(titleReciper);
        reciperDiv.appendChild(span);
        return displayResipers;
    }
    return { name, getRecipersCardDOM };
}

async function displayRecipersData() {
    const recipersSection = document.querySelector(".recipes");
    recipersSection.innerHTML = "";
    recipes.forEach((recipers) => {
        const mediaModel = recipersFactory(recipes);
        const userRecipersCardDOM = mediaModel.getRecipersCardDOM();
        recipersSection.appendChild(userRecipersCardDOM);
    });
}

async function init() {
    // Récupère les datas
    displayRecipersData();
}
