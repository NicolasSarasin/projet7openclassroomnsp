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
    //function for the algorithm with the research area
    const research1 = document.getElementById("ingredient");
    const research2 = document.getElementById("devices");
    const research3 = document.getElementById("utensils");
    if (research1) {
        recipersFactory(research1);
    } else if (research2) {
        let devices = [];
        recipersFactory(devices);
    } else if (research3) {
        let utensils = [];
        recipersFactory(utensils);
    }
    //return;
}

function recipersFactory(data) {
    const { name, time, ingredients, quantity, unit, description } = data;
    function getRecipersCardDOM() {
        const article = document.createElement("article");
        article.className = "mainDiv"; //create an article balise

        const div1 = document.createElement("div"); //create the first div balise
        div1.className = "bottomDiv"; //this div take name class bottomDiv
        article.appendChild(div1);

        const h2 = document.createElement("h2"); //create the h2 balise
        h2.className = "title";
        div1.appendChild(h2);
        const span = document.createElement("span"); //create the first span balise
        span.className = "spanH2"; //this span take name class spanH2
        h2.appendChild(span);
        span.textContent = name;
        const span2 = document.createElement("span"); //create the second span balise
        h2.appendChild(span2);
        const icon = document.createElement("i");
        icon.className = "fa-regular fa-clock";
        span2.appendChild(icon);
        const text1 = document.createTextNode(time); //create the first textNode
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
        const text2 = document.createTextNode(); //create the second textNode
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
        text2.textContent = temp.join(", ");
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
