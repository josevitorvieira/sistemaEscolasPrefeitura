import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'register-school',
  templateUrl: './register-school.component.html',
  styleUrls: ['./register-school.component.scss']
})
export class RegisterSchoolComponent implements OnInit {
  public idUpdate: string | null  = null;

  public school: FormGroup = new FormGroup({
      cnpj: new FormControl(null, [
        Validators.required,
      ]), 
      schoolName: new FormControl(null),
      adress: new FormGroup({
        street: new FormControl(null),
        numberOfAdress: new FormControl(null),
        district: new FormControl(null),
        zipCode: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        country: new FormControl(null),
      }), 
      phone: new FormControl(null),    
  })

  constructor(
    private readonly http: HttpClient,
    private readonly activateRoute: ActivatedRoute,
    private readonly route: Router
  ){}
  
  ngOnInit(): void {
    this.recoveryId()
  }

  async createSchool(){
    const response = this.http.post("http://localhost:3000/schools", this.school.value)
      .subscribe((result)=>{
        this.school.reset();
      });
  }

  async getSchool(id: string){
    const response = this.http.get(`http://localhost:3000/schools/${id}`)
      .subscribe((result: any)=>{
        delete result.id;
        this.school.setValue(result);
      });
  }

  async updateSchool(id: string | null, school: any){
    const response = this.http.put(`http://localhost:3000/schools/${id}`, school.value)
      .subscribe(()=>{
        this.route.navigate(['/listSchool']);
      });
  }

  recoveryId(){
    this.idUpdate = this.activateRoute.snapshot.paramMap.get("id");
    
    if(this.idUpdate){
      this.getSchool(this.idUpdate);
    }
  }

  goTo(path: string) {
    this.route.navigate([`/${path}`]);
  }
}
