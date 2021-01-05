import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipe-book.component.html",
  styleUrls: ["./recipe-book.component.css"],
})
export class RecipeBookComponent implements OnInit {
  @Output() recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is going to be a delicious test recipe",
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    ),
    new Recipe(
      "Test Recipe 2",
      "This is going to be another delicious test recipe",
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_1280.jpg"
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
