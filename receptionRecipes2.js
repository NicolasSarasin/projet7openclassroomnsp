window.onload = function () {
    filtering();
};

function filtering() {
    let r = [...recipes];
    const searchValue = document.getElementById("searchIngredient").value;
    //if the research lenght have 3 caracters
    if (searchValue.length >= 3) {
        // loop through receipies in (r) to exclude the ones which don't match (searchValue)
        r = r.filter((recipe) => {
            return (
                recipe.name.indexOf(searchValue) >= 0 ||
                recipe.description.indexOf(searchValue) >= 0 ||
                recipe.ingredients.some(
                    (ingredient) =>
                        ingredient.ingredient.indexOf(searchValue) >= 0
                )
            );
        });
    }

    const tagIngredients = [];
    const tagDevices = [];
    const tagUstensils = [];
    const tagsList = document.getElementById("tagsList");
    Array.from(tagsList.children).forEach((c) => {
        const tagValue = c.children[0].textContent;
        if (c.classList.contains("tagIngredient")) {
            tagIngredients.push(tagValue);
            r = r.filter((recipe) =>
                recipe.ingredients.some(
                    (ing) => ing.ingredient.indexOf(tagValue) >= 0
                )
            );
        } else if (c.classList.contains("tagDevice")) {
            tagDevices.push(tagValue);
            r = r.filter((recipe) => recipe.appliance == tagValue);
        } else if (c.classList.contains("tagUtensil")) {
            tagUstensils.push(tagValue);
            r = r.filter((recipe) => recipe.ustensils.includes(tagValue));
        }
    });

    const Ingredient = document.getElementById("ingredient");
    const Device = document.getElementById("devices");
    const Utensil = document.getElementById("utensils");
    const arrowAreaResearch = document.getElementsByClassName(".fa-angle-up");
    const tag = ""; //tag of one of three area research
    const sectionAreaResearch = document.getElementsByClassName(".sectionForm");

    //Device.appendChild(sectionAreaResearch);
    //Utensil.appendChild(sectionAreaResearch);
    //extraire les ingrédients de la liste de recette (r) et les remplirs dans le filtre ingrédient
    /*if (Ingredient) {
        r.forEach((i) => {
            //For each time that's an ingredient
            const { ingredient } = i; //create a second variable r for this area research
            //console.log(r.ingredient);
            const div = document.createElement("div"); //create an element div
            div.textContent = ingredient; // this div have text content all ingredients of the area research
            //Ingredient.appendChild(sectionAreaResearch);
            //sectionAreaResearch.appendChild(div);
            //r.splice(i, 1);
        });

        //return r;
    }*/

    ingredients = [];
    let inputIngredient = document.getElementById("inputIngredient").value;

    r.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            if (
                !ingredients.includes(ingredient.ingredient) &&
                !tagIngredients.includes(ingredient.ingredient)
            ) {
                ingredients.push(ingredient.ingredient);
            }
        });
    });

    const ingredientsList = document.getElementById("ingredientsList");
    ingredientsList.innerHTML = "";
    ingredients.forEach((ingredient) => {
        const d = document.createElement("div");
        d.className = "tag";
        d.textContent = ingredient;
        ingredientsList.appendChild(d);
        d.onclick = function () {
            filteringTagIngredient(this);
        };
    });

    if (inputIngredient.length >= 3) {
        r = r.filter((recipe) => {
            return (
                recipe.name.indexOf(inputIngredient) >= 0 ||
                recipe.description.indexOf(inputIngredient) >= 0 ||
                recipe.ingredients.some(
                    (ingredient) =>
                        ingredient.ingredient.indexOf(inputIngredient) >= 0
                )
            );
        });
    }

    appliances = [];
    let inputAppliances = document.getElementById("inputDevice").value;
    r.forEach((recipe) => {
        if (
            !appliances.includes(recipe.appliance) &&
            !tagDevices.includes(recipe.appliance)
        ) {
            //(!appliances.includes(appliance)) && (!tagDevice.includes(appliance))
            appliances.push(recipe.appliance);
        }
    });
    const applianceList = document.getElementById("appliancesList");
    applianceList.innerHTML = "";
    appliances.forEach((appliance) => {
        const d = document.createElement("div");
        d.className = "tag";
        d.textContent = appliance;
        applianceList.appendChild(d);
        d.onclick = function () {
            filteringTagApplience(this);
        };
    });
    if (inputAppliances.length >= 3) {
        r = r.filter((recipe) => {
            return (
                recipe.name.indexOf(inputAppliances) >= 0 ||
                recipe.description.indexOf(inputAppliances) >= 0 ||
                recipe.appliance.some(
                    (appliance) =>
                        appliance.appliance.indexOf(inputAppliances) >= 0
                )
            );
        });
    }

    ustensils = []; // this constante have an array
    let inpUstensils = document.getElementById("inpUtensil").value;
    r.forEach((recipe) => {
        //for each recipe that take
        recipe.ustensils.forEach((ustensil) => {
            if (
                !ustensils.includes(ustensil) &&
                !tagUstensils.includes(ustensil)
            ) {
                ustensils.push(ustensil);
            }
        });
    });

    const ustensilsList = document.getElementById("ustensilsList");
    ustensilsList.innerHTML = "";
    ustensils.forEach((ustensil) => {
        const d = document.createElement("div");
        d.className = "tag";
        d.textContent = ustensil; //there balises div have an ustensil to display
        ustensilsList.appendChild(d);
        d.onclick = function () {
            filteringTagUstensil(this);
        };
    });
    if (inpUstensils.length >= 3) {
        r = r.filter((recipe) => {
            return (
                recipe.name.indexOf(inpUstensils) >= 0 ||
                recipe.description.indexOf(inpUstensils) >= 0 ||
                recipe.ustensils.some(
                    (ustensils) => ustensils.ustensil.indexOf(inpUstensils) >= 0
                )
            );
        });
    }
    displayRecipersData(r);

    return;
    //div.className = "tagIngredient";
    //div.className = "tagDevice";
    //div.className = "tagUtensil";
    //extraire les appareils et les ustensils de la liste de recette (r) et les remplirs dans le filtre appareil et ustensile
}

