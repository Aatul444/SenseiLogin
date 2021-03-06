import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SusersDataService } from 'src/app/services/users/susers-data.service';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentLeave } from 'src/app/auths/GcanDeactivate/un-saved-changes-guard.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, CanComponentLeave {
  
loader=false;
  adminDetails:any;

canExit():boolean{
  if(confirm('Do you wish to ... '))
  {return true}
  else{return false}
}
canLeave():boolean{
  if(this.loginForm.dirty){window.confirm('Surely')}
  else{return true;}  
  return true;
}

  loginForm = new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl('',Validators.minLength(5)),
  })

  loginUser() {
    this.loader=!this.loader
    this.usersData.loginData(this.loginForm)
    .subscribe((res: any) => {
      console.log({ res });
      if(res.status==="success"){
        this.loader=!this.loader
        this.router.navigate(['/admin']);
        this.adminDetails=JSON.stringify(res.data);
        localStorage.setItem("adminData",this.adminDetails)
      }
    },(error:any) => {
      this.loader=false;
      // console.log(error.error.message)
      alert(error.error.message);
    })
    this.loginForm.reset();
  }

  constructor(private http: HttpClient, private usersData: SusersDataService, private router: Router ) { }

  ngOnInit(): void {  }
}
