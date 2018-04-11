import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-root',  //index.html says <base href="/"> <body>  <app-root></app-root></body>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  power:boolean = true;
  label:string = 'ON';
  buttons:Array<string> = ['ON', 'OFF', 'ON','ON', 'OFF', 'ON', 'OFF', 'ON', 'OFF', 'ON'];
  onButtonClick(data){
    if (this.buttons[data]=='ON'){
      this.buttons[data] = 'OFF'
    }
    else {this.buttons[data] = 'ON'}
    
  }
}
