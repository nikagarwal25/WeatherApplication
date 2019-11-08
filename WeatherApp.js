//Select elements

const listContainerEl = document.querySelector(".listContainer");
const listOfCitiesEl = document.querySelector(".listOfCities");

const tempContainerEl = document.querySelector(".container");
const tempValueEl = document.querySelector(".value p");
const tempDescEl = document.querySelector(".description p");
//const tempCityEl = document.querySelector(".city p");
const goBackBtnEl = document.getElementById("goBack");
//click handler

//const city=["London, GB", "New York, US", "Tokyo, Japan", "Delhi, India", "Toronto, Canada", "Paris, France"];
for(var i=0; i<listOfCitiesEl.children.length; i++)
{
	(function(index){
        listOfCitiesEl.children[i].onclick = function(){
            //run Fake API to get data - TODO Niki
            tempValueEl.innerHTML = `26°<span>C</span>`;
            tempDescEl.innerHTML = `Sunny`;
            //tempCityEl.innerHTML = ``;
            
            tempContainerEl.style.display = "block";
            listContainerEl.style.display= "none";
            
        }    
  })(i);
}

//TODO - make it work once in web app
function goBack() {
    tempContainerEl.style.display = "none";
    listContainerEl.style.display= "block";
}

