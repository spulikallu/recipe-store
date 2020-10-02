import { Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  @ViewChild('receipeRow', {static:true}) receipeRowDiv: ElementRef;
  @ContentChild('recipeRowName', {static:true}) recipeRowNameDiv: ElementRef;
 
  constructor() { }

  ngOnInit(): void {
  }

  receipeSelected(recipe: Receipe){
    console.log('receipie selected');
    this.displayRecipe.emit(recipe);
  }

  highlightItem(){
    this.receipeRowDiv.nativeElement.style.backgroundColor='#f4ffba';
    this.recipeRowNameDiv.nativeElement.style.backgroundColor='red';
  }

}
