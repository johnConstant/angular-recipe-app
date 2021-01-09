import { EventEmitter, Injectable } from "@angular/core";
import Ingredient from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is going to be a delicious test recipe",
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg",
      [
        new Ingredient("chives", 1, " bunch"),
        new Ingredient("chicken", 2, " breasts"),
        new Ingredient("mushrooms", 10, ""),
        new Ingredient("cream", 100, "ml"),
        new Ingredient("garlic", 2, " cloves"),
      ]
    ),
    new Recipe(
      "Test Recipe 2",
      "This is going to be another delicious test recipe",
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_1280.jpg",
      [
        new Ingredient("beef pieces", 1, "lb"),
        new Ingredient("carrots", 2, ""),
        new Ingredient("potatoes", 4, " units"),
        new Ingredient("stock", 250, "ml"),
        new Ingredient("garlic", 1, " bulb"),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
