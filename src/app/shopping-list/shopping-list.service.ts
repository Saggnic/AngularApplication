import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
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
}
