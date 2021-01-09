import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import Ingredient from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shoppingList.service";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  @ViewChild("weightInput") weightInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const ingredientWeight = this.weightInputRef.nativeElement.value;

    const newIngredient = new Ingredient(
      ingredientName,
      ingredientAmount,
      ingredientWeight
    );
    this.shoppingListService.addIngredient(newIngredient);
  }
}
