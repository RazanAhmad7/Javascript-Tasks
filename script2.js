


// Part 2

    // Question one
    let firstNum = Number(prompt("Enter the first number :"));
    console.log(firstNum);
    let secondNum = Number(prompt("Enter the second number :"));
    console.log(secondNum);
    let operation = String(prompt("Enter the required operation"));
    let result;
    if (operation == "+")
    {
         result = firstNum + secondNum;
    }
    else if (operation == "-")
        {
             result = firstNum - secondNum;
        }
    else if (operation == "*")
        {
             result = firstNum * secondNum;
        }
    else if (operation == "/")
        {
             result = firstNum / secondNum;
        }        

        document.getElementById("num1").innerHTML = firstNum;
        document.getElementById("num2").innerHTML = secondNum;
        document.getElementById("operation").innerHTML = operation;
          

    // Question two


     let mark = Number(prompt("Enter your mark"));
     if (mark >= 90 && mark <=100){
         document.write("A+");
     }
     else if(mark >= 80 && mark <= 89){
         document.write("A");
     }
     else if(mark >= 70 && mark <= 79){
         document.write("B");
     }
     else if(mark >= 60 && mark <= 69){
         document.write("C");
     }
     else if(mark >= 50 && mark <= 59){
         document.write("D");
     }
     else{
         document.write("FALL");
     }


     //Question four 
     let num1 = prompt("Enter a number");
     let num2 = prompt("Enter another number");

     if (num1 > num2 ){
        document.getElementById("hello").innerHTML = "Hello World";
        alert(`Hello World`);
        console.log("Hello World");
     }
     else if (num1 <= num2){
        document.getElementById("hello").innerHTML = "Goodbye";
        alert(`Goodbye`);
        console.log("Goodbye");
     }
