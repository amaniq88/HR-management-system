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

  
let Accsection = document.getElementById("TableSection")

let tableEL = document.createElement('table');
TableSection.appendChild(tableEL);

tableEL.style.background = "green";
tableEL.style.border = '1px solid red'; ; 

const DataArray = gettingItem();


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


const DepArray = [ 'Administration', 'Marketing', 'Development', 'Finance' ];

for ( let j = 0 ; j < DepArray.length; j++){
    var DepSalary = 0 ; 
    var DepEmp = 0 ; 
    for ( let i =0 ; i< DataArray.length ; i++){
        if(DepArray[j] == DataArray[i].Department){
            DepSalary = DepSalary + DataArray[i].salary;
            DepEmp = DepEmp + 1 ;
        }
    
    }


    let trEl = document.createElement('tr');
    tableEL.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = DepArray[j];

    let td1E2 = document.createElement('td');
   trEl.appendChild(td1E2);
   td1E2.textContent =  DepEmp ;

    let td1E3 = document.createElement('td');
   trEl.appendChild(td1E3);
   td1E3.textContent =  DepSalary ;

   let td1E4 = document.createElement('td');
   trEl.appendChild(td1E4);
   td1E4.textContent =  DepSalary / DepEmp  ;
}

var Totalsalary = 0 ;
var TotalEmpo = 0
for ( let i =0 ; i< DataArray.length ; i++){
    Totalsalary = Totalsalary + DataArray[i].salary;
    TotalEmpo = TotalEmpo + 1 ;

}
let trE2 = document.createElement('tr');
tableEL.appendChild(trE2);

let td2E1 = document.createElement('td');
trE2.appendChild(td2E1);
td2E1.textContent=("Total");

let td2E2 = document.createElement('td');
trE2.appendChild(td2E2);
td2E2.textContent=(TotalEmpo);


let td2E3 = document.createElement('td');
trE2.appendChild(td2E3);
td2E3.textContent=(Totalsalary);


let td2E4 = document.createElement('td');
trE2.appendChild(td2E4);
td2E4.textContent = (Totalsalary / TotalEmpo );

trE1.style.border = '1px solid red';





