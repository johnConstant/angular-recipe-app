import { EventEmitter } from "@angular/core";
import Ingredient from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients = [
    new Ingredient("Chicken", 2, "breasts"),
    new Ingredient("Cheese", 3, "ounces"),
    new Ingredient("Tomato", 6, "units"),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
