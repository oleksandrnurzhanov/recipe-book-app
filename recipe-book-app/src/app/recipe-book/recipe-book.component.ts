import { Component, OnInit } from '@angular/core';
import {RecipeBookService} from "./recipe-book.service";
import {Recipe} from "../shared/recipe.model";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeBookService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit() {
    this.recipeBookService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      })
  }



}
