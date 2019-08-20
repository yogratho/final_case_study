import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ManagerMaster } from 'src/ManagerMaster';
import { SmartDeployServiceService } from '../smart-deploy-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public message:ManagerMaster;
  public errorMessage:string;
  public response=false;
  name:any;
  role:any;
  pid:any;
  loginid='';
  loginpassword='';
  invalidLogin=false;
  public datatosend:ManagerMaster={managerId:'null',managerPassword:'null', managerName:'null',
  projectId:0,roleId:0};
  constructor(private router: Router,
   private service:SmartDeployServiceService) { }

  ngOnInit() {
  }
  submitLogin(){
    this.datatosend.managerId=this.loginid;
    this.datatosend.managerPassword=this.loginpassword;

    this.service.loginservice(this.datatosend).subscribe(data=>{this.message=data;
      console.log(data);
      console.log(this.message.managerName);
      this.name=this.message.managerName;
      console.log(this.name);
      this.role=this.message.roleId;
      
      this.pid=this.message.projectId;
      
    },
    error=>{
     this.response=true;
      this.errorMessage=error.error.message;
      console.log(this.errorMessage);
    }
    );
    
    if(this.role==1001)
    this.router.navigateByUrl('demand');
    if(this.role==1002)
    this.router.navigateByUrl('super');
   // this.service.setEmployeeName(this.name);
   }
  

}
