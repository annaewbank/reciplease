const router = require("express").Router();
const userController = require("../Controllers/user");
const recipeController = require("../Controllers/recipe");

// userController routes:
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
// router.post("/logout", userController.logoutUser);

// recipeController routes:
router.get("/dashboard/:id", recipeController.getRecipes);
router.post("/create-recipe", recipeController.addARecipe);
router.post("/favourite-recipe", recipeController.toggleFavouritedUser);
router.delete(
  "/delete-recipe/:userId/:recipeId",
  recipeController.deleteRecipe,
);

router.all("*", (req, res) => {
  res.status(404).send("Sorry, not found...");
});

module.exports = router;
