import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../shared/recipe.model";
import {RecipeBookService} from "../../recipe-book.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) {
  }

  ngOnInit() {
  }

  onSelected() {
    this.recipeBookService.recipeSelected.emit(this.recipe);
  }
}
