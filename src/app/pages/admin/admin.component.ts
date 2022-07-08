import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SusersDataService } from 'src/app/services/users/susers-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminDataObj:any;
  
  
  constructor(private sUsers:SusersDataService, private router: Router) { }

  ngOnInit(): void { 
    this.adminDataObj = JSON.parse(this.adminDatas)
   }

adminDatas=(localStorage.getItem('adminData')) || '';

logout(){
    localStorage.clear();
    localStorage.removeItem('adminData')
    // this.show=!this.show
    this.router.navigate(['/login']);
}
}
