import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipe() {
    const recipe = this.recipeService.getRecipe();
    this.http
      .put(
        "https://ng-course-recipe-book-fff6e.firebaseio.com/recipes.json",
        recipe
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchrecipe() {
    this.http
      .get<Recipe[]>(
        "https://ng-course-recipe-book-fff6e.firebaseio.com/recipes.json"
      )
      .subscribe(response => {
        this.recipeService.setRecipes(response);
      });
  }
}
