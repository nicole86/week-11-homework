// var Student = require('./student.js');

var Bus = function(studentsOnTheBus, driverName, color, gas, studentEntersBus, busChatter){
 	this.studentsOnTheBus = [];
 	this.driverName = driverName;
 	this.color = color;
 	this.gas = gas;
 	this.studentEntersBus = function(){
 		this.studentsOnTheBus.push(new Student());
 	}
 	this.busChatter = function(){
 		for(var i = 0; i < studentsOnTheBus.length; i++){

 			var student = studentsOnTheBus[i];

 			console.log(student.catchPhrase);

 			console.log(student.canStudentHaveFun());
 		}
 	}
 }

 module.exports = Bus;