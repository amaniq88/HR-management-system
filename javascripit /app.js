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
employee.allemployee.push(this);

}

employee.allemployee = [];
    //**************  Salary function *****************
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

  // ***************** Render Function ***************
   function render(){
     
      let mySection = document.getElementById('Newsection');

      for(let i =0; i<employee.allemployee.length;i++){
        let empObj = employee.allemployee[i];
      let divEl = document.createElement('div');
      mySection.appendChild(divEl);

      let imgEl = document.createElement('img');
      divEl.appendChild(imgEl);
      imgEl.setAttribute('src', empObj.imagePath)
      imgEl.setAttribute('alt', empObj.name);


      let pEl = document.createElement('p');
      divEl.appendChild(pEl);
      pEl.textContent = `Name : ${empObj.FullName} - ID :${empObj.emploeeId} `;

      let pE2 = document.createElement('p');
      divEl.appendChild(pE2);
      pE2.textContent = `Department  : ${empObj.Department} - Level :${empObj.level} `;

      let pE3 = document.createElement('p');
      divEl.appendChild(pE3);
      pE3.textContent = empObj.salary;
      };

  
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
  render()
  settingItem();

};

    let employ1 = new employee('100','Ghazi Same','Administration','Senior','javascripit /images/Ghazi.jpg');
    employ1.NetSalary();
  
    let employ2 = new employee('1001','Lana Ali','Finance','Senior','javascripit /images/Lana.jpg');
    employ2.NetSalary();
    
    let employ3 = new employee('1002','Tamara Ayoub','Marketing','Senior','javascripit /images/Tamara.jpg');
    employ3.NetSalary();
  
    let employ4 = new employee('1003','Safi Wali','Administration','Mid-Senior','javascripit /images/Safi.jpg');
    employ4.NetSalary();
  
    let employ5 = new employee('1004','Omar Zaid','Development','Senior','javascripit /images/Omar.jpg');
    employ5.NetSalary();

    let employ6 = new employee('1005','Rana Saleh','Development','Junior','javascripit /images/Rana.jpg');
    employ6.NetSalary();

    let employ7 = new employee('1006','Hadi Ahmad','Finance','Mid-Senior','javascripit /images/Hadi.jpg');
    employ7.NetSalary();

    render();

//******************local storage *****************


  function settingItem(){
    let data = JSON.stringify(employee.allemployee);// convert the data to JSON format 
    localStorage.setItem('EmpHR',data)
  
    }
  
  
  function gettingItem(){
    let stringObj = localStorage.getItem('EmpHR');
    // console.log(stringObj);
    let parsObj = JSON.parse(stringObj);
    // console.log(parsObj);
    if (parsObj !== null){
        employee.allemployee = parsObj
    }
  
    render();
  
  }
  gettingItem()

    
