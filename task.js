// Your array of objects
// let dataArray = [];

// // Get the table body element and form
// const tableBody = document.getElementById("tableBody");
// const dataForm = document.getElementById("dataForm");

// // Function to add a new row
// function addRow() {
//   const name = document.getElementById("name").value;
//   const age = parseInt(document.getElementById("age").value, 10);
//   const city = document.getElementById("city").value;

//   if (name && !isNaN(age) && city) {
//     dataArray.push({ name, age, city }); // Add new entry to the array
//     renderTable(); // Render the table again after adding
//     // Clear the form fields
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("city").value = "";
//   } else {
//     alert("Please fill in all fields with valid values.");
//   }
// }

// // Function to delete a row
// function deleteRow(index) {
//   dataArray.splice(index, 1); // Remove the element from the array
//   renderTable(); // Render the table again after deletion
// }

// // Function to render the table
// function renderTable() {

//   tableBody.innerHTML = dataArray.map((item, index) => `
//     <tr>
//       <td>${item.name}</td>
//       <td>${item.age}</td>
//       <td>${item.city}</td>
//       <td><button onclick="deleteRow(${index})">Delete</button></td>
//     </tr>
//   `).join('');
// }

// Your array of objects
// let dataArray = [];

// function saveData() {
//   const name = document.getElementById("name").value;
//   const age = parseInt(document.getElementById("age").value, 10);
//   const city = document.getElementById("city").value;

//   if (name && !isNaN(age) && city) {
//     const existingIndex = dataArray.findIndex(item =>
//       item.name.toLowerCase() === name.toLowerCase() &&
//       item.age === age &&
//       item.city.toLowerCase() === city.toLowerCase()
//     );

//     if (existingIndex !== -1) {
//       dataArray[existingIndex] = { name, age, city };
//     } else {

//       dataArray.push({ name, age, city });
//     }
//     renderTable();
//     clearForm();
//   } else {
//     alert("Please fill in all fields with valid values.");
//   }
// }

// function deleteRow(index) {
//   dataArray.splice(index, 1);
//   renderTable();
// }



// function editRow(index) {
//   const item = dataArray[index];
//   document.getElementById("name").value = item.name;
//   document.getElementById("age").value = item.age;
//   document.getElementById("city").value = item.city;
// }
 
// function clearForm() {
//   document.getElementById("name").value = "";
//   document.getElementById("age").value = "";
//   document.getElementById("city").value = "";
// }

// renderTable();

//

// Sample data
// const data = [
//     { id: 1, name: "John Doe" },
//     { id: 2, name: "Jane Doe" },
//     // Add more data as needed
// ];

// // Function to create the table rows
// function createTable() {
//     const tableBody = document.querySelector("#myTable tbody");

//     data.forEach((item) => {
//         const row = tableBody.insertRow();
//         row.insertCell(0).textContent = item.id;
//         row.insertCell(1).textContent = item.name;
//         const actionCell = row.insertCell(2);
//         actionCell.innerHTML = `<button onclick="updateRow(${item.id})">Update</button>
//                                 <button onclick="deleteRow(${item.id})">Delete</button>`;
//     });
// }

// // Function to add a new row
// function addRow() {
//     const newName = prompt("Enter a name:");
//     const newId = data.length + 1;
//     data.push({ id: newId, name: newName });
//     updateTable();
// }

// // Function to update a row
// function updateRow(id) {
//     const newName = prompt("Enter a new name:");
//     const rowToUpdate = data.find((item) => item.id === id);
//     if (rowToUpdate) {
//         rowToUpdate.name = newName;
//         updateTable();
//     }
// }

// // Function to delete a row
// function deleteRow(id) {
//     const indexToDelete = data.findIndex((item) => item.id === id);
//     if (indexToDelete !== -1) {
//         data.splice(indexToDelete, 1);
//         updateTable();
//     }
// }

// // Function to update the table after CRUD operations
// function updateTable() {
//     const tableBody = document.querySelector("#myTable tbody");
//     // Clear existing rows
//     tableBody.innerHTML = "";
//     // Recreate the table
//     createTable();
// }

// // Initialize the table
// createTable();


// let data = [
//     { id: 1, name: "John Doe" },
//     { id: 2, name: "Jane Doe" },
//     // Add more data as needed
// ];

// function updateTable() {
//     const tableBody = document.querySelector("#myTable tbody");
//     tableBody.innerHTML = "";

//     data.forEach((item) => {
//         const row = tableBody.insertRow();
//         row.insertCell(0).textContent = item.id;
//         row.insertCell(1).textContent = item.name;
//         const actionCell = row.insertCell(2);
//         actionCell.innerHTML = `<button onclick="updateRow(${item.id})">Update</button>
//                                 <button onclick="deleteRow(${item.id})">Delete</button>`;
//     });
// }

// function addRow() {
//     const newName = prompt("Enter a name:");
//     const newId = data.length + 1;
//     data.push({ id: newId, name: newName });
//     updateTable();
// }

// function updateRow(id) {
//     const newName = prompt("Enter a new name:");
//     const rowToUpdate = data.find((item) => item.id === id);
//     if (rowToUpdate) {
//         rowToUpdate.name = newName;
//         updateTable();
//     }
// }

