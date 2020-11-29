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
import {ShoppingListEditComponent} from './body/shopping-list/shopping-list-edit/shopping-list-edit.component';
import {CommonModule} from '@angular/common';
import {RecipesComponent} from './body/recipe-book/recipes.component';
import {RecipeDetailComponent} from './body/recipe-book/recipe-detail/recipe-detail.component';
import {FormsModule} from '@angular/forms';
import {ShoppingService} from './body/shopping-list/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    RecipesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule

  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
