import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit {
  @Input() currentRecipeForDetails;

  constructor(private rc: RecipeService) {
  }

  ngAfterViewInit(): void {
    console.log(this.currentRecipeForDetails);
  }

  ngOnInit(): void {
  }

  passDataToShoppingList(): void {
    this.rc.addIngredientsToShoppingList(this.currentRecipeForDetails.ingredients);
  }
}
