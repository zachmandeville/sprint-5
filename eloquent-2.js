/* Exercise 1
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
*/ 
/* Solution
* Use the repeat command to repeat a string('#') a set amount of times, and have that set 
* amount be the increasing i number.  Stope after it's repeated it seven times.
*/

for (var i = 1; i <= 7; i++)
    console.log("#".repeat(i));

/* Exercise 2
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers :divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
/* Solution
I used modulo on this.  So if a number can be divided by 3, with no remainder, it means it's divisible by 3.  Same for 5.  With that info,  I can do an if/else statement for these options. The order of if/else is important: If i started with 5, then it'd check whether it was divisible by 5 first.  So 30 would show Buzz, which would be incorrect.
*/

for (number = 1; number <= 100; number++){
    if(number % 3 == 0)
        console.log('Fizz');
    else if(number % 5 == 0)
        console.log('Buzz');
    else
        console.log(number); }

/* Exercise 3
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/
/* Solution
I figured there are even and odd rows, and they start with either whitespace or a #.  So I made an if/else for whether the row was even or odd.  Then, I created a string that started with either # or " ", and added it's opposite+white space until the end of the row was reached.  Since I was adding two characters, I considered the end of the row to be size/2.  I am not sure if there was a better way to do this.
*/

/*Create the variables to start */
var size = 25, evens, odds;
/* Loop through creating each row, until the size is reached.*/
for (i = 0; i < size; i ++){
  /*determine if it's even rows*/
  if(i % 2 == 0){
      evens = " ";
      /*loop through each succession of character addition until the end of row is reached*/
      for(j = 1; j <=(size/2); j++)
          evens += "# ";
      /*Print out the rowstring*/
      console.log(evens); }
  else{
      /*Do the same procedure, but opposite characters, for odd*/
      odds = "#";
      for (k = 1; k <(size/2); k++)
          odds += " #";
      console.log(odds); } }


