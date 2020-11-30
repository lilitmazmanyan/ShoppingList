import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipes.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private sls: ShoppingService) {
  }

  private recipes: Recipe[] = [
    new Recipe('French Fries', ';)',
      'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/b5464d-splendid-table-french-fries.jpg',
      [new Ingredient('potatoes', 6),
        new Ingredient('salt', 1),
        new Ingredient('sunflower oil', 1)]),
    new Recipe('Olivye', 'salad',
      'https://cdn.momsdish.com/wp-content/uploads/2012/10/Olivier-Potato-Salad-07-scaled.jpg',
      [new Ingredient('potatoes', 2),
        new Ingredient('eggs', 2),
        new Ingredient('picklets', 6),
        new Ingredient('chicken breast', 2)])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.sls.addIngredientsToTheList(ingredients);
  }

}
