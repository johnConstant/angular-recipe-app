import { Component, OnInit } from "@angular/core";

import Ingredient from "../shared/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient("Chicken", 2, "breasts"),
    new Ingredient("Cheese", 3, "ounces"),
    new Ingredient("Tomato", 6, "units"),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
