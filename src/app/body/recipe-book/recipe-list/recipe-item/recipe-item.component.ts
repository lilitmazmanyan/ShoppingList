import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() current;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelectRecipe = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getRecipe() {
    this.onSelectRecipe.emit();
  }

}
