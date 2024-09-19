//chapter no.6

document.write(`<h1> Chapter NO.6-9 </h1> <br/> <br/> <h2>Q # 1</h2> `)

var a = 10

document.write(`The value of a = ${a} <br/> <br/>`)


document.write(`The value of ++a = ${++a} <br/>  `)
document.write(`Now the value of a = ${a} <br/> <br/> `)

document.write(`The value of a++ = ${a++} <br/> `)
document.write(`Now the value of a = ${a} <br/> <br/>`)

document.write(`The value of --a = ${--a} <br/> `)
document.write(`Now the value of a = ${a} <br/> <br/>`)

document.write(`The value of a-- = ${a--} <br/> `)
document.write(`Now the value of a = ${a} <br/> <br/>`)

//question no. 2
document.write(`<h2>Q # 2</h2> `)

var a = 2
var b = 1

var result = --a - --b + ++b + b--
          //  1  - 0  +  1  +  1


document.write(`<h1>Expression: --a - --b + ++b + b--</h1>
                --a ; a gets a pre decrement so the current line value of a will be <b>1</b> <br/>
                --a - --b ; Now b gets a pre decrement too so its current value will be <b>0</b> 
                so the expression will be <b>1 - 0</b> <br/>
                --a - --b + ++b ; Now b gets a pre increment so current line value will be <b>1</b>
                so the expression will be   <b>1 - 0 + 1 </b>  <br/>
                --a - --b + ++b + b-- ; Now b gets a post decrement so the current line value 
                will not get change it would remain same as <b>1</b> and the current line 
                expression would be <b> 1 - 0 + 1 + 1 </b> as per this line expression the 
                result should be <b>3</b> but because of post decrement
                the value of b will get change in the next line to <b>0</b> again<br/>
                <h1>Result = ${result} </h1>`)


//question no. 3

var userName= prompt("Question no. 3 \n enter your name")

alert(" Welcome to our website " + userName)

//question no. 4
document.write(`<h2>Q # 4</h2> `)

var table_N0= +prompt("Question no. 4 \n Enter Your Number", 5)

document.write(`<b> ${table_N0}  x  1 =  ${table_N0*1}<br>
  ${table_N0} x  2 =  ${table_N0*2}<br>
  ${table_N0} x  3 =  ${table_N0*3}<br>
  ${table_N0} x  4 =  ${table_N0*4}<br>
  ${table_N0} x  5 =  ${table_N0*5}<br>
  ${table_N0} x  6 =  ${table_N0*6}<br>
  ${table_N0} x  7 =  ${table_N0*7}<br>
  ${table_N0} x  8 =  ${table_N0*8}<br>
  ${table_N0} x  9 =  ${table_N0*9}<br>
  ${table_N0} x  10 =  ${table_N0*10}</b><br>`)


//Qusetion no.5

document.write(`<h2>Q # 5</h2> `)

var subject1 = "English"
var subject2 = "Science"
var subject3 = "Maths"


var marksSub1= 86
var marksSub2= 78
var marksSub3= 60

var totalMarkseachsub= 100

var percentagesub1= marksSub1/totalMarkseachsub*100
var percentagesub2= marksSub2/totalMarkseachsub*100
var percentagesub3= marksSub3/totalMarkseachsub*100

var totalper= (marksSub1+marksSub2+marksSub3)/(totalMarkseachsub*3)*100

document.write(
    `<table style="border: 1px solid">
    <tr>
    <th style="border: 1px solid">Subject</th>
    <th style="border: 1px solid">Total Marks</th>
    <th style="border: 1px solid">Obtained Marks</th>
    <th style="border: 1px solid">Percentage</th>
    </tr>
    
    <tr>
    <td style="border: 1px solid">${subject1}</td>
    <td style="border: 1px solid">${totalMarkseachsub}</td>
    <td style="border: 1px solid">${marksSub1}</td>
    <td style="border: 1px solid">${percentagesub1}</td>
    </tr>

    <tr>
    <td style="border: 1px solid">${subject2}</td>
    <td style="border: 1px solid">${totalMarkseachsub}</td>
    <td style="border: 1px solid">${marksSub2}</td>
    <td style="border: 1px solid">${percentagesub2}</td>
    </tr>

    <tr>
    <td style="border: 1px solid">${subject3}</td>
    <td style="border: 1px solid">${totalMarkseachsub}</td>
    <td style="border: 1px solid">${marksSub3}</td>
    <td style="border: 1px solid">${percentagesub3}</td>
    </tr>
   
     <tr>
    <td style="border: 1px solid"></td>
    <td style="border: 1px solid">${totalMarkseachsub*3}</td>
    <td style="border: 1px solid">${marksSub1+marksSub2+marksSub3}</td>
    <td style="border: 1px solid">${totalper}</td>
    </tr>
    </table>`)
                




