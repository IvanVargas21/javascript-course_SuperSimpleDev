/*
Todo list Practice 1 - Algo
-Create Array to store todos
- When we click "Add"
- Get text from textbox
- Add it to Array
- console.log( ) the Array
*/
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const toDoList1 = [];

function addToDoList(input){
    const inputElement = document.querySelector('.js-name-input1');
    const name = inputElement.value;
    toDoList1.push(name);
    console.log(toDoList1);

    inputElement.value = '';
}
//Accumulator
const toDoList2 = [{
    name: 'ivan',
    duedate: '2022-12-22',
}];
renderToDoList();
function renderToDoList(){
    //Accumulator
     let todoListHTML = '';
     //loops through array toDoList2
     for(let i = 0; i<toDoList2.length; i++){
     //fetch each element then stores to 'todo' variable
       const todoObject = toDoList2[i];
       const {name, duedate}= todoObject;
     // create an html element - fetched element will be inserted inside the paragraph tag.
     //Generating the HTML
     const html = `
        <div>${name} </div>
        <div>${duedate}</div>
        <button 
        class="delete-todo-button"
        onclick="
        toDoList2.splice(${i},1);
        renderToDoList();
        ">Delete</button>`;
     todoListHTML += html;
     }
     //Accumulated elements will be inserted on innerHTML.
     const display = document.querySelector('.js-todo-list2').innerHTML = todoListHTML;
 }
 
function addToDo(){
    const inputElement = document.getElementById('inputName');
    const dateInputElement = document.getElementById('inputDate');
    const name = inputElement.value;
    const duedate = dateInputElement.value;
    //toDoList2.push(date);
    console.log(toDoList2);
    toDoList2.push({
        //name: name,
        //duedate:date,
        //property shorthand
        name,
        duedate,
    })

    inputElement.value='';
    /*
    Accumulator Pattern
    - Create a variable to store the result.
    - Loop through the array and update the result
    */
    /* 
    Loop throught the array
    Create some HTML code for each todo
    Put the HTML on web page
    */
   renderToDoList();
}


/*
const mgaGagawin = [
    'Matulog',
    'Magcode',
    'Kumain',
    'Magcode',
    'Matulog',
]
for(let i = 0; i < mgaGagawin.length; i++){
    console.log(mgaGagawin[i]);
}

const nums = [1,2,3];
let sum = 0;
for(let i = 0; i < nums.length; i++){
    const num = nums[i]
    sum = sum + num;
}
console.log(sum);

const nums = [1,2,3];
const numsDoubled = [];
for(let i = 0; i < nums.length; i++){
    const num = nums[i]
    numsDoubled.push(num * 2);
}
console.log(numsDoubled);
*/


/*
    PseudoCode
    Create two dimensional Array
*/
function toDoList(){
    const todoName = document.getElementById('inputName');
    const todoDate = document.getElementById('inputDate');

}