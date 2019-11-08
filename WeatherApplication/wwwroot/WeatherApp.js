//Select elements

const listContainerEl = document.querySelector(".listContainer");
const listOfCitiesEl = document.getElementsByTagName("li");

const tempContainerEl = document.querySelector(".container");
const tempValueEl = document.querySelector(".value p");
const tempDescEl = document.querySelector(".description p");
const tempCityEl = document.querySelector(".city p");
const goBackBtnEl = document.getElementById("goBack");
//click handler

//const city=["London, GB", "New York, US", "Tokyo, Japan", "Delhi, India", "Toronto, Canada", "Paris, France"];
for(var i=0; i<listOfCitiesEl.length; i++)
{
	(function(index){
        listOfCitiesEl[i].onclick = function(){
            //run Fake API to get data 
            fetch("https://localhost:44382", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })                
                .then(() => {
                    // assuming the api returned the following data:

                    var resultWeather = {
                        "London": "26°C, Sunny", "New York": "2°C, Rainy", "Tokyo": "-4°C, Rainy", "Delhi": "24°C, Clear", "Toronto": "10°C, Partly Cloudy", "Paris": "4°C, Cloudy"};

                    tempValueEl.innerHTML = resultWeather[listOfCitiesEl[index].innerText];
                    console.log(listOfCitiesEl[index].innerHTML);
                    tempCityEl.innerHTML = listOfCitiesEl[index].innerHTML;
                   
                })
                .catch(error => console.error('Unable to fetch data.', error));
        }                   
        }    
  )(i);
}

//TODO - make it work once in web app
function goBack() {
    tempContainerEl.style.display = "none";
    listContainerEl.style.display= "block";
}

