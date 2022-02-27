import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.scss']
})
export class ListSchoolComponent implements OnInit {

  public school: any = []

  constructor(
    private readonly http: HttpClient,
    private readonly route: Router
  ) { }

  ngOnInit(): void {
    this.getSchools()
  }

  getSchools(){
    const response = this.http.get("http://localhost:3000/schools").subscribe((result)=>{
      console.log(result);
      this.school = result        
    });
  }

  deleteSchool(id: number){
    const response = this.http.delete(`http://localhost:3000/schools/${id}`).subscribe((result)=>{
      console.log(result);
      this.school = result
      this.getSchools();        
    });
  }

  editSchool(id: number){
    this.route.navigate([`/registerSchool/${id}`]);
  }


}
