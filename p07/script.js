//gey Dom elements

const search = document.getElementById('search');
const submit = document.getElementById('submit');
const generate = document.getElementById('generate');
const resultsHeading = document.getElementById('results-heading');
const meals = document.getElementById('meals');
const selectedMeal = document.getElementById('selected-meal');

//function to search the meal using the api
function searchMeal(e){
    //prevent form submission and redirect
     e.preventDefault();
     //get the valuse from search input field
     const searchText = search.value;
    //check if search input field is empty
    if(searchText.trim) {
       //Fetch data from API
       fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
       .then(res => res.json())
       .then(data => {
           console.log(data);
           //Update Result Heading
           resultsHeading.innerHTML = `<h2>Search results for ${searchText}`
         //check if any meals returns from API
         if(data.meals === null){
            resultsHeading.innerHTML = `<h2>No results for searched text  ${searchText}`    
         } else{
             meals.innerHTML = data.meals.map(meal => `
             <div class="meal">
             <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
             <div class="meal-info" data-mealID="${meal.idMeal}"> 
             <h3>${meal.strMeal}</h3>
             </div>
             </div>
             `)
             .join('')
         }
        });
        //clear the search text
        search.value = '';
    }
    else(
        alert('Please enter search keyword')
    );
    //remove previous selected meal info
    selectedMeal.innerHTML = '';
};
//function to get details of selected meal
function getMeal(mealId) {
    //fetch the detail of meals using the meal id
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${mealId}`)
     .then( res => res.json())
     .then( data => {
      const meal = data.meals[0];
      displayMealDetails(meal);

     });
    }
//function to render meal details in UI
function displayMealDetails(meal) {
    //clear search results
    resultsHeading.innerHTML ='';
    meals.innerHTML = '';
    //Array to hold ingredients and measurements
    const ingredients = [];
    //loop over ingredient attributes
    for (let i = 1; i <= 20; i++) {
        //check if ingredient exits
        if(meal[`strIngredient${i}`]) {
        //push all tthe ingredients and measurements into the array
        ingredients.push(`${meal[`strIngredient${i}`]} : ${meal[`strMeasure${i}`]}`);
    } 
    else{
        break;
    }
};
//Render data into UI
selectedMeal.innerHTML = `
<div class="selected-meal-details">
<h1> ${meal.strMeal}</h1>
<img src="${meal.strMealThumb}" alt"${meal.strMeal}" />
<div class="selected-meal-info">
${meal.strCategory ? `<p>${meal.strCategory} </p>` :''}
${meal.strArea ? `<p>${meal.strArea} </p>` :''} 
 </div>
  <div class= "selected-meal-instructions">
  <p>${meal.strInstructions}</p>
  <h3>Ingredients</h3>
<ul>
  ${ingredients.map( ingredient => `<li>${ingredient}</li>`) .join('')}
</ul>
  </div>
</div>
`;
}
//Event Litsners
//litsen for form submit
submit.addEventListener('submit',searchMeal)

//2 listen for click on mealls
meals.addEventListener('click',e => {
    //find and return only if clicked on meal info div
    console.log(e);
    const mealInfo = e.path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        } else{
            return false;
        }
         
    });
    //check for click on random button
    generate.addEventListener('click', () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                displayMealDetails(res.meals[0]);
            })
            .catch(e => {
                
            });
    });
    //check if meal info exists
    if(mealInfo) {
        //get the data mealid attribute
     const mealId = mealInfo.getAttribute('data-mealid');
     console.log(mealId);   
    //fetch details of meal
    getMeal(mealId);
    }
   
});