let ingredients = [];
let appliances = [];
let ustensils = [];

function displayIngredients(list) {
    const ingredientsList = document.getElementById("ingredientsList");
    ingredientsList.innerHTML = "";
    list.forEach((ingredient) => {
        const d = document.createElement("div");
        d.className = "tag";
        d.textContent = ingredient;
        ingredientsList.appendChild(d);
        d.onclick = function () {
            filteringTagIngredient(this);
        };
    });
}

function displayAppliences(list) {
    const applianceList = document.getElementById("appliancesList");
    applianceList.innerHTML = "";
    list.forEach((appliance) => {
        const d = document.createElement("div");
        d.className = "tag";
        d.textContent = appliance;
        applianceList.appendChild(d);
        d.onclick = function () {
            filteringTagApplience(this);
        };
    });
}

function displayUstensils(list) {
    const ustensilsList = document.getElementById("ustensilsList");
    ustensilsList.innerHTML = "";
    list.forEach((ustensil) => {
        const d = document.createElement("div");
        d.className = "tag";
        d.textContent = ustensil; //there balises div have an ustensil to display
        ustensilsList.appendChild(d);
        d.onclick = function () {
            filteringTagUstensil(this);
        };
    });
}

function filterIngredients(txt) {
    let list = [];
    if (txt == "") {
        list = [...ingredients];
    } else {
        ingredients.forEach((ingredient) => {
            if (ingredient.includes(txt)) {
                list.push(ingredient);
            }
        });
    }
    displayIngredients(list);
}

function filterAppliences(txt) {
    let list = [];
    if (txt == "") {
        list = [...appliances];
    } else {
        appliances.forEach((appliance) => {
            if (appliance.includes(txt)) {
                list.push(appliance);
            }
        });
    }
    displayAppliences(list);
}

function filterUstensils(txt) {
    let list = [];
    if (txt == "") {
        list = [...ustensils];
    } else {
        ustensils.forEach((ustensil) => {
            if (ustensil.includes(txt)) {
                list.push(ustensil);
            }
        });
    }
    displayUstensils(list);
}

function filteringTag(elt, className) {
    const SectionDivTags = document.getElementById("tagsList");
    const tag = document.createElement("div");
    const tagDiv = document.createElement("div");
    tagDiv.textContent = elt.textContent;
    const icon = document.createElement("i");
    icon.className = "fa-regular fa-circle-xmark";
    tag.className = className;
    icon.onclick = function () {
        closeTag(this);
    };
    tag.appendChild(tagDiv);
    tag.appendChild(icon);
    SectionDivTags.appendChild(tag);
    filtering();
}

