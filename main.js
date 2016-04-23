var Bus = require('./bus.js');

var students = [];

for(var i=0; i < 20; i++){

	prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
  
  		var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);

  		students.push(student);
	});
}

var bus = new Bus(students, "John", "red", 10);
bus.busChatter();
