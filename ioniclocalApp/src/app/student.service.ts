import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  students = [];
  constructor() { 
    var defstudents = [
      {
        rollno:'1', 
        firstName:'Kritika', 
        lastName:'Roy',
        dob:'14/02/1991', 
        class :'tenth', 
        subject:'Maths', 
        teacher:'Prem Lata',
        address:'India'
      },

      {
        rollno:'2', 
        firstName:'Ashish', 
        lastName:'Roy',
        dob:'31/04/1989', 
        class :'tenth', 
        subject:'Science', 
        teacher:'Mr.Ravi Chopra',
        address:'India'
      },
      {
        rollno:'3', 
        firstName:'Vivaan', 
        lastName:'Roy',
        dob:'1/04/1999', 
        class :'tenth', 
        subject:'Science', 
        teacher:'Mr.Vijay Singh',
        address:'India'
      }
    ];
    if(localStorage.getItem('students') == null){
      this.students = defstudents;
      localStorage.setItem('students', JSON.stringify(this.students));
    }
    else{
        this.students = JSON.parse(localStorage.getItem('students'));
    }
  }

  getStudents(){
  	return this.students;
  }

  addStudent(student){
  	student.rollno = Math.round(Math.random()*100000);
    	this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
  }

  updateStudent(student){
  	for(var i=0;i<this.students.length;i++){
  		if(student.rollno == this.students[i].rollno){
  			this.students[i] = student;
  		}
  	}
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  getStudentById(rollno){
    for(var i=0;i<this.students.length;i++){
        if(rollno == this.students[i].rollno){
        return this.students[i];
      }
    }
    return null;
  }

  deleteStudent(student){
  	for(var i=0;i<this.students.length;i++){
  		if(student.rollno == this.students[i].rollno){
  			this.students.splice(i,1);
        localStorage.setItem('students', JSON.stringify(this.students));
  		}
  	}
  }
}
