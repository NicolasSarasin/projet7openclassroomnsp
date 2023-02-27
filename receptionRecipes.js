window.onload = function () {
    //this function can run if it's a window.onload
    init(); //function init() in the window.onload
};

/*function algorithmic() {
    //function for the algorithm with the research area
    const research1 = document.getElementById("ingredient");
    const research2 = document.getElementById("devices");
    const research3 = document.getElementById("utensils");
    const arrowResearch = document.getElementById("arrow");
    //condition with 3 area of research(ingredients, devices, utensils)
    if (research1) {
        // if it's the reseach 1
        getRecipesData();
        if (arrowResearch.onclick()) {
            //if the arrow is clicked
            research1.style.height = "250px"; //css height for this area research
            research1.style.width = "750px"; //css width for this area research
            open(); //use function open for three arrows area research
        } else {
            research1.style.height = "31px";
            research1.style.width = "250px";
            close();
        }
        if (research1.lenght >= 3) {
            recipersFactory(ingredient);
            filtering(); //For there three area research, they use this function
        }
    } else if (research2) {
        // else if it's the reseach 2
        getRecipesData();
        if (arrowResearch.onclick()) {
            //if the arrow is clicked
            research2.style.height = "250px"; //css height for this area research
            research2.style.width = "750px"; //css width for this area research
            open();
        } else {
            research2.style.height = "31px";
            research2.style.width = "250px";
            close();
        }
        if (research2.lenght >= 3) {
            recipersFactory(devices);
            filtering();
        }
    } else if (research3) {
        // else if it's the reseach 3
        getRecipesData();
        if (arrowResearch.onclick()) {
            //if the arrow is clicked
            research3.style.height = "250px"; //css height for this area research
            research3.style.width = "750px"; //css width for this area research
            open();
        } else {
            //else if the arrow is not clicked or re-clicked
            research3.style.height = "31px";
            research3.style.width = "250px";
            close();
        }
        if (research3.lenght >= 3) {
            //if the research lenght have 3 caracters
            recipersFactory(utensils);
            filtering(); //function filter for there three area receasch
        }
    }
    //reduce, map
    return research1 || research2 || research3; // return one of these three research of this algorithm -> to see too with the mentor
}*/
//const tag for function filtering (function open and close)
async function filtering() {
    const r = [...recipes];
    const searchValue = document.getElementById("searchIngredient");
    if (searchValue.length >= 3) {
        //if the research lenght have 3 caracters
        for (var i = r.length - 1; i <= 0; i--) {
            if ((r[i] /= searchValue)) {
                //we delete the recipe of the table r
                r.splice(i);
            }
        }
    }
    //declaration of const variables for three areas research
    const Ingredient = document.getElementById("ingredient");
    const Device = document.getElementById("devices");
    const Utensil = document.getElementById("utensils");
    const arrowResearch = document.getElementById("arrow");
    const tag = ""; //tag of one of three area research
    if (Ingredient) {
        //if it's the ingredients
        if ((arrowResearch = onclick())) {
            Ingredient.style.height = "250px"; //css height for this area research
            Ingredient.style.width = "750px"; //css width for this area research
            if ((tag = onclick())) {
                tag; //the tag have the since color (text and background) of the area research
            }
        } else {
            Ingredient.style.height = "31px"; //css height for this area research
            Ingredient.style.width = "250px"; //css width for this area research
        }
    } else if (Device) {
        //if it's the devices
        if ((arrowResearch = onclick())) {
            Device.style.height = "250px"; //css height for this area research
            Device.style.width = "750px"; //css width for this area research
            if ((tag = onclick())) {
                //tag.delete; //the tag have the since color (text and background) of the area research
                tag;
            }
        } else {
            Device.style.height = "31px"; //css height for this area research
            Device.style.width = "250px"; //css width for this area research
        }
    } else if (Utensil) {
        //if it's the utensils
        if ((arrowResearch = onclick())) {
            Utensil.style.height = "250px"; //css height for this area research
            Utensil.style.width = "750px"; //css width for this area research
            if ((tag = onclick())) {
                tag; //the tag have the since color (text and background) of the area research
            }
        } else {
            Utensil.style.height = "31px"; //css height for this area research
            Utensil.style.width = "250px"; //css width for this area research
        }
    }
    //two functions (open and close) to open and to close the area research (ingredient, device or utensil)
    function open() {
        // this function is the opening of tags of one of areas research
        //const optionList = ""; // make four variables in this fonction, like function close
        const Ingredient = document.getElementById("ingredient");
        const Device = document.getElementById("devices");
        const Utensil = document.getElementById("utensils");
        if (Ingredient) {
            //condition with constents variables
        } else if (Device) {
        } else if (Utensil) {
        }
    }
    function close() {
        // this function is the closing of tags of one of areas research
        //const optionList = ""; // make four variables in this fonction, like function open
        const Ingredient = document.getElementById("ingredient");
        const Device = document.getElementById("devices");
        const Utensil = document.getElementById("utensils");
        if (Ingredient) {
            //condition with constents variables
        } else if (Device) {
        } else if (Utensil) {
        }
    }
    return { open, close }; //return there two functions for the function algorithmic
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
    return { name, description, getRecipersCardDOM }; //return name, description and the function getRecipersCardDom
}

async function displayRecipersData(recipes) {
    const recipersSection = document.querySelector(".recipes");
    recipersSection.innerHTML = "";
    recipes.forEach((recipers) => {
        const mediaModel = recipersFactory(recipes);
        const userRecipersCardDOM = mediaModel.getRecipersCardDOM();
        recipersSection.appendChild(userRecipersCardDOM);
    });
}

async function init() {
    // retrive datas
    const { recipes } = await filtering();
    displayRecipersData(recipes);
}
