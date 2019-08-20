import { Component, OnInit, ViewChild } from '@angular/core';
import { SmartDeployServiceService } from '../smart-deploy-service.service';
import { BenchEmployee } from 'src/BenchEmployees';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { ExcelDownloadService } from '../exceldownload.service';
import {HostListener} from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  employees:BenchEmployee[]=[{employeeId:'null',employeeName:'null',skill:'null',grade:'null',trainingStartDate:null,trainingCompletionDate:null,managerId:'null'}];
  rowData:any;
  
  elements: any = [];
 

  

   @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  ngOnInit() {
    this.service.BenchEmployee().subscribe(data=>
      {
        this.employees=data;
        console.log("in header");
        console.log(this.employees);
        console.log("in header dasd");
        this.rowData = data;
        console.log(this.rowData);

      });
      
      
  }
  constructor(private http: HttpClient,private excelservice:ExcelDownloadService,private service:SmartDeployServiceService ) {
    this.columnDefs = [
      {headerName: 'EmployeeId', field: 'employeeId', sortable: true, filter: true, checkboxSelection: true,width:150 },
      {headerName: 'EmployeeName', field: 'employeeName', sortable: true, filter: true,width:150 },
      {headerName: 'Skill', field: 'skill', sortable: true, filter: true ,width:150},
      {headerName: 'Grade', field: 'grade', sortable: true, filter: true,width:150 },
      {headerName: 'TrainingStartDate', field: 'trainingStartDate', sortable: true, filter: true,width:150 },
      {headerName: 'TrainingEndDate', field: 'trainingCompletionDate', sortable: true, filter: true,width:150 },
 
    ];
    this.sortingOrder = ["desc", "asc", null];
   
  }
  
  
  
   exportAsXLSX():void
 {
  const selectedNodes = this.agGrid.api.getSelectedNodes();
  const selectedData = selectedNodes.map( node => node.data );
 this.elements=selectedData;

  this.excelservice.exportAsExcelFile(selectedData, 'sample');

 }
 changeBenchToDeploy()
 {
   console.log(this.elements);
   let employeeIds=[];
   for(let i=0;i<this.elements.length;i++)
    employeeIds.push(this.elements[i].employeeId);

    console.log(employeeIds);
  this.service.deployEmployees(employeeIds).subscribe();
 }

 

}
