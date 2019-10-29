/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 

   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const list = document.querySelectorAll(".student-item");
//const list = document.getElementsByClassName(".student-item");
console.log(list);
const itemsPerPage = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage (list, page) {
let startIndex = (page * itemsPerPage) - itemsPerPage;
let endIndex = page * itemsPerPage;
for (let i = 0; i < list.length; i ++) {
      if (list[i] >= startIndex && list[i] < endIndex) {
         list[i].style.display = '';                  
      } else list[i].style.display = 'none';
      }

   };





/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


function appendPageLinks (list) {
   const body = document.querySelector('.page');
   const createDiv = document.createElement('div');
   const createButton = document.createElement('BUTTON');
   const createUl = document.createElement('ul');
   const createLi = document.createElement('li');

// Div 'pagination class naming and appending
   createDiv.className = "pagination";
   body.appendChild(createDiv);

// UL appending   
   createDiv.appendChild(createUl);

// LI creation loop
   
   for (let i = 0; i < list.length / 10; i ++) {
     //let li = document.createElement('li')
     let a = document.createElement('a');
     let firstA = document.querySelector('a');
     createLi.appendChild(createUl)
     createLi.appendChild(a);
     firstA.className = "active";
     a.href = "#";
     a.textContent = i + 1;

   }



   
}




// Remember to delete the comments that came with this file, and replace them with your own code comments.