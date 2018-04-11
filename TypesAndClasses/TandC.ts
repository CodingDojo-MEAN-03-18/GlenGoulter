//myNum = 5;
var myNum: number = 5;
//myString = "Hello Universe";
var myString: String = "Hello Universe";
//myArr = [1,2,3,4];
var MyArray: Array<number> = [1,2,3,4];
//myObj = { name:'Bill'};
var myObj =  {
    name : "Bill"
}
// anythingVariable = "Hey";
var anythingVariable : any = "Hey";
// anythingVariable = 25; 
var anythingVariable : any = 25;
// arrayOne = [true, false, true, true]; 
var arrayOne : Array<boolean> = [true,false,true,true];
// arrayTwo = [1, 'abc', true, 2];
var arrayTwo : Array<any> = [1,'abc',true,2];
// myObj = { x: 5, y: 10 };
var myobj = {
    a: 1, b:2
}
// object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
class MyNode{
    val: number;
    _priv : number;

    constructor(valueP: number){
        this.val = 0;
        this.val = valueP;
	}
    doSomething(){
        this._priv = 10;
    }
}

// myNodeInstance = new MyNode(1);
let myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
console.log(myNodeInstance.val);

// function myFunction1() {
//     console.log("Hello World");
//     return;
// }
function myFunction():void{
    console.log("Hello World");
    return;
}
// function sendingErrors() {
// 	throw new Error('Error message');
// }

function sendingErrors():never{
    throw new Error("Error Message");
}

