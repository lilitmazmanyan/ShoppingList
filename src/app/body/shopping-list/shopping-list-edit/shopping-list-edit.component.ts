import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingService} from '../shopping.service';

@Component({
  selector: ' app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('inputName', {static: true}) inputName: ElementRef;
  @ViewChild('inputNumber', {static: true}) inputNumber: ElementRef;

  constructor(private sc: ShoppingService) {
  }

  ngOnInit(): void {
  }

  onAddCLick(): void {
    this.sc.add(this.inputName.nativeElement.value, this.inputNumber.nativeElement.value);
  }
}
