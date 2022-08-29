const lodeFood = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadDisplay(data.meals));
};


// ===Card funcrtion===
const loadDisplay = (data) => {
  const maincontainer = document.getElementById("allFood");
  maincontainer.textContent="";
  data.forEach((element) => {
    console.log(element);
    const newTag = document.createElement("div");
    newTag.classList.add("col");
    newTag.innerHTML = `
        <div class="card">
         <img src="${element.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
              <h5 class="card-title">${element.strMeal}</h5>
              <h6>Weight: ${element.strMeasure1}</h6>
              <h6>ID: ${element.idMeal}</h6>
             <p class="card-text mt-4">${element.strInstructions.slice(0, 200)}</p>
           </div>
         </div>
    `;
    maincontainer.appendChild(newTag);
  });
};


// ===Search===
const searchFood= () =>{
    const searchInput = document.getElementById('searchfield');
    const searchFied = searchInput.value;
   lodeFood(searchFied);
}


lodeFood();
