'use strict';
function gettingItem(){
    let stringObj = localStorage.getItem('EmpHR');
    // console.log(stringObj);
    var parsObj = JSON.parse(stringObj);
   /* if (parsObj !== null){
       const ArrayEmpData = parsObj
    }*/
return parsObj;
  }
const DataArray = gettingItem();


let Accsection = document.getElementById("TableSection")

let tableEL = document.createElement('table');
TableSection.appendChild(tableEL);

let trEl = document.createElement('tr');
tableEL.appendChild(trEl);

let thEL = document.createElement('th');
trEl.appendChild(thEL);
thEL.textContent= "Department"

let th1EL = document.createElement('th');
trEl.appendChild(th1EL);
th1EL.textContent= "# of employees"

let th2EL = document.createElement('th');
trEl.appendChild(th2EL);
th2EL.textContent= "Total Salary"

let th3EL = document.createElement('th');
trEl.appendChild(th3EL);
th3EL.textContent= "Average "

for(let i=0; i< DataArray.length ;i++){
  let EmpoRow = DataArray[i];

  let trEl = document.createElement('tr');
  tableEL.appendChild(trEl);

  let tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = "test";

  let td1El = document.createElement('td');
  trEl.appendChild(td1El);
  td1El.textContent = "test2";

}