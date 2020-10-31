import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipes.component.html'
})

// tslint:disable-next-line:class-name
export class recipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() {
  }

  ngOnInit(): void {
  }

}
