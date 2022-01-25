'use strict';
function employee(emploeeId, FullName, Department, level) 
{
this.emploeeId =emploeeId,
this.FullName = FullName,
this.Department = [Administration , Marketing , Development ,Finance],
this.level = [Junior ,Mid-Senior, Senior]
    if (this.level == "Junior"){
        let min = 500 ;
        let max = 1000;
    }elseif (this.level = "Mid-Senior")
    {
        let min = 1000 ;
        let max = 1500;
    }elseif (this.level = "Senior" ) 
    {
        let min = 1500 ;
        let max = 1500;
    }
const basicSalary = function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  };
    }
    const NetSalary = basicSalary - basicSalary*0.7 ;
    employee.prototype.NetSalary =NetSalary

    const employ1 = new employee(100,Ghazi_Same,Administration,Senior)
    const employ2 = new employee(1001,Lana_Ali,Finance,Senior)
    const employ3 = new employee(1002,Tamara_Ayoub,Marketing,Senior)
    const employ4 = new employee(1003,Safi_Wali,Administration,Mid-Senior)
    const employ5 = new employee(1004,Omar_Zaid,Development,Senior)
    const employ6 = new employee(1005,Rana_Saleh,Development,Junior)
    const employ7 = new employee(1006,Hadi_Ahmad,Finance,Mid-Senior)