function filteringTagIngredient(elt) {
    filteringTag(elt, "Tag tagIngredient");
}

function filteringTagApplience(elt) {
    filteringTag(elt, "Tag tagDevice");
}

function filteringTagUstensil(elt) {
    filteringTag(elt, "Tag tagUtensil");
}

function closeTag(elt) {
    //function to close tag (exemple:sugar)
    const tag = elt.parentElement;
    tag.parentElement.removeChild(tag);
    filtering();
}

function recipersFactory(data) {
    //this is a function for the tab of recipers
    const { name, time, ingredients, quantity, unit, description } = data;
    function getRecipersCardDOM() {
        const article = document.createElement("article"); //create an article balise
        article.className = "mainDiv"; //this article take name class mainDiv

        const div1 = document.createElement("div"); //create the first div balise
        div1.className = "bottomDiv"; //this div take name class bottomDiv
        article.appendChild(div1);

        const h2 = document.createElement("h2"); //create the h2 balise
        h2.className = "title"; //this h2 take name class title
        div1.appendChild(h2);
        const span = document.createElement("span"); //create the first span balise
        span.className = "spanH2"; //this span take name class spanH2
        h2.appendChild(span);
        span.textContent = name;
        const span2 = document.createElement("span"); //create the second span balise
        h2.appendChild(span2);
        const icon = document.createElement("i"); //create the icon balise
        icon.className = "fa-regular fa-clock"; //this icon balise take name class fa-regular fa-clock
        span2.appendChild(icon);
        const text1 = document.createTextNode(" " + time + " min"); //create the first textNode
        span2.appendChild(text1);

        const div2 = document.createElement("div"); //create the second div balise
        div2.className = "divFooter"; //this div take name class divFotter
        div1.appendChild(div2);

        const div3 = document.createElement("div"); //create the third div balise
        div3.className = "divChildFooter"; //this div take name class divChildFotter
        div2.appendChild(div3);
        const h1 = document.createElement("h1"); //create the h1 balise
        h1.className = "titleReciper"; //this h1 take name class titleReciper
        div3.appendChild(h1);
        let temp = [];
        for (let i = 0; i < ingredients.length; i++) {
            let str = ingredients[i].ingredient;
            if (ingredients[i].quantity) {
                str += " (" + ingredients[i].quantity;
                if (ingredients[i].unit) {
                    str += " " + ingredients[i].unit;
                }
                str += ")";
            }
            temp.push(str);
        }
        const text2 = document.createTextNode(temp.join(", ")); //create the second textNode
        h1.appendChild(text2);

        const div4 = document.createElement("div"); //create the fourth div balise
        div4.className = "divChildFooter2"; //this div take name class divChildFotter2
        div2.appendChild(div4);
        const p = document.createElement("p"); //create the p balise
        p.className = "paragrapheFooter"; //this p take name class paragrapheFooter
        p.textContent = description;
        div4.appendChild(p);

        return article;
    }
    return { name, description, getRecipersCardDOM }; //return name, description and the function getRecipersCardDom
}

function recipersIngredientsFactory(data) {
    const { ingredient } = data;
    function getIngredientsDOM() {
        const div = document.createElement("div");
        div.textContent = ingredient;
    }
    return getIngredientsDOM;
}
function recipersDevicesFactory(data) {
    const { appliance } = data;
    function getDevicesDOM() {
        const div = document.createElement("div");
        div.textContent = appliance;
    }
    return getDevicesDOM;
}
function recipersUtensilsFactory(data) {
    const { ustensils } = data;
    function getUtensilsDOM() {
        const div = document.createElement("div");
        div.textContent = ustensils;
    }
    return getUtensilsDOM;
}

function displayRecipersData(data) {
    const recipersSection = document.querySelector(".recipes");
    const ingredientSection = document.querySelector(".ingredients");
    const deviceSection = document.querySelector(".sectionDevice");
    const utensilsSection = document.querySelector(".sectionUtensil");
    recipersSection.innerHTML = "";
    console.log(data);
    data.forEach((recipe) => {
        const mediaModel = recipersFactory(recipe);
        const userRecipersCardDOM = mediaModel.getRecipersCardDOM();
        recipersSection.appendChild(userRecipersCardDOM);
    });
}
