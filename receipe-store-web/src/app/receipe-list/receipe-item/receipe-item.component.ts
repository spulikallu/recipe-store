import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Input } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe: Receipe;
  @Output() displayRecipe = new EventEmitter<Receipe>();

  constructor() { }

  ngOnInit(): void {
  }

  receipeSelected(recipe: Receipe){
    console.log('receipie selected');
    this.displayRecipe.emit(recipe);
  }

}
