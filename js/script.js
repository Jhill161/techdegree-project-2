/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// GOING FOR EXCEEDS EXPECTATIONS, PLEASE RETURN IF NEEDS WORK.

const studentList = document.querySelectorAll(".student-item");
//console.log(studentList);
const itemsPerPage = 10;
const button = document.createElement('BUTTON');
const input = document.createElement('input');

// searchbar
const searchbar = () => {
let searchDiv = document.createElement('div')//.className = "student-search";
//let input = document.createElement('input');
document.querySelector('.page-header').appendChild(searchDiv);
searchDiv.className = "student-search";
searchDiv.appendChild(input);
input.placeholder = "Search for students..."
searchDiv.appendChild(button);
document.querySelector('button').textContent = "Search";
};
searchbar();

// searchbar functionality, if to check text vs list, and if to display if no results
const search = (text, list) => {
   let storeNames = [];
   for (let i = 0; i < list.length; i ++) {
      list[i].style.display = "none";
      if (list[i].textContent.toLowerCase().includes(text.toLowerCase())){
         storeNames.push(list[i]);
      }
         if (Array.isArray(storeNames) && storeNames.length === 0) {
            const body = document.querySelector('.page');
            const createPara = document.createElement('p');
            body.appendChild(createPara);
            createPara.innerHTML = "Sorry, No Results!";
            return;
         }
      
   }
   showPage(storeNames, 1);
   appendPageLinks(storeNames);
   console.log(storeNames);
}

button.addEventListener('click', (event) => {
   event.preventDefault();
   text = input.value;  
   search(text, studentList);
   console.log("Submit clicked" + " " + text);
});


function showPage (list, page) {
let startIndex = (page * itemsPerPage) - itemsPerPage;
let endIndex = page * itemsPerPage;
for (let i = 0; i < list.length; i ++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = '';                  
      } else list[i].style.display = 'none';

      }
      
   };

// Append function to create the div, ul, and li, and append in correct order
function appendPageLinks (list) {
   const body = document.querySelector('.page');
   const createDiv = document.createElement('div');
   const createUl = document.createElement('ul');
   const createLi = document.createElement('li');

   createDiv.className = "pagination"; // Div pagination class naming and appending
   body.appendChild(createDiv);
   createDiv.appendChild(createUl); // UL appending   


// LI creation loop, anchor creation, text content adding, class naming
   for (let i = 0; i < studentList.length / 10; i ++) {
     let a = document.createElement('a');
     createUl.appendChild(createLi)
     createLi.appendChild(a);
     document.querySelector('a').className = "active";
     a.href = "#";
     a.textContent = i + 1;
     let aList = document.querySelectorAll('a'); // variable selecting all anchor elements

      for (let j = 0; j < aList.length; j ++) { // for loop to iterate through all the anchors, using aList variable set above
         document.addEventListener('click', (event) => { // event handler, uses 'listener (event)', then can use event.target
         showPage(list, event.target.textContent); // calls showPage on list again, but with page being Anchor element of event
         aList[j].className =' ';
         event.target.className = "active";
         });
      }; 
      
   };
};
showPage(studentList, 1);
appendPageLinks(studentList);



