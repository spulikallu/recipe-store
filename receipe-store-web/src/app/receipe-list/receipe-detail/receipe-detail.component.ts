import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() receipe: Receipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
