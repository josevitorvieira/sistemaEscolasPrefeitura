import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.scss']
})
export class ListClassComponent implements OnInit {
  public idSchool: string | null = ""
  public classes: any = [];

  constructor(
    private readonly http: HttpClient,
    private readonly activateRoute: ActivatedRoute,
    private readonly route: Router
  ) { }

  ngOnInit(): void {
    this.recoveryId();
    this.getClasses(this.idSchool);
  }

  getClasses(id: string | null){
    const response: any = this.http.get(`http://localhost:3000/classes?idSchool=${id}`)
    .subscribe((result)=>{
      this.classes = result;              
    });
  }

  deleteClass(id: number){
    const response = this.http.delete(`http://localhost:3000/classes/${id}`).subscribe((result)=>{
      this.getClasses(this.idSchool);        
    });
  }

  recoveryId(){
    this.idSchool = this.activateRoute.snapshot.paramMap.get("id");
  }

    createClassRoute(){
    this.route.navigate([`/registerClass/${this.idSchool}`]);
  }
}
