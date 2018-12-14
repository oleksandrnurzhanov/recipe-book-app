import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {Recipe} from "../../shared/recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {RecipeBookService} from "../recipe-book.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeBookService: RecipeBookService
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeBookService.getRecipeById(this.id);
      })
  }

  public onAddToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
