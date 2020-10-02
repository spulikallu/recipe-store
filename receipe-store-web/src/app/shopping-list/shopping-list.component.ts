import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Rice', 500),
    new Ingredient('Curd', 75),
    new Ingredient('Color', 220),
  ];
  constructor() {}

  ngOnInit(): void {}
}
