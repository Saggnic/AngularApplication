import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";

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
    return this.http
      .get<Recipe[]>(
        "https://ng-course-recipe-book-fff6e.firebaseio.com/recipes.json"
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredient: recipe.ingredient ? recipe.ingredient : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
