import Navbar from "../../components/navbar";
import AddAndSearchBar from "./add-and-search-bar";
import FilterButtons from "./filter-buttons";
import CategoryCarousel from "./category-carousel";
import CategoryWrapped from "./category-wrapped";
import { useStore } from "../../zustand/store";
import { useState, useEffect } from "react";
import { getRecipes } from "../../services/api-service";
import RecipeCard from "../../components/recipe-card";

function Dashboard() {
  // STATES:
  const [query, setQuery] = useState("");

  // ZUSTAND:
  const userID = useStore((state) => state.userID);
  const allRecipes = useStore((state) => state.recipes);
  const filteredCategory = useStore((state) => state.filteredCategory);
  const { addRecipes } = useStore(); // Populates the Zustand recipes array

  // VARIABLES:
  const searchedRecipes = allRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase()),
  );

  // USE EFFECTS:
  // Get all recipes on load and update recipes array in the Zustand store:
  useEffect(() => {
    async function getRecipesArr(userID) {
      const res = await getRecipes(userID);
      addRecipes(res.data);
    }
    getRecipesArr(userID);
  }, []);

  // RENDER:
  if (allRecipes.length > 0) {
    return (
      <div className="dashboard-container">
        <Navbar />
        <AddAndSearchBar query={query} setQuery={setQuery} />
        <FilterButtons />
        {
          // All Recipes button selected:
          query.length === 0 &&
          filteredCategory === "All Recipes" ? (
            <>
              <CategoryCarousel categoryTitle="Starters" />
              <CategoryCarousel categoryTitle="Mains" />
              <CategoryCarousel categoryTitle="Sides" />
              <CategoryCarousel categoryTitle="Desserts" />
              <CategoryCarousel categoryTitle="Bakery" />
              <CategoryCarousel categoryTitle="Drinks" />
            </>
          ) : (
            query.length === 0 &&
            filteredCategory === "All Recipes" && (
              <h2>You have no recipes. Get cooking!</h2>
            )
          )
        }

        {
          // Specific category button selected:
          query.length === 0 && filteredCategory !== "All Recipes" && (
            <CategoryWrapped categoryTitle={`${filteredCategory}`} />
          )
        }

        {
          // Search results:
          query.length > 0 ? (
            <div className="category-wrapped-container">
              {searchedRecipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          ) : (
            ""
          )
        }
      </div>
    );
  }
}

export default Dashboard;
