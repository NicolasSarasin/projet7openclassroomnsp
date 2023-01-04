async function getData() {
	const response = await fetch("recipes.js");
	const data = await response.js();
	return data;
}

async function getRecipesData() {

}

async function getReciperData(id) {

}

function recipersFactory(data){
	const{name,ingredient,quantity,unit}=data;
	function getRecipersCardDOM() {
		const displayResipers = document.createElement("article");
		const generalDiv=document.createElement("div");
		const reciperDiv=document.createElement("div");
		const name=document.createElement("h1");
		const titleReciper=document.createElement("h1");
		const span=document.createElement("span");
		generalDiv.classList.add("mainDiv");
		reciperDiv.classList.add("bottomDiv");
		name.textContent=name;
		titleReciper.textContent=ingredient + ": ";
		span.textContent=quantity + unit;
		displayResipers.appendChild(generalDiv);
		displayResipers.appendChild(reciperDiv);
		reciperDiv.appendChild(name);
		reciperDiv.appendChild(titleReciper);
		reciperDiv.appendChild(span);
		return displayResipers;
	}
	return{getRecipersCardDOM};
}

async function displayRecipersData(){
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