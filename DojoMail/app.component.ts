import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  emails = [
    {'email': 'SOPH@cat.com', 'importance':true, 'subject':'ood', 'content':'is it time to eat?'},
    {'email': 'Lucy@cat.com', 'importance':false, 'subject':'sleep', 'content':'is it time to go to bed?'},
  ];
}

