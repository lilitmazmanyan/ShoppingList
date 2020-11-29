import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private rs: RecipeService) {
  }

  ngOnInit(): void {
    this.rs.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
