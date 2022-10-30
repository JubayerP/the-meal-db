const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  console.log(meals);
    const mealsContainer = document.getElementById("meal-container");
    mealsContainer.innerHTML = ``;
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("card", "w-96", "bg-white", "shadow-xl");
    mealDiv.innerHTML = `
        <div>
            <figure class="px-10 pt-10">
            <img src="${meal.strMealThumb}" alt="Food" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
            <h2 class="card-title">${meal.strMeal}</h2>
            <p title="${meal.strInstructions}">${meal.strInstructions.slice(0,100)}...</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
        </div>
        `;
    mealsContainer.appendChild(mealDiv);
  });
};

const searchFood = () => {
    const searchFood = document.getElementById('searchFood');
    const searchText = searchFood.value;
    loadMeals(searchText);

    searchFood.value = ``;
}

loadMeals('a');
