import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { LoginComponent } from '../login/login.component';
import { DateHelper } from 'src/DateHelper';
import { SmartDeployServiceService } from '../smart-deploy-service.service';
import { DialogService } from 'primeng/api';
import { HeaderComponent } from '../header/header.component';
import { BenchEmployee } from 'src/BenchEmployees';

@Component({
  selector: 'app-demand-manager',
  templateUrl: './demand-manager.component.html',
  styleUrls: ['./demand-manager.component.scss']
})
export class DemandManagerComponent implements OnInit {
  Name:any;
  constructor(private service: SmartDeployServiceService,private dservice:DialogService,public loginc:LoginComponent)
   {
   
    }
  ngOnInit() {
  
   // this.Name=this.service.getEmployeeName;
    console.log("sdsadsdeeeeqqww");
    console.log(this.Name);
  
  }
  
  response=false;
  errorMessage:string;
  
  start: string;
  end: string;
  message = [];
   employees:BenchEmployee[]=[{employeeId:'null',employeeName:'null',skill:'null',grade:'null',trainingStartDate:null,trainingCompletionDate:null,managerId:'null'}];
  myobj: DateHelper = { beginDate: 'null', endDate: 'null' };
  highcharts = Highcharts;
  value = 50;
  axis = 50;
  
  chartOptions;
  chartOptionsline;
  

  getratio() {
    this.myobj.beginDate = this.start;
    this.myobj.endDate = this.end;
    this.service.getRequestRatio(this.myobj).subscribe(data => {
      this.message = data;
     
      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Resource Manager Demands'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
    
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Request',
          data: [
            ['Request Raised', data[0]],
            ['Request Fullfilled', data[1]]
           
    
    
          ]
        }]
      };

      
    },
    error=>{
      this.response=true;
       this.errorMessage=error.error.message;
       console.log(this.errorMessage);
     }
    );
  }
  getBenchEmployee() {
    
    this.service.BenchEmployee().subscribe(data => {
      this.employees = data;
      console.log(data)
      console.log("hello");
      console.log(this.employees);
    });
    const ref=this.dservice.open(HeaderComponent,{
      header:'Select Employees',
      width:'50%',
      height:'70%',
    
    });






   
  }
}
