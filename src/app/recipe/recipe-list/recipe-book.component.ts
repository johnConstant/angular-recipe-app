import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipe-book.component.html",
  styleUrls: ["./recipe-book.component.css"],
})
export class RecipeBookComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
