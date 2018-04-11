import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-root',  //index.html says <base href="/"> <body>  <app-root></app-root></body>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date(); //sets the time when page is first displayed.
  lastTimeZone : number = 1;
  
  onButtonClick(data) {
    this.lastTimeZone = data;
    this.date = new Date();
    console.log(`Click event is working, data:`, data);
    console.log('thisDate: ', this.date);
    this.date.setHours(this.date.getHours()+data)
    console.log(`thisDate: again`, this.date);  
  }
}

// export class AppComponent {
//   date = new Date();
//   onButtonClick(data) {
//     let date = new Date();
//     console.log(`Click event is working, data:`, data);
//     console.log('thisDate: ', this.date);
//     console.log('****************Date: ', date);
//     date.setHours(this.date.getHours()+data)
//     this.date = date;
//     console.log(`Date:`, this.date);

//   }
// }

// export class AppComponent {
//   onButtonClick(data) { 
//     console.log(`Click event is working, data:`, data);
//     console.log(`Date:`, data);
//     //now.setHours(now.getHours() + 1)
//     this.data.setHours(this.data.getHours()+1)
//     console.log(`Date:`, this.data);
//   }
//   data = new Date();
// }


// export class AppComponent {
//   _date = new Date();
//   get date():any {
//       return this._date;
//   }
//   set date(theBar:boolean) {
//       this._date = theBar;
//   }
// }
