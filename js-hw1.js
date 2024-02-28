//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
function findDogNames(string, names) {
    for (let name of names) {
        if (string.toLowerCase().includes(name.toLowerCase())) {
            console.log("Matched " + name);
            return; 
        }
    }
    console.log("No Matches");
  }
  
  let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
  let dog_names = ["Max", "HAS", "PuRple", "dog"];
  
  findDogNames(dog_string, dog_names);
  
  
  
  //Call method here with parameters
  
  //============Exercise #2 ============//
  /*Write a function that takes in an array and removes every even index with a splice,
  and replaces it with the string "even index" */
  
  function replaceEvenIndexes(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
  }
  
  const Item_list = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
  console.log(replaceEvenIndexes(Item_list));
  
  
  //Expected output
  //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
  //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
  
  
  //Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
  
  function greet(name){
    console.log("Hello, " + name.join(" ") + " how are you doing today?");
  }
  
  return greet(["Trey"]);
  
  
   //Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
   function sayHello(name, city, state) {
    console.log(`Hello, ${name}! Welcome to ${city}, ${state}!`);
  }
  
  sayHello("Sandy Jones", "Atlanta", "Georgia");
  
    
    //Your task is to write a function which returns the sum of following series up to nth term(parameter).
  
    function SeriesSum(n)
    {
     let sum = 0;
      for(let i=0; i<n; i++ ){
      sum += 1/(i*3 + 1);
      }
      return sum.toFixed(2);
    }
  
    console.log(SeriesSum(5));
  
    //Write function splitSentence which will create a list of strings from a string.
    function splitSentence(s) {
      return s.split(' ');
  }
  
  console.log(splitSentence("hello world")); 
  
  
  //Create a method to see whether the string is ALL CAPS.
  
  
    String.prototype.isUpperCase = function() {
      
      return this.valueOf() === this.toUpperCase();
    };
    
      console.log("HELLO" .isUpperCase());
      console.log("Hello" .isUpperCase());