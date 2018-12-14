import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../shared/recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeBookService {
  public recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      2,
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipeById(id: number) {
    return this.recipes.slice().find((recipe: Recipe) => recipe.id === id)
  }
}
