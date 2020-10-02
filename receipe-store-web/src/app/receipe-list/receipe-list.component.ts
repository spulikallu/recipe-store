import { 
  AfterContentInit, 
  Component,
  EventEmitter, 
  OnChanges, 
  OnInit,
  Output, 
  SimpleChanges,
  DoCheck, 
  AfterContentChecked,
  OnDestroy
} from '@angular/core';
import { Receipe } from './receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
 

  recepieList: Receipe[] = [
    new Receipe('Biryani', 
    'The ultimate biryani for all biryani lovers', 
    '../../../assets/images/biryani.jpeg' ),
    new Receipe('Natukodi', 
    'The ultimate natukodi curry for all country chicken lovers', 
    '../../../assets/images/natukodi.jpeg' )
  ]

  selectedReceipe: Receipe;

  constructor() {
    console.log('constructor called');
  }
  ngOnDestroy(): void {
    console.log('Destroyed');
  }
  ngAfterContentChecked(): void {
    console.log('Method implemented ng after content checked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit inside');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ng onInit called');
  }

  showReceipe(recipe: Receipe){
   this.selectedReceipe = recipe;
  }

  ngDoCheck(){
    console.log('ng docheck called')
  }




}
