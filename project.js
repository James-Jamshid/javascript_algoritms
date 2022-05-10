
////given 2number the number is equall to 100 or to numbers equals 100


var num2=(a,b)=> a===100 || b===100  || (a+b)===100;
console.log(num2(50,50));


///////////////
//get the extension a filename


const text1=(str) => str.slice (str.lastIndexOf('.'))
console.log(text1(`3wschool.com`));
/////////////

//1.answer


function findLargest(num1,num2) {
    if (num1>num2) {
        return `${num1} is the largest`
        
    }
    else if(num1<num2){
        return `${num2} is the largest`
    }
    else{
        return `${num1} and ${num2} are equal`
    }
    
    

}
console.log(findLargest(16,11));


//2.answer


function findTriangleType(side1,side2,side3) {
    if (side1==side2 && side1==side3 && side2==side3) {
        return `equilateral triangle.`
        
    }
    // savolda shu yerda uchalasi ham equall bolsin deyilgan edi. men ozim o'zgartirdim
    else if(side1==side2 && side1!=side3 && side2!=side3 ){
        return `Isosceles triangle.`
    }
    else if(side1!=side2 && side1!=side3 || side2!=side3){
        return `Scalene triangle`
    }
    
}
console.log(findTriangleType(3,2,3));


//answer 3



function evalNumbers(number1,number2,operation) {
   
    
    if(operation=='add') {
        return number1+number2
    }
    else if(operation=='substract'){
        return number1-number2
    }
    else if(operation=='multiply'){
        return number1*number2
    }
    else if(operation=='division'){
        return number1/number2
    }
    else if(operation=='modulus'){
        return number1%number2
    }
    else{
        return `Invalid operation`
    }
    
}
console.log(evalNumbers(50,5,'modul'));

//answer 4


function findGrade(marks) {
    if(marks>=90 && marks<=100){
        return ` S grade`
    }
    if(marks>=80 && marks<90){
        return ` A grade`
    }
    if(marks>=70 && marks<80){
        return ` B grade`
    }
    if(marks>=60 && marks<70){
        return ` C grade`
    }
    if(marks>=50 && marks<60){
        return ` D grade`
    }
    if(marks>=40 && marks<50){
        return ` E grade`
    }
    if(marks>=0 && marks<40){
        return ` Student has failed`
    }
    else{
        return `Invalid marks`
    }
    
}
console.log(findGrade(80));




