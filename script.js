// Alessandra Serrano
//functions needs to take an num as a paramter, 
//prints out all numbers from 1 to num 

//every multiple of 3 = replaced with buzz
//every multiple of 5 = replaced with fizz
//every multiple of 5 & 3 (15) = replaced with fizz buzz
//output: 1, 2, fizz, 4, Buzz, fizz, 7, 8, fizz, Buzz


function fizzBuzz(numb){

//check to see that number is an integer between 1 to 100
//isInteger function checks if number is of type integer
   if  (Number.isInteger(numb) && numb <= 1)
    { 

        // then for loop that iterates from 1 to numb that will print out 
        for( i =1; i <= numb; i++) 
        {
            // if the number both divisble by 5 AND 3 = 15: printout FizzBuzz
            if(i %15 ===0)
            {
            console.log(" Fizz Buzz ");
             }
     
            // if the number is divided by 3 = print out Fizz
            else if (i % 3 === 0)
            {
             console.log(" Fizz ");
            }

            // if the number is divided by 5 = print out Buzz
            else if (i %5 ===0 )
            {
                console.log(" Buzz ");
            }

            //print out just the number if it doesnt match above conditions
            else
            {
                console.log(" " + numb + " ");
            }
        }       
    }
    //if user doesnt enter a positive integer, print out a message to user 
    //and not execute prior for loop
        else 
        {
            console.log("Please enter in an integer greater than 0");
        }
}

let num = 30;
fizzBuzz(num);





