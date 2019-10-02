import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 6)
  ];

  getIngedients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient); ///... converts array to list.push method can handle array  but as single objcet
  }
  // isItemPresentInList(ingredient: Ingredient) {
  //   console.log(this.ingredients.indexOf(ingredient));
  //   return this.ingredients.indexOf(ingredient);
  // }

  getingredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients);
  }
}
