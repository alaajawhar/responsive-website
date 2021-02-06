import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
  course = [
    {id: 1, name: 'learn angular', description: 'hello', image: '../../assets/img2.png'},
    {id: 2, name: 'learn angular2', description: 'hello2', image: '../../assets/img3.png'},
    {id: 3, name: 'learn angular3', description: 'hello3', image: '../../assets/img4.png'}
  ];

  ngOnInit(): void {
  }

}
