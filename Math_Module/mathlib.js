// In this javascript module, you're going to return a javascript object that allows the 
//developer to do the following tricks.

//     add two numbers (e.g. math.add(2,3) should return 5)
//     multiply two numbers (e.g. math.multiply(3,5) should return 15)
//     square a number (e.g. math.square(5) should return 25)
//     return a random number between the two numbers 
        //(e.g. math.random(1,35) should return a random number between 1 and 35)

module.exports = function (){
    return {
        add: function(num1, num2) { 
            // add code here 
            console.log(num1 + num2);
        },
        multiply: function(num1, num2) {
            // add code here 
            console.log( num1 * num2) ;
        },
        square: function(num) {
            // add code here 
            console.log( num * num);
        },
        random: function(num1, num2) {
            // add code here
            // needs to return a random number between the two numbers 
            //(e.g. math.random(1,35) should return a random number between 1 and 35)
            
            //console.log(Math.floor(Math.random() * 10) + 1);  // returns a number between 1 and 10
            //console.log(Math.floor(Math.random() * num2) + num1);  // returns a number between num1 and num2
            let min = Math.ceil(num1);
            let max = Math.floor(num2);
            console.log(Math.floor(Math.random() * (max - min)) + min); //The maximum is exclusive and the minimum is inclusive
            //Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 

        }
    }
    };
          