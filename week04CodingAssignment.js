/*
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.*/

console.log("----------------------Question 1------------------------------")

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let newAge =  ages[ages.length-1] - ages[0]; //subtract first age from last age
console.log(`Calculated age to be added to ages array is: ${newAge}`);

ages.push(newAge); //add new age
console.log(`Ages array with new age added is: ${ages}`);

let agesToAdd = [28, 29];
ages = ages.concat(agesToAdd); //add a new age to the array
console.log(`We added ${agesToAdd} to our ages array, the array with new ages added is now: ${ages}`);

console.log(`Let's calculate another new age!`);
let secondNewAge = ages[ages.length-1] - ages[0]; //rinse and repeat
console.log(`Second calculated age to be added to ages array is: ${secondNewAge}`);
ages.push(secondNewAge);
console.log(`Our final ages array is: ${ages}`);


/*2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/
console.log("----------------------Question 2------------------------------")


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengthOfName = 0;
let avgNameLength = 0;
let concatNames = [];

for (nameItem of names)
{

    lengthOfName += nameItem.length;
    concatNames = concatNames += ` ${nameItem}`;
    
}
avgNameLength = (Math.round(lengthOfName/names.length));

console.log(`The average name length is: ${avgNameLength}`);
console.log(`The names concatenated with spaces are: ${concatNames}`);


/*3. How do you access the last element of any array?*/
console.log("----------------------Question 3------------------------------")
console.log(`You access the last value of the array by writing array[array.length-1]`);

/*4. How do you access the first element of any array?*/
console.log("----------------------Question 4------------------------------")
console.log(`You access the first value of the array by writing array[0]`);

/*Create a new array called nameLengths. Write a loop to iterate
 over the previously created names array and add the length of each name to the nameLengths array.*/
console.log("----------------------Question 5------------------------------")
let nameLengths = [];

for (nameItem of names)
{
    nameLengths.push(nameItem.length);
}
console.log(`The name lengths are: ${nameLengths}`);


//*6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array*/
console.log("----------------------Question 6------------------------------")
let nameSum = 0;

for (nameLength of nameLengths)
{
    nameSum += nameItem.length;  
}
console.log(`The sum of the name lengths is: ${nameSum}`);


/*7. Write a function that takes two parameters, word and n, as arguments 
and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
console.log("----------------------Question 7------------------------------")
const wordConcat = (word, n) =>
{
    currentString = "";
    for(let i = 0; i < n; i++)
    {
        currentString+=word
    }
    return currentString
}
console.log(wordConcat('Hello', 3));


/*Write a function that takes two parameters, firstName and lastName, 
and returns a full name. The full name should be the first and the last name separated by a space.*/
console.log("----------------------Question 8------------------------------")
const fullName = (firstName, lastName) => {return `${firstName} ${lastName}`};
console.log(fullName("Lina", "Brown"));


/*Write a function that takes an array of numbers and returns true if 
the sum of all the numbers in the array is greater than 100.*/
 console.log("----------------------Question 9------------------------------")
 const greaterThan100 = (numList) =>
 {  
    let sum = 0;
    for(num of numList)
    {
        sum+=num;
    }
    if(sum > 100)
    {
        return true;
    }
    else
    {
        return false;
    }
 }
 console.log(greaterThan100([1,2,3,4,5,6]));
 console.log(greaterThan100([100, 1, 2]));

/*Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
 console.log("----------------------Question 10------------------------------")
 const averageCalculator = (numList) =>
 {
    let sum = 0;
    for (num of numList)
    {
        sum+=num
    }
    return  (Math.round(sum/numList.length));
 }
 console.log(averageCalculator([1,2,3,4,5,6,7,8,9,10,11,12,13]))

/*Write a function that takes two arrays of numbers and returns true 
if the average of the elements in the first array is greater than the average of the elements in the second array.*/
console.log("----------------------Question 11------------------------------")
const averageCompare = (numList1, numList2) =>
{
   let sum1 = 0;
   let sum2 = 0;
   let avg1 = 0;
   let avg2 = 0;

   for (num1 of numList1)
   {
       sum1+=num1;
   }
   avg1 = (Math.round(sum1/numList1.length));

   for (num2 of numList2)
   {
       sum2+=num2;
   }
   avg2 = (Math.round(sum2/numList2.length));
   
   if(avg1 > avg2)
   {
        return avg1;
   }
   else if (avg2 > avg1)
   {
        return avg2;
   }
   else if (avg1 === avg2)
   {
        return "equal";
   }
   else
   {
        return "cannot compare";
   }
}
console.log(averageCalculator([1,2,3,4], [10,20,30]));
console.log(averageCalculator([100, 200, 300], [10,20,30]))
console.log(averageCompare([1,2,3,4], [4,3,2,1]));

/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a
 number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
console.log("----------------------Question 12------------------------------")
const willBuyDrink = (isHotOutside, moneyInPocket) =>
{
    if(isHotOutside && moneyInPocket > 10.50)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(willBuyDrink(true, 11));
console.log(willBuyDrink(false, 11));
console.log(willBuyDrink(true, 9));
console.log(willBuyDrink(false, 9));


/*Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/
console.log("----------------------Question 13------------------------------")

/*Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
/Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)

args
    sex - "male"/"female"
    weight - in pounds (bc who knows kg?)
    height - inches
    age 
*/
const basalMetabolicRate = (sex, weight, height, age) =>
{
    let BMR = 0;
    if(sex === "male")
    {
        BMR = Math.round(88.362 + (13.397 * (weight /2.5)) + (4.799 * (height * 2.54)) - (5.677 * age));
    }
    else if (sex === "female")
    {
        BMR = Math.round(447.593 + (9.247 * (weight /2.5)) + (3.098 * (height * 2.54)) - (4.330 * age));
    }
    else
    {
        BMR = "Not able to calculate"
    }
    return `Your Basal Metablic Rate is ${BMR} calories per day`;
}
console.log(basalMetabolicRate("female", 170, 68, 28))