// function deleteRow(id) {
//     data = data.filter((item) => item.id !== id);
//     updateTable();
// }

// updateTable();  // Initial table update
// let dataArray = [];
//    const tableBody = document.getElementById("tableBody");
//    const dataForm = document.getElementById("dataForm");
// function saveData(){
     
//      let First_Name = document.getElementById("name").value;
//      console.log(First_Name)
//      let agee = document.getElementById("age").value;
//      console.log(agee)
//      let cityy = document.getElementById("city").value; 
//      console.log(cityy);
     

//      if ( First_Name && !isNaN(agee) && cityy) {
//                 dataArray.push({First_Name, agee,cityy}); 
//                 renderTable();
        
//                 document.getElementById("name").value = "";
//                 document.getElementById("age").value = "";
//                 document.getElementById("city").value = "";
//             }
        
//             else {
//                 alert("Please fill in all fields with valid values.");
//             }
            
//         }          
    
     
//      let tableb = document.getElementById("tableBody");
//      tableb.innerHTML = dataArray.map((Fnm, index) => `
//         <tr> 
//         <td>${Fnm.Name}</td>
//         <td>${Fnm.age}</td>
//         <td>${Fnm.city}</td> 
//         <td><button onclick="deleteRow(${index})">Delete</button></td>`).join('');
      
 
    
//     function renderTable() {
//     let tableb = document.getElementById("tableBody");
//     tableb.innerHTML = dataArray.map((Fnm, index) => `
//        <tr> 
//        <td>${Fnm.Name}</td>
//        <td>${Fnm.age}</td>
//        <td>${Fnm.city}</td> 
//        <td><button onclick="deleteRow(${index})">Delete</button></td>`).join('');}

          
//     function deleteRow(index) {
//         dataArray.splice(index, 1);
//         renderTable();
//     }

// class CrudTable {
//     constructor() {
     
//         this.tableBody = document.getElementById("tableBody");
//         this.newNameInput = document.getElementById("newName");
//     }

//     createTable() {
//         this.tableBody.innerHTML = "";

//         this.data.forEach((item) => {
//             const row = this.tableBody.insertRow();
//             row.insertCell(0).textContent = item.id;
//             row.insertCell(1).textContent = item.name;
//             row.insertCell(2).textContent = item.last;
//             const actionCell = row.insertCell(2);
//             actionCell.innerHTML = `<button onclick="crudTable.updateRow(${item.id})">Update</button>
//                                     <button onclick="crudTable.deleteRow(${item.id})">Delete</button>`;
//         });
//     }

//     addRow() {
//         const newName = this.newNameInput.value.trim();
//         if (newName === "") {
//             alert("Please enter a name.");
//             return;
//         }

//         const newId = this.data.length + 1;
//         this.data.push({ id: newId, name: newName });
//         this.createTable();
//         this.newNameInput.value = "";
//     }

//     updateRow(id) {
//         const newName = prompt("Enter a new name:");
//         if (newName !== null) {
//             this.data = this.data.map(item => item.id === id ? { ...item, name: newName } : item);
//             this.createTable();
//         }
//     }

//     deleteRow(id) {
//         this.data = this.data.filter(item => item.id !== id);
//         this.createTable();
//     }
// }

// const crudTable = new CrudTable();
// crudTable.createTable();
const data = JSON.parse(localStorage.getItem("localdata"))|| [];

const tableBody = document.getElementById("tableBody");
const newIdInput = document.getElementById("newId");
const newNameInput = document.getElementById("newName");
const newSNameInput = document.getElementById("newSName");


function createTable() {
    tableBody.innerHTML = "";

    data.forEach((item) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.name;
        row.insertCell(2).textContent = item.Sname;
        // row.insertCell(3).textContent = item.sele
        const actionCell = row.insertCell(3);
        actionCell.innerHTML = `<button onclick="updateRow(${item.id})">Update</button>
                                <button onclick="deleteRow(${item.id})">Delete</button>
                                <button onclick="deleteSelectedRows(${item.id})">Selected rows only</button>`;
        const checkboxCell = row.insertCell(0);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);
    });
}

function addRow() {
    const newId = parseInt(newIdInput.value);
    const newName = newNameInput.value.trim();
  const newSName = newSNameInput.value.trim();
    if (isNaN(newId) || newId <= 0 || newName === ""|| newSName === "") {
        alert("Please enter valid ID,Name and Sname."); 
        return;
    }

    const sameID = data.some(item => item.id === newId || item.name === newName  || item.Sname === newSName );
    if (sameID) {
        alert("ID already In the table. Please choose a different ID.");
        return;
    }

    data.push({ id: newId, name: newName  , Sname: newSName });
    createTable();
    newIdInput.value = "";
    newNameInput.value = "";
    newSNameInput.value = "";
     localStorage.setItem('localdata',JSON.stringify(data))
}

