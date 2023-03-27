window.onload = function () {
    init(); //function init() in the window.onload
};

function filtering() {
    const r = [...recipes];
    const searchValue = document.getElementById("searchIngredient").value;
    //if the research lenght have 3 caracters
    if (searchValue.length >= 3) {
        // loop through receipies in (r) to exclude the ones which don't match (searchValue)
        for (var i = r.length - 1; i >= 0; i--) {
            if (
                r[i].name.indexOf(searchValue) < 0 &&
                r[i].description.indexOf(searchValue) < 0 &&
                !r[i].ingredients.some((ingredient) => {
                    const ok = ingredient.ingredient.indexOf(searchValue) >= 0;
                    return ok;
                })
            ) {
                //we delete the recipe of the array r
                r.splice(i, 1);
            }
        }
    }
    const Ingredient = document.getElementById("ingredient");
    const Device = document.getElementById("devices");
    const Utensil = document.getElementById("utensils");
    const arrowAreaResearch = document.getElementsByClassName(".fa-angle-up");
    const tag = ""; //tag of one of three area research
    const sectionAreaResearch = document.getElementsByClassName(".sectionForm");

    //Device.appendChild(sectionAreaResearch);
    //Utensil.appendChild(sectionAreaResearch);
    //extraire les ingrédients de la liste de recette (r) et les remplirs dans le filtre ingrédient
    if (Ingredient) {
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
    }
    displayRecipersData(r);
    return r;
    if (Device) {
        //create an element div
        r.forEach((r) => {
            const { appliance } = r;
            /*const { appliance } = r;*/
            const div = document.createElement("div"); //create a second variable r for this area research
            div.textContent = appliance; // this div have text content all appliances of the area research
        });
        //sectionIngredient.appendChild(div);
        //return r;
    } else {
        r.forEach((r) => {
            const { ustensils } = r;
            /*const { ustensils } = data;*/
            //create an element div
            const div = document.createElement("div");
            div.textContent = ustensils; // this div have text content all ustensils of the area research
            //sectionIngredient.appendChild(div);
        });
        //return r;
    }
    //div.className = "tagIngredient";
    //div.className = "tagDevice";
    //div.className = "tagUtensil";
    //extraire les appareils et les ustensils de la liste de recette (r) et les remplirs dans le filtre appareil et ustensile
}

function closeTag(elt) {
    //function to close tag (exemple:sugar)
    const tag = elt.parentElement;
    tag.parentElement.removeChild(tag);
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
    }
    return getIngredientsDOM;
}
function recipersDevicesFactory(data) {
    const { appliance } = data;
    function getDevicesDOM() {
        const div = document.createElement("div");
    }
    return getDevicesDOM;
}
function recipersUtensilsFactory(data) {
    const { ustensile } = data;
    function getUtensilsDOM() {
        const div = document.createElement("div");
    }
    return getUtensilsDOM;
}

function displayRecipersData(data) {
    const recipersSection = document.querySelector(".recipes");
    /*const ingredientSection = document.querySelector(".sectionIngredient");
    const deviceSection = document.querySelector(".sectionDevice");
    const utensilsSection = document.querySelector(".sectionUtensil");*/
    recipersSection.innerHTML = "";
    console.log(data);
    data.forEach((recipe) => {
        const mediaModel = recipersFactory(recipe);
        const userRecipersCardDOM = mediaModel.getRecipersCardDOM();
        recipersSection.appendChild(userRecipersCardDOM);
        /*const IngredientsModel = recipersIngredientsFactory(recipe);
        const userIngredientsCardDOM = IngredientsModel.getIngredientsDOM();
        ingredientSection.appendChild(userIngredientsCardDOM);
        const Devices = recipersDevicesFactory(recipe);
        const Utensils = recipersUtensilsFactory(recipe);*/
    });
}

async function init() {
    filtering();
}
