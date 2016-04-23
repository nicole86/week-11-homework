var prompt = require('prompt');

var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender,
  this.grade = grade;
  this.GPA = GPA;
  this.detentions = detentions
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;

  this.canStudentHaveFun = function(){
    if ((this.detentions < 10) && (this.GPA > 2)) {
      console.log("The student can have fun!!");
    } else {
      console.log("The student CANNOT have fun!");
    }
  }
}


prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
  var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);

  student.canStudentHaveFun();
});

module.exports = Student;