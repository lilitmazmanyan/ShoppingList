import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {ShoppingListComponent} from './body/shopping-list/shopping-list.component';
import {RecipeListComponent} from './body/recipe-book/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './body/recipe-book/recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './body/recipe-book/recipe-detail/recipe-detail.component';
import {ShoppingListEditComponent} from './body/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {recipesComponent} from './body/recipe-book/recipes.component';

import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    recipesComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
