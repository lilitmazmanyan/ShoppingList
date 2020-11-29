import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() current;

  constructor(private rs: RecipeService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getRecipe() {
    this.rs.recipeSelected.emit(this.current);
  }

}
