import { Component, OnInit } from '@angular/core';
import { SmartDeployServiceService } from '../smart-deploy-service.service';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss']
})
export class SuperComponent  {
  name:string;
  selected: string;
   noResult = false;
   response:number;
   constructor(private service:SmartDeployServiceService)
   {

   }
  demandManagers:string[]=['180035IN','180036IN','181129IN'];
   typeaheadNoResults(event: boolean): void {
     this.noResult = event;
   }
   myInterval = 1000;
   slideChangeMessage = '';
   pie=[];
   highcharts = Highcharts;
   chartOptions;
 
  log(event: number) {
    
    this.response=event;
  }
  getReport()
  {
    if(this.response==0)
    {
     this.service.adminReport(this.demandManagers[this.response]).subscribe(data=>{
      this.pie=data;
      this.name="Ajay P";
      console.log(this.pie);
      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Resource Manager Demands Ratio for '+this.name
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




     });
     

  }

  if(this.response==1)
    {
     this.service.adminReport(this.demandManagers[this.response]).subscribe(data=>{
      this.pie=data;
      this.name="Tanmaya A";
      console.log(this.pie);
      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false
        },
        title: {
          text: 'Resource Manager Demands Ratio for '+this.name
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




     });
     

  }
  if(this.response==2)
  {
   this.service.adminReport(this.demandManagers[this.response]).subscribe(data=>{
    this.pie=data;
    this.name="Nitin Joshi";
    console.log(this.pie);
    this.chartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Resource Manager Demands  Ratio for '+this.name 
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




   });
   

}














  }
  }

  