function updateRow(id) {
    const newName = prompt("Enter a new name:");
    const newSName = prompt("Enter a new SName:");
    if (newName !== null) {
        data.forEach(item => {
            if (item.id === id) {
                item.name = newName;
                item.Sname = newSName;
            }
        });
        createTable();
    }
}

function deleteRow(id) {
    const indexToDelete = data.findIndex(item => item.id === id);
    if (indexToDelete !== -1) {
        data.splice(indexToDelete, 1);
        createTable();
    }
}
function deleteSelectedRows() {
    const checkboxes = document.querySelectorAll("#myTable tbody input[type='checkbox']:checked");
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr");
        const id = parseInt(row.cells[0].textContent);
        deleteRow(id);
    });
}
createTable();






// script.js

// let data = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Doe" }
// ];

// document.addEventListener("DOMContentLoaded", function () {
//     createTable();
// });

// function createTable() {
//     const tableBody = document.querySelector("#myTable tbody");
//     tableBody.innerHTML = "";

//     data.forEach((item) => {
//         const row = tableBody.insertRow();
//         row.insertCell(0).textContent = item.id;
//         row.insertCell(1).textContent = item.name;

//         const actionCell = row.insertCell(2);
//         actionCell.innerHTML = `<button onclick="updateRow(${item.id})">Update</button>`;

//         const checkboxCell = row.insertCell(3);
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkboxCell.appendChild(checkbox);
//     });
// }

// function addRow() {
//     const newRow = {
//         id: data.length + 1,
//         name: "New Name"
//     };

//     data.push(newRow);
//     createTable();
// }

// function updateRow(id) {
//     const newName = prompt("Enter a new name:");
//     if (newName !== null) {
//         data = data.map(item => item.id === id ? { ...item, name: newName } : item);
//         createTable();
//     }
// }

// function deleteRow(id) {
//     data = data.filter(item => item.id !== id);
//     createTable();
// }

// function deleteSelectedRows() {
//     const checkboxes = document.querySelectorAll("#myTable tbody input[type='checkbox']:checked");
//     checkboxes.forEach(checkbox => {
//         const row = checkbox.closest("tr");
//         const id = parseInt(row.cells[0].textContent);
//         deleteRow(id);
//     });
// }


// let items = ["pencile", "Eraser", "Sharpner", "Scale", "Pen", "Marker"];
// console.log(items?.length);
// console.log(items[0]);


// add element from last position
// items.push("new");
// console.log(items);


// remove element from last position
// items.pop();
// console.log(items);

// remove element from first position
// items.shift();
// console.log(items);

// add element at first position
// items.unshift("first");
// console.log(items);

// check if given argument is in the array or not
// const isinclude = items.includes("Ersdsaser");
// console.log(isinclude);
// let text = "textu";

// check if given argument is an array or not
// const isarray = Array.isArray(items);
// console.log(isarray);

// reverse the order of an array
// let reversed = items.reverse();
// console.log(reversed);

// conver the array into string
// let string = items.toString();
// console.log(string);

// join the element by parameter
// let joined = items.join("");
// console.log(joined);

// let numberss = [20, 50, 10, 22, 5, 30, 40];
// console.log(numberss);

// perform any operation on whole arrray
// let mapped = numberss.map((ele, index) => {
//    if (index === 0) { return (ele + 2) }
//    else { return ele }
// });
// console.log("mapped", mapped);

// reutrn array of elements follow the condition
// let filtered = numberss.filter((item) => { return (item > 10 || item === 10) });
// console.log("filtered", filtered);


// return first element who follow th condition
// let finded = numberss.find((item) => { return (item > 10 || item === 10) });
// console.log("finded", finded);



// return true if and if only all elements follow the condition
// let everied = numberss.every((item) => { return (item > 10) });
// console.log("everied: ", everied);



// return true if and if only one  elements follow the condition
// let somed = numberss.some((item) => { return (item > 10) });
// console.log("somed : ", somed);



// perform any operation on array not reutrn anything
// numberss.forEach((item, index) => {
    
//    if (index < numberss.length / 2) console.log(`Item ${item} is in the list`);
// });
// let newert = numberss.fill(0);
// console.log("newert fill method: ", newert);
//  let halfmap = numberss.map((i, index) => {
//     if (index < numberss.length / 2) {
//        return 0
//    }
//    else {
//        return i
//    }
// })
// console.log("halfmap", halfmap);
// let nesteedarray = [1, 12, 20, 30, [12, 20, 10], 20];
// let flatted = nesteedarray.flat();
// console.log(flatted);



// reutrn index of element follow the condition
// let findIndex = numberss.findIndex((item) => { return (item > 10) });
// console.log(findIndex);



// return last index of element follow the condition
// let findlastIndex = numberss.findLastIndex((item) => { return (item > 10) });
// console.log(findlastIndex);



// perform operation on array
// console.log(Array.from(numberss, (x) => x + x));


// sort string array in ascending order
// let sortedAscending = items.sort((a,b) => {return (a.localeCompare(b)) });
// console.log("sortedAscending:",sortedAscending);

 
// sort string array in descending order
// let sortedDescending = items.sort((a,b) => {return (b.localeCompare(a)) });
// console.log("sortedDescending:",sortedDescending);