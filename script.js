		 //To display numbers 1-100,numbers divisivle by 3 -> "fizz",  numbers divisible by 5 -> "buzz" */
		/*var number = 1;
		for ( var counter=0; counter<100; counter++)
			{
				if ( number%3==0 ) 
				{
					if ( number%5==0 )
					{ console.log("fizzbuzz"); }
					else console.log("fizz");
				}
				else if ( number%5==0 )
					{
						console.log("buzz");
					}
				else console.log(number);
				number += 1;

			};

			/*Function with no parameters */
			/*var makeNoise = function() {
				console.log("Pling");
			};
			makeNoise();*/

			
			/* Understanding global and local variables */
			var x = "outside ";
			var f1 = function () 
			{
				var x = "inside f1 "; // no changes are made to global x, changes are made to local variable x
				console.log(x);
				// -> inside f1 (since x here refers to the local variable)
				console.log(typeof(x));
			};
			f1 () ;
			console . log ( x ) ;
			console.log(typeof(x));
			// → outside (since x here is the global variable)
			var f2 = function ()
			{
				x = 4 ; //changes are made to global variable x
			};
			f2 () ;
			console . log ( x ) ; 
			console.log(typeof(x)); 
			// → inside f2 

			// Nested Functions
			var landscape = function () {
				var result = "";
				var flat = function ( size ) {
				for ( var count = 0; count < size ; count ++)
					result += " # ";
				};
				var mountain = function ( size ) {
					result += "/";
					for ( var count = 0; count < size ; count ++)
						result += " '";
						result += "\\";  
					};
					flat (3) ;
					mountain (4) ;
					flat (6) ;
					mountain (1) ;
					flat (1) ;
					return result ;
				};
				console.log(landscape());


			/* //Exceeding Call Stack memory. Infinite loop 
			function chicken () {
				return egg () ;
			};
			function egg () {
				return chicken () ;
			};
			console . log ( chicken () + " came first .") ; */

			/* //  Optional Arguments
			function power(base,exponent){
				if(exponent==undefined) {
					exponent = 2; };
				var result = 1;
				{
					for(var count=0; count<exponent; count++)
						result = result*base;
				}
				return result;
			}
			console.log(power(2,4)); //16
			console.log(power(2)); //4 */

			function multiplier ( factor ) {
				return function( number ) {
					return number * factor ;
				};
			}
			var twice = multiplier (2) ;
			console . log ( twice (4) ) ;
				// -> 8


			//Function to expand a given number, Example of Recursion
			function findSolution ( target ) {
				function find ( current , history ) {
					if ( current == target )
					return history ;
					else if ( current > target )
					return null ;
					else
					return find ( current + 5 , "(" + history + " + 5) ") ||
					find ( current * 3 , "(" + history + " * 3) ") ;
				}
				return find (1 , "1") ;
			}
			console . log ( findSolution (24) ) ;
			// → (((1 * 3) + 5) * 3)

			/* // Declaring an array
			var listOfNumbers = [2,3,5,7,11];
			console.log(listOfNumbers[2-1]); */
			
			/* // To display a pattern
			var pattern = "";
			console.log(typeof(pattern));
			for( var i=1; i<8; i++)
				{
					pattern = pattern + "#"; 
					console.log(pattern);		
				} */


			/* // Methods to a value
			var mack = [];
			mack . push (" Mack ") ;
			mack . push (" the " , " Knife ") ;
			console . log ( mack ) ;
			// → [" Mack " , " the " , " Knife "]
			console . log ( mack . join (" ") ) ;
			// → Mack the Knife
			console . log ( mack . pop () ) ;
			// → Knife
			console . log ( mack ) ;
			// → [" Mack " , " the "] */

			// Defining objects
			var day1 = {
				squirrel : false ,
				events : [" work " , " touched tree " , " pizza " , " running " , " television "]
			};
			console . log ( day1 . squirrel ) ;
			// → false
			console . log ( day1 . wolf ) ;
			// → undefined
			day1 . wolf = false ;
			console . log ( day1 . wolf ) ;
			console.log ( "squirrel" in day1);  // in is binary operator . Tells typtywhether the property exist for that object.
				// → false 


			var array1 = {
				left: 1, right: 2
			};
			console.log ( typeof[1,2]);

			//Pattern of Chessboard
			/*var k = Number(prompt("Enter a height"));
			var j = Number(prompt("Enter a width"));
				for ( var i=1; i<=k; i++) {
					if ( i%2==0)
					{
						var pattern= "";
						for (var l=0; l<j; l++)
						pattern += " #";
						console.log(pattern);
					}
					else
					{
						var pattern= "";
						for (var l=0; l<j; l++)`
						pattern += "# ";
						console.log(pattern);
					}
				} */


			//Properties are accessed using value.propName or value["propName"]
			//Methods are functions that live in properties
			var journal = [];
			function addEntry( events, didITurnIntoASquirrel) {
				journal.push({ events:events, squirrel: didITurnIntoASquirrel});
			}
			addEntry(["work","touched tree"], false);
			console.log(journal); 
			

			var map = {};
			console.log("map" in window); //Global scope object is stored in the window variable
			console.log(window.map); //Each global variable is present as a property of window object
			function storePhi( event, phi) {
				map [ event ] = phi;
			}
			storePhi( "pizza" , 0.91);
			storePhi( "touched tree", -0.081);
			console.log( "pizza" in map);
			console.log( map["touched tree"]);
			console.log(map);
			
			//To remove specific index from array
			function remove(array,index){
				return array.slice(0,index).concat(array.slice(index+1));
			}	
			console.log(remove(["a","b" , "c", "d", "e"], 3));
			console.log(" *** okay  \n  ".trim());
			// a,b,c,e	
			console.log(Math.floor(Math.random()*100)); //Generates a random number


			//Print Sum of an Array
			/* var range=[];
			var totalRange = 0;
			for (var i =0; i<10; i++) {
				range[i] = i+1;
				totalRange += range[i];
			}
			console.log(range);
			console.log(totalRange); */


			//S Exercise 4.1 Sum of Range
			var array = [];
			var arraySum = 0;
			function range(start, end, step) {
				if (step == null) step = 1;
				if (step>0)
				{
					for ( var i=start;  i<= end; i += step)
						array.push(i);
					return array;
				}
				else
					for ( var i=start;  i>= end; i+= step)
						array.push(i); 
					return array;
			}
			console.log(range(10,-8,-2));
			var arrayLength = array.length;
			
			function sum() {
				for (var i=0; i<arrayLength; i++)
					arraySum += array[i];
				return arraySum;
			}
			console.log(sum());



			// Exercise 4.2. Creating a copy of the reverse of the array
			
			function reverseArrayInPlace(array) {
				const lengthOfArray = array.length;
				for (var i = lengthOfArray-1; i>=0; i--) {
					array[lengthOfArray + (lengthOfArray-1-i)] = array[i];
				}
				array.splice(0,lengthOfArray);
			}
			var newArray = ["a","b","c","d","e"];
			console.log(newArray);
			reverseArrayInPlace(newArray);
			console.log(newArray);		

			/* Assign avariable for the current array element, rather than picking out manually, basically its an array traversing loop*/
			function forEach ( array , action ) {
				for ( var i = 0; i < array . length ; i ++)
				action ( array [ i ]) ;
			}	
			forEach([1,2,3], console.log);

			var number_list = [1,2,3,4,5] , sum=0;
			forEach( number_list, function(number_list) {
				sum+= number_list;
			});
			console.log(sum);

/*
			function person(firstName,lastName){
				this.firstName = firstName;
				this.lastName = lastName;
				this.changeName = function (name) {
					this.lastName = name;
				}
			}
			var myMother = new person("Sujata","Rajhans");
			console.log(myMother);
			myMother.changeName("limbulkar");
			console.log(myMother);
*/

			function greaterThan(n) {
				return function(m) { return m>n; }
			}
			console.log(greaterThan(10)(11));

			// if(!x) returns true for every falsy value ( empty string, 0 , NaN, undefined, false).


			// Functions in JS act as first-class objects. They can be passed as arguments to other functions. 
			/*function foo(bar) {
				bar();
			}
			function testing() {
				alert(" Testing is called");
			}
			foo(testing);*/

			// JSON.strigify and JSON.parse convert JS values to and from JSON object format respectively 
			var JSON_string = JSON.stringify({name: "Rohit Rajhans", age: 18  });
			console.log(JSON_string);
			console.log(JSON.parse(JSON_string).name);






