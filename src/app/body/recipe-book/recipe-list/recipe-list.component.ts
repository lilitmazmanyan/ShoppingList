import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
selector: 'app-recipe-list',
templateUrl: './recipe-list.component.html',
styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('French Fries',  ';)', 'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/b5464d-splendid-table-french-fries.jpg')
];


constructor() {
}

ngOnInit(): void {
}

}
