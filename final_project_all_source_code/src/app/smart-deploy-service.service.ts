import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ManagerMaster } from 'src/ManagerMaster';
import { Observable } from 'rxjs';
import { DateHelper } from 'src/DateHelper';

@Injectable({
  providedIn: 'root'
})
export class SmartDeployServiceService {
managerName:any;
  constructor(private http: HttpClient) { }
  addition_url="http://3.87.239.47:8080/login";
  demand_url="http://3.87.239.47:8080/demand";
  benchDetails_url="http://3.87.239.47:8080/benchEmployeeDetails";
  deployee_url="http://3.87.239.47:8080/deployEmployee";
  loginservice(dataToSend:ManagerMaster):Observable<any>
  {
    return this.http.post<any>(this.addition_url,dataToSend);
  }
  getRequestRatio(datas:DateHelper):Observable<any[]>
  {
    console.log(datas.beginDate);
    console.log(datas.endDate);
    return this.http.post<any[]>(this.demand_url,datas);
  }
  BenchEmployee():Observable<any[]>
  {
    return this.http.get<any[]>(this.benchDetails_url);
  }
  deployEmployees(myData:any)
  {
    return this.http.post(this.deployee_url,myData);
  }

  adminReport(id:string):Observable<any[]>
  {
    return this.http.get<any[]>("http://3.87.239.47:8080/superAdminDashboard/"+id);
  }
  

}
