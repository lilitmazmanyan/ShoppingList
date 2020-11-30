import {Injectable} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

@Injectable()
export class ShoppingService {
  ingChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Cucumber', 1.5),
    new Ingredient('Tomatoes', 2)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  add(inputName, inputNumber): void {
    this.ingredients.push(new Ingredient(inputName, inputNumber));
    this.ingChanged.emit(this.ingredients.slice());
  }

  addIngredientsToTheList(ingredients: Ingredient[]): void {
    for (const i of ingredients) {
      this.ingredients.push(new Ingredient(i.name, i.amount));
      this.ingChanged.emit(this.ingredients.slice());
    }
  }
}
