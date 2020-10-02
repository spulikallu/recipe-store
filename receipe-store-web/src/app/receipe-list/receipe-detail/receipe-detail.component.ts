import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { LoggingServiceService } from 'src/app/logging-service.service';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']

})
export class ReceipeDetailComponent implements OnInit {
  @Input() receipe: Receipe;

  constructor(private elRef: ElementRef, 
    private renderer: Renderer2, private logService: LoggingServiceService) {
      logService.statusUpdated.subscribe((message)=>{
        console.log("******" + message + "******");
      })
     }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#c9f8ff');
  }

}
