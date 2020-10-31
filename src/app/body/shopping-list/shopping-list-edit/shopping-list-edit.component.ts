import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: ' app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // @ts-ignore
  @ViewChild('inputName', {static: true}) inputName: ElementRef;
  // @ts-ignore
  @ViewChild('inputNumber', {static: true}) inputNumber: ElementRef;
  @Input() ingredients: Ingredient[];

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onAddCLick() {
    this.ingredients.push(new Ingredient(this.inputName.nativeElement.value, this.inputNumber.nativeElement.value));
  }
}
