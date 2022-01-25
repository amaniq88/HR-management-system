'use strict';
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
      document.write(`<h3>Name : ${this.FullName}</h3>`);
      document.write(`<p> Salary : ${this.salary}</p>`);
  
  };

    let employ1 = new employee('100','Ghazi Same','Administration','Senior');
    employ1.NetSalary()
    employ1.render();
    let employ2 = new employee('1001','Lana Ali','Finance','Senior');
    employ2.NetSalary()
    employ2.render();
    let employ3 = new employee('1002','Tamara Ayoub','Marketing','Senior');
    employ3.NetSalary();
    employ3.render();
    let employ4 = new employee('1003','Safi Wali','Administration','Mid-Senior');
    employ4.NetSalary();
    employ4.render();
    let employ5 = new employee('1004','Omar Zaid','Development','Senior');
    employ5.NetSalary();
    employ5.render();
    let employ6 = new employee('1005','Rana Saleh','Development','Junior');
    employ6.NetSalary();
    employ6.render();
    let employ7 = new employee('1006','Hadi Ahmad','Finance','Mid-Senior');
    employ7.NetSalary();
    employ7.render();
