import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  ingredientMessage = "";

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // const id=this.activatedRoute.snapshot.params['id'];//Only first time loading
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params["id"]; //this methods reflects the changes in the route also after loading.
      this.recipe = this.recipeService.getRecipeByIndex(this.id);
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
    for (let i in this.recipe.ingredient) {
      this.ingredientMessage +=
        " " +
        this.recipe.ingredient[i].name +
        "----" +
        this.recipe.ingredient[i].amount;
    }
    alert(this.ingredientMessage + " has been added to your shopping List");

    // alert(
    //   this.recipe.ingredient["amount"] +
    //     "-" +
    //     this.recipe.ingredient["name"] +
    //     " has been added to shopping list"
    // );
  }
  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.activatedRoute });
  }

  onDeleteRecipe() {
    this.recipeService.onDeleteRecipe(this.id);
    this.router.navigate(["/recepies"], { relativeTo: this.activatedRoute });
  }
}
