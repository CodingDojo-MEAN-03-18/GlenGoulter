import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NumberService {
  alphaArray : Array<number> = [];
  betaArray : Array<number> = [];
  differnce : number;
  differnce$ = new BehaviorSubject(0);
  reducerA = (accumulator, currentValue) => accumulator + currentValue;
  // reducerB = (accumulator, currentValue) => accumulator + currentValue;

  constructor() { }
  //allow alpha and beta components to access their arrays
  retrieveAlphaNumbers():Array<number>{
      return this.alphaArray; 
  }

  retrieveBetaNumbers():Array<number>{
    return this.betaArray;
  }

  retrieveDifference():number{
    return this.differnce;
  }

  //push alpha number to alphaArray
  addNumberToAlpha(num:number){
    this.alphaArray.push(num);
  }

  //push beta number to betaArray
  addNumberToBeta(num:number){
    this.betaArray.push(num);
  }

  

  getArrayDifference(): number{
    console.log(`getArrayDiffernce in Service`);
    
    if (this.alphaArray.length>0 && this.betaArray.length > 0){
      this.differnce = this.alphaArray.reduce(this.reducerA) - 
      this.betaArray.reduce(this.reducerA);
      this.differnce$.next(this.differnce);
      console.log(`difference is ${this.differnce}`)
      return this.differnce;
      }
    }



}
