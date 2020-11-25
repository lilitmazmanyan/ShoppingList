import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipes.component.html'
})

export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;

    constructor() {
    }

    ngOnInit(): void {
    }

}
