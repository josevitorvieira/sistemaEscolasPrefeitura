import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.scss']
})
export class RegisterClassComponent implements OnInit {
  public idSchool: string | null = "";
  public school: any = {}
  public idUpdate: string | null = "";
  public classes: FormGroup = new FormGroup({
    idSchool: new FormControl(null, [
      Validators.required,
    ]),
    schoolName: new FormControl(null, [
      Validators.required,
    ]),
    grade: new FormControl(null, [
      Validators.required,
    ]),
    class: new FormControl(null, [
      Validators.required,
    ]),
    period: new FormControl(null, []),
    studentQuantity: new FormControl(null, [
      Validators.required,
    ]),
    maxAmount: new FormControl(null, [
      Validators.required,
    ]),
  })

  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly route: Router
  ) { }

  ngOnInit(): void {
    this.recoveryId()
  }

  recoveryId(){
    this.idSchool = this.activateRoute.snapshot.paramMap.get("idSchool");
    this.getSchool(this.idSchool)
    this.classes.controls["idSchool"].setValue(this.idSchool);
    
  }

  getSchool(idSchool: any){
    const response = this.http.get(`http://localhost:3000/schools/${idSchool}`)
    .subscribe((result)=>{
      this.school = result;      
      this.classes.controls["schoolName"].setValue(this.school.schoolName);
    });
  }

  goTo(path: string) {
    this.route.navigate([`/${path}`]);
  }

  async createClass(){
    const response = this.http.post("http://localhost:3000/classes", this.classes.value)
      .subscribe((result)=>{
        this.classes.reset();
      });
  }
}
