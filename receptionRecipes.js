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

/*function algorithmic() {
    const research1 = document.getElementById("ingredient");
    const research2 = document.getElementById("devices");
    const research3 = document.getElementById("utensils");
    if (research1) {
    } else if (research2) {
    } else if (research3) {
    }
}*/

function recipersFactory(data) {
    const { name, time, ingredient, quantity, unit, description } = data;
    function getRecipersCardDOM() {
        const displayResipers = document.getElementById("mainDiv");
        const reciperDiv = document.getElementById("bottomDiv");
        const name = document.getElementById("title");
        const titleReciper = document.getElementById("titleReciper");
        const span = document.getElementById("spanRecipers");
        const description = document.getElementById("paragrapheFooter");
        name.textContent = name + time;
        titleReciper.textContent = ingredient + ": ";
        span.textContent = quantity + unit;
        description.textContent = description;
        displayResipers.appendChild(reciperDiv);
        reciperDiv.appendChild(name);
        reciperDiv.appendChild(titleReciper);
        reciperDiv.appendChild(span);
        reciperDiv.appendChild(description);
        return displayResipers;
    }
    return { name, description, getRecipersCardDOM };
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
