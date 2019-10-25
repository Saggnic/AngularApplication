import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Recipe } from "../recipe.model";
import { DataStorageService } from "src/app/shared/data-storage-service";
import { RecipeService } from "../recipe.service";

@Injectable({ providedIn: "root" })
export class ResipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService
  ) {}
  resolve(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ) {
    const recipes = this.recipesService.getRecipe();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchrecipe();
    } else {
      return recipes;
    }
  }
}
