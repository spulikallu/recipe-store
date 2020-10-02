import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'receipe-store-web';
  selectedMenu: string = 'receipe';

  onNavigateTo(menu: string){
    console.log(menu);
    this.selectedMenu = menu;
  }
}
