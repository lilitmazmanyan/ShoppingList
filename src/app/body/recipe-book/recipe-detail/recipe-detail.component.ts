import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, AfterViewInit {
  @Input() currentRecipeForDetails;

  constructor() {

  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    console.log(this.currentRecipeForDetails);
  }

  ngOnInit(): void {
  }


}
