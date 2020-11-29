import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipes.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('French Fries', ';)', 'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/b5464d-splendid-table-french-fries.jpg', ['potatoes', 'salt', 'sunflower oil']),
    new Recipe('Olivye', 'salad', 'https://cdn.momsdish.com/wp-content/uploads/2012/10/Olivier-Potato-Salad-07-scaled.jpg', ['potatoes', 'eggs', 'picklets', 'chicken breast'])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
