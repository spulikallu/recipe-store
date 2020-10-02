import { Component } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingServiceService]
})
export class AppComponent {
  title = 'receipe-store-web';
  selectedMenu: string = 'receipe';

  onNavigateTo(menu: string){
    console.log(menu);
    this.selectedMenu = menu;
  }
}
