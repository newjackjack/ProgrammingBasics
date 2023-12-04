var num1 = 10;
var num2 = 3;

console.log(num1 % num2);

/* Remainder operator, %, is often used to determine the remainder of the division
or determine if a number is even or odd

dividend = divisor * quotient + remainder
|remainder| < |divisor|

remainder = dividend - divisor * quotient

And we do so by dividing the dividend by the divisor. Math.trunc() ensures that the resulting quotient is an integer.

*/

/* Modulo operator, mod, is used to 

The modulo operator is based on the same equations, but it uses Math.floor() to compute quotients:

If both dividend and divisor are positive, the modulo operator produces the same results as the remainder operator (example 3).
If, however, dividend and divisor have different signs, then the results are different 

*/ 

var num3 = -5;
var num4 = 2;

console.log(num3 % num4);
// this would return 1 because -5 = 2 * -2 + 1
/* In Javascript, modulo operator will return same answer if they are all positive integer
but -5 mod 2 will give different answer.
-5 mod 2 is -2
-5/2 = -2.5 but truncate the decimal point
console.log(num3 mod num4);
*/