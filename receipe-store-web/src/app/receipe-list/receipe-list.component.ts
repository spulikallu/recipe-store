import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {
 

  recepieList: Receipe[] = [
    new Receipe('Biryani', 
    'The ultimate biryani for all biryani lovers', 
    '../../../assets/images/biryani.jpeg' ),
    new Receipe('Natukodi', 
    'The ultimate natukodi curry for all country chicken lovers', 
    '../../../assets/images/natukodi.jpeg' )
  ]

  selectedReceipe: Receipe;

  constructor() { }

  ngOnInit(): void {
  }

  showReceipe(recipe: Receipe){
   this.selectedReceipe = recipe;
  }



}
