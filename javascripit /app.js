'use strict';
let sectionEl = document.getElementById("Newsection")

function employee(emploeeId, FullName, Department, level,imgurl) 
{
this.emploeeId =emploeeId;
this.FullName = FullName;
this.Department = Department;
this.level = level;
this.imagePath = imgurl;
this.salary = 0;
}


    employee.prototype.NetSalary =function (){ 

        if (this.level == "Junior"){
        this.salary =  Math.floor(Math.random() * (1000 - 500 + 1) + 500);

        }else if (this.level == "Mid-Senior")
        {
            this.salary =  Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);

        }else if (this.level == "Senior" ) 
        {
            this.salary =  Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);

        }
    this.salary = this.salary*0.925
  };
  employee.prototype.render = function(){
     // document.write(`<h3>Name : ${this.FullName}</h3>`);
      //document.write(`<p> Salary : ${this.salary}</p>`);
      let mySection = document.getElementById('Newsection');
      let divEl = document.createElement('div');
      mySection.appendChild(divEl);

      let imgEl = document.createElement('img');
      divEl.appendChild(imgEl);
      imgEl.setAttribute('src', this.imagePath)
      imgEl.setAttribute('alt',this.name);


      let pEl = document.createElement('p');
      divEl.appendChild(pEl);
      pEl.textContent = `Name : ${this.FullName} - ID :${this.emploeeId} `;

      let pE2 = document.createElement('p');
      divEl.appendChild(pE2);
      pE2.textContent = `Department  : ${this.Department} - Level :${this.level} `;

      let pE3 = document.createElement('p');
      divEl.appendChild(pE3);
      pE3.textContent = this.salary;

  
  };

  const uid = function(){
    return  Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/// event listener /////

let empForm = document.getElementById('NewEmployee');
empForm.addEventListener('submit', addNewEmp);

function addNewEmp(event){
    event.preventDefault();
  let name = event.target.name.value;
  let Department = event.target.Department.value;
  let level = event.target.level.value;
  let imgurl = event.target.imgurl.value;
  
  let newEmpoo = new employee(uid(),name,Department,level,imgurl);
  newEmpoo.NetSalary();
    newEmpoo.render();
    console.log(newEmpoo);
};

    let employ1 = new employee('100','Ghazi Same','Administration','Senior','javascripit /images/Ghazi.jpg');
    employ1.NetSalary();
    employ1.render();
    let employ2 = new employee('1001','Lana Ali','Finance','Senior','javascripit /images/Lana.jpg');
    employ2.NetSalary();
    employ2.render();
    let employ3 = new employee('1002','Tamara Ayoub','Marketing','Senior','javascripit /images/Tamara.jpg');
    employ3.NetSalary();
    employ3.render();
    let employ4 = new employee('1003','Safi Wali','Administration','Mid-Senior','javascripit /images/Safi.jpg');
    employ4.NetSalary();
    employ4.render();
    let employ5 = new employee('1004','Omar Zaid','Development','Senior','javascripit /images/Omar.jpg');
    employ5.NetSalary();
    employ5.render();
    let employ6 = new employee('1005','Rana Saleh','Development','Junior','javascripit /images/Rana.jpg');
    employ6.NetSalary();
    employ6.render();
    let employ7 = new employee('1006','Hadi Ahmad','Finance','Mid-Senior','javascripit /images/Hadi.jpg');
    employ7.NetSalary();
    employ7.render();

    
