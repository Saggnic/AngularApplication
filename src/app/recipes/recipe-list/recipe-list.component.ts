import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is test recipe",
      "https://images.immediate.co.uk/production/volatile/sites/2/2019/08/Quick-fix-breaded-chic-right1-5946bae.jpg?quality=90&resize=940,626"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
