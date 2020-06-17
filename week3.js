//1. Create an array called ages that contains 3,9,23,64,2,8,28,93

let ages =[3,9,23,64,2,8,28,93];

   //a. Susbtract the first and last value from the array and subtract the first from the las, print to console.
function mysubtract(){

let first=ages[0]
let last=ages[ages.length-1]

console.log ("first element is " + first);
console.log ("last element is " + last);
console.log(last-first);
} 
mysubtract()

   // b. Add a new age to my array and repeat the step to ensure code is dynamic.
   //To be resolved
ages.push(33);
mysubtract()

   //c. use a loop to iterate and calculate the average age print the result in the console

let total=0;
for(let i in ages) { total += ages[i]; }
console.log(total)

      //Otheroption 
   let agesSum = ages.reduce( function(accumulator, currentValue) {
       return accumulator + currentValue
    })
   agesAvg = agesSum/ages.length;
   console.log (agesAvg)

//2.In a new array that contains 'Sam', 'Tommy','Tim','Sally','Buck','Bob':

   //a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let names= ['Sam','Tommy','Tim','Sally','Buck','Bob'];

let long= names.map(function(element){
    return element.length;
});
console.log ("the lengths are these: " +long); //This takes the length of the numbers in the array

var totaln= 0;
for (var i = 0; i<long.length; i++)
{totaln += long[i];}

var average= totaln/long.length;
console.log ("This is the average: "+average);//This finds the average
console.log ("Verification:" +(3+5+3+5+4+3)/6);//This is the verification

   //b. Use a loop to iterate through the array and concatenate the names separated by spaces and print the result


   for (name in names) {
      together = names.join();
      console.log(together)
  }

         //Other option
let allTogether = names.join()
console.log (allTogether)


//3. How do you access the last element of any array?
let first=ages[0] //through the index

//4. How do you access the first element of any array?
let last=ages[ages.length-1]//through the index

//5. Create a new array called nameLengths. write a loop to iterate over the previously created names array and add length of each name to the nameLengths.

let nameLengths = []

for (let name of names) {
    console.log(name)
    console.log(name.length)
    nameLengths.push(name.length)
}

console.log(nameLengths)

//6. Write a loop to iterate over nameLengths array and make the sum of all the elements in the array, print to the console.
 
let totalnl=0;
for(let i in nameLengths) { totalnl += nameLengths[i]; }
console.log(totalnl)


//other option for 6.
let nameLengthSum = nameLengths.reduce( function(accumulator, currentValue) {
   return accumulator + currentValue
})

console.log(nameLengthSum)

//7. Write a function that takes two parameters, word and n, as arguments and return the word concatenated to itselt n number of times. 

function RepeatnName(String,Number){
   console.log(name.repeat(Number)+" ");}
   
RepeatnName("Claudia",3);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by space.)

function fullName(firstname,lastname)
{console.log(firstname+" "+lastname)}

fullName('Claudia','Escutia')

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is >100.

function myFunction(){
let sum = ages.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});

 if (sum >= 100)
 {console.log("True");} 
 else
 {console.log("False");}
}

myFunction()

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function theaverage(){
let sum = ages.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
let div = ages.length;
let aveg= sum/div;
console.log("The average is "+aveg);}

theaverage ()

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let otherages =[5,15,20,25];

function isFirstArrayAverageGreaterThanSecondArray(firstArray, secondArray) {
 
    let firstAverage = firstArray.reduce( function(accumulator, currentValue) {
      return accumulator + currentValue;
    })/firstArray.length
    
  
    let secondAverage = secondArray.reduce( function(accumulator, currentValue) {
      return accumulator + currentValue;
    })/secondArray.length
    
    return firstAverage > secondAverage	   
  }
  
  console.log(isFirstArrayAverageGreaterThanSecondArray(ages, otherages))

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let isHotOutside = true;
let moneyInWallet= 15

function willBuyDrink(){

if (isHotOutside && (moneyInWallet>10.5) == true){
    console.log(true)
       
} else {
        console.log(false)
    }
}

willBuyDrink();

//13. Write a function of your own that solves a problem, what the function does and why you created it...

//Verify if a dining chair design has the standard measurements to be comfortable, sometimes whe dont have the time to read all the code for the standard design so having the verification inside a function is very practical.

SeatWidth=19
SeatDepth=19
SeatHeight=18
Height=36

function chairStandard(){
if ((SeatWidth<19) && (SeatDepth<19) && (SeatHeight<18) && (Height<36)){
console.log("This is not the standard and the chair will be very small and uncomfortable");}

else if ((SeatWidth>19) && (SeatDepth>19) && (SeatHeight>18) && (Height>36)){
   console.log("The chair is bigger than the standard, design can work");}

else{
   console.log("standard chair")
}
}
chairStandard()




