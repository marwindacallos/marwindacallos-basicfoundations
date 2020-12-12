// Review
// const firstName = "Marwin";
// const lastName = "Dacallos";
// const age = 20;
// let fullName = `Hello my name is ${firstName} ${lastName} and I'm ${age} years old`;

// console.log(fullName);


let interestRate = 0.3;
interestRate = 1; 
// console.log(interestRate);
// console.log(typeof firstName);

// Crash Course
 // CONCATENATE
  const s = 'Hello World!';
  const a = 'technology, computers, it, code';

  // console.log(s.length);
  // console.log(s.toLowerCase());
  // console.log(s.substring(0, 5).toUpperCase());
  // console.log(s.split(''));
  // console.log(a.split(','));

 // ARRAYS - variables that hold multiple values
  const fruits = ['apples', 'oranges', 'pears', 10, true];
  fruits[5] = 'grapes';
  // console.log(fruits);
  // console.log(fruits[1]);
  // fruits.push('mangos');
  // fruits.pop() ;
  // fruits.unshift('oh no!');
  // console.log(Array.isArray('hello'));
  // console.log(fruits.indexOf('oranges'));
  // console.log(fruits);
 
 
 // OBJECT LITERALS
  const car = {
   firstName : 'adidas',
   color : 'red',
   age: 2,
   features: ['music', 'aircon', 'wheel'],
   address:{
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
   }
  }
// console.log(car.firstName, car.address);
// console.log(car.features[1]);
// console.log(car.address.city);
  // DISTRACTIORING  - va

  const {firstName, lastName, address:{city}} = car;
  // console.log(city);

  // ADDING PROPERTIES
  car.email = 'car@email.com';
  // console.log(car);

  // ARRAY OF OBJECTS
  
   const toDos = [
    {
     id: 1,
     text : 'take out trash',
     isCompleted: true
    },
    {
     id: 2,
     text :'meeting with boss',
     isCompleted: true
    },
    {
     id: 3,
     text : 'dentist appt',
     isCompleted: false
    }
   ];

  // console.log(toDos[1].text);
  // console.log(toDos[2].isCompleted);

  // JSON - is a data format it is used in full stack developer and using API sending data into server, sending and receive in json format
  // -similar to object litera ls

  const todoJSON = JSON.stringify(toDos);
  // console.log((todoJSON));

 // FOR LOOP

 for(let i = 0; i < 10; i++){
  // console.log(i);
  // console.log(`For loop number: ${i}`);
 } 
 
 // WHILE LOOP
 
 let i =0;
 while(i < 10){
  // console.log(`While loop number: ${i}`);
  i++;
 }
 
 // LOOP THROUGH ARRAYS
 
 for(let i = 0; i < toDos.length; i++){
  // console.log(i);
  // console.log(`For loop number: ${i}`);
  // console.log(toDos[i].text);
 } 
 // BEST WAY THROUGH ARRAYS
 for(let todo of toDos){
  // console.log(todo.id);
 }

 // forEach, map, filter
 toDos.forEach(function(todo){
  // console.log(todo.text);
 })
 const todoText = toDos.map(function(todo){
  return todo.text;
 });
 // console.log(todoText);
 // const todoCompleted = toDos.filter(function(todo){
 //  return todo.isCompleted === true;
 // });
 // console.log(todoCompleted);

 const todoCompleted = toDos.filter(function(todo){
  return todo.isCompleted === true;
 }).map(function(todo){
  return todo.text;
 })
 console.log(todoCompleted);

 // CONDITIONALS (IF STATEMENT)

 const x = 10;
 if (x === 10){
  console.log('x is 10');
 }
 else if(x > 10) {
console.log('x is greater than 10');
 }
   else {
    console.log(`x is less than 10`);
   }

 const c = 3;
 const d = 4;
 if (c > 5 || d > 10){
  console.log(`x is more than 5 or y is more than 10`)}
  else{
   console.log(`use your head stupid`);
  }

  // IF STATEMENT (TERNARY = ? OPERATOR)

  const g = 9;
  const color = g > 10 ? 'red' : 'blue';

  console.log(color);

  // Switch
  const colors = 'green';
  switch(colors){
   case 'red':
    console.log(`color is red`);
    break;
   case 'blue':
    console.log(`color is blue`);
    break;
   default:
    console.log(`color is neither red or blue`);
    break;
  }

 // FUNCTION 
 function addNums(num1, num2){
  console.log(num1 + num2);
 }
 addNums(5,4);

 function addNums1(num1, num2){
  return(num1 + num2);
 }
 console.log(addNums1(1,6));;

 // ARROW FUNCTIONS
 const addNums2 = (num1 = 1, num2 = 1) =>{
  return num1 + num2;
 }
 console.log(addNums2(5,5));

 const addNums3 = (num1 = 1, num2 = 1) =>
  console.log(num1 + num2);
 
 (addNums3(5,5));

 const addNums4 = (num1 = 1, num2 = 1) =>
  num1 + num2;
 
 console.log(addNums4(5,5));
 
 const addNums5 = num1 => num1 + 5;
 console.log(addNums5(4));

 // applying forEach arrow function
 toDos.forEach((todo)=> console.log(todo))