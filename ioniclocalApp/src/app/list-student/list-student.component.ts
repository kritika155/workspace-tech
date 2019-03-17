import { Component, OnInit } from '@angular/core';
import  StudentService  from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})
export class ListStudentComponent implements OnInit {
  students = this.studentService.getStudents();

  editStudent(student){
  	console.log("Roll No: " + student.rollno);
    this.router.navigate(['/edit-student/'+student.rollno]);
  }

  deleteStudent(student){
  	this.studentService.deleteStudent(student);
  	student = this.studentService.getStudents();
  }
  constructor(private studentService: StudentService,private router :Router) { }

  ngOnInit() {
    
  }

}
