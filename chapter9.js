//question no. 1
var cityName = prompt("Question no.1 \n Enter Your City")

if( cityName === "karachi"){
    alert("Welcome to the city of Lights")
} else { alert("You belong to a Normal City") }

//question no. 2

var gender = prompt("Question 2 \n Enter Your Gender")

var message 

if(gender === "male") {message ="Welcome Sir" 
} else if(gender==="female"){ message ="Welcome Mam"}
else{message = "Enter a Correct Gender" }

alert(message)

//question no. 3

var lightColor = prompt ("Question no.3 \n Enter the Color Of Traffic Light")

var statement

if (lightColor=== "red"){ statement = "Must stop"}
else if (lightColor==="yellow"){statement= "Ready to move"}
else if(lightColor==="green"){statement= "Move now"}
else{statement="enter a correct color"}

alert(statement)

//qyuestion no. 4

var remainingFuel= +prompt("Question no.4 \n Enter Your Remaining Fuel in Litres")

if (remainingFuel <= 0.25){message= "Refill your tank"}
else{message="its ok to move"}

alert(message)

//Question 5
//a
var a = 4;
if (++a === 5){
alert("Question no. 5 (a) \n given condition for variable a is true");
}

//b
var b = 82;
if (b++ === 83){
alert("Question no. 5 (b) \n given condition for variable b is true");
}

//c

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else if (c === 13){
alert("Question no. 5 (c) \n condition 2 is true");
}
else if (++c < 14){
alert("condition 3 is true");
}
else if(c === 14){
alert("condition 4 is true");
} else {alert("no any condition is true")}


//d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("Question no. 5 (d) \n The cost equals")
}

//f
if (true){
    alert("Question no. 5 (f) \n True")
    }
   else if (false){
    alert ("False")
    } else { "no any condition is working"}

//e
if("car" < "cat"){
    alert("Question no. 5 (e) \n car is smaller than cat");
    }
    else{"car is greater than cat"}

//question no. 6

var marksobtained = +prompt("Question no. 6 \n Enter Your Obtained Marks ")
var totalMarks = 300
var percentage = marksobtained/totalMarks*100
var remarks;
var grade;

if(percentage >= 80 && percentage <=100
){remarks= "Excellent, You're an asset to School" , grade = "A+"}
else if
(percentage >= 70 && percentage <=79
){remarks= "Good job, You're a bright Student" , grade = "A"}
else if
(percentage >= 60 && percentage <=69
){remarks= "You should work more hard" , grade = "B"}
else if
(percentage >= 50 && percentage <=59
){remarks= "Improve Yourself" , grade = "C"}
else{remarks= "You need to think for yourself" , grade = "F"}

document.write(`<h1> Question no. 6 </h1>
    <h2> Obtained Marks = ${marksobtained} <br/> Total Marks= ${totalMarks} <br/>
              Percentage = ${percentage} <br/> Grade = ${grade} <br/> Remarks = ${remarks}</h2>`)

// question no. 7

var number= 5
var guessnum= +prompt("Question no. 7 \n Guess the Number")


if(guessnum===5){remarks="Bingo, You guessed it Correct"}
else if (guessnum === ++number){remarks="You're close enough"}
else{remarks= "Try again"}

alert(remarks)

//question no. 8

var num= +prompt("Question no. 8 \n Enter a number")

var divisiblenum = num%3

if(divisiblenum===0){remarks="Your number is divisible to 3"}
else{remarks="Your number is not divisble to 3"}

alert(divisiblenum + "\n" + remarks)

// question no . 9

var num1 = +prompt("Question no. 9 \n Enter a number") 
var num2 = num1%2

if (num2===0){remarks= "Your number is an even number"}
else{remarks="Your number is an Odd"}

alert(remarks)

//question 10 

var temperature = +prompt ("question no. 10 \n Enter the temperature")


if (temperature>=40){remarks="It is too hot outside "}
else if (temperature>=30){remarks="The Weather today is Normal "}
else if (temperature>=20){remarks="Today's Weather is cool."}
else if (temperature<=10){remarks="OMG! Today's weather is so Cool"}
else{remarks = "Where Are You Living ?" }

alert(remarks)

var num1= +prompt("Question 11 \n Enter your first number")
var num2= +prompt ("Enter Your second number")
var math_symbol = prompt("Which symbol to perform")
var operation 

if(math_symbol === "+"){ operation = num1 + num2 , remarks="Result of Addition"}
else if(math_symbol === "-"){ operation = num1 - num2 ,  remarks="Result of Addition"}
else if(math_symbol === "*"){ operation = num1 / num2 ,  remarks="Result of Multiplication"}
else if(math_symbol === "/"){ operation = num1 * num2 ,  remarks="Result of Division"}
else if(math_symbol === "%"){ operation = num1 % num2 ,  remarks="Result of Modulus"}
else{operation="enter a correct operating symbol"}

alert(operation + "\n" + remarks)




