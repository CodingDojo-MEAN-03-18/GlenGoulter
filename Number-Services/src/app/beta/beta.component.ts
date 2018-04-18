import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  myBetaArray : Array<number> = [];
  constructor(private _numberService : NumberService) { }

  ngOnInit() {
    this.myBetaArray = this._numberService.retrieveBetaNumbers();
  }

  pushNumber(){
    this._numberService.addNumberToBeta(Math.floor(Math.random()*10));
  }

}
