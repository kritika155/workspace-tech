import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import StudentService from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent implements OnInit {
  

  constructor(private route: ActivatedRoute, 
    private studentService:StudentService, 
    private router: Router) { 
  }

  rollno: number;
  private sub: any;
  student:any;
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.rollno = +params['rollno']; // (+) converts string 'id' to a number
       console.log("rollno is "+this.rollno);
       this.student = this.studentService.getStudentById(this.rollno);

       // In a real app: dispatch action to load the details here.
    });
  }

  updateStudent(student){
  	this.studentService.updateStudent(student);
    this.router.navigate(['/list-student']);
  }
}
