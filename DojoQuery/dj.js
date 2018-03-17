$(document).ready(function(){    
    function Outer(){
        function $Dojo(myid){
            console.log(myid);
            // let myElem = document.getElementById(myid).addEventListener("click", function(){
            // document.getElementById(myid).innerHTML = "Hello World";
            // });
                document.getElementById(myid).addEventListener("click", function(){
                document.getElementById(myid).innerHTML = "Click Me";
                });
                document.getElementById(myid).addEventListener("mouseover", function(){
                document.getElementById(myid).innerHTML = "Hello World";
                });

            //return an object with methods that can manipulate the element associated with the id. 
            //The ability to click on an HTML element with a specific id.
            //return myElem//HTML element object with 2 methods, click and hover.
                return myid;
            }
        return $Dojo;
    }
    var test = Outer();
    test('id1');
})

// Alternate:
// function $Dojo(id) {
//     this.myId = document.getElementById(id);
//     this.click = function (callback) {
//         this.myId.addEventListener("click", callback);
//     };

//     this.hover = function (hoverin, hoverout) {
//         this.myId.addEventListener("mouseover", hoverin);
//         this.myId.addEventListener("mouseout", hoverout);
//     };

//     return this;
// }


