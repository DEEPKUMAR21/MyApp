import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DevExtremeModule, DxTemplateHost } from 'devextreme-angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DevExtremeModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  response:any;
  constructor(private http: HttpClient) { }


  ngOnInit(): any {

    const payloadLogin: any =
    {
      "userEmail": "mauleen@docsvault.com",
      "password": "Docs@12345",
      "authType": 1,
      "authCode": "",
      "local": "TW",
      "subId": null
    }


    console.log("Auth Obj", payloadLogin);


    const setHeaders: any = {
      'Content-Type': 'application/json',
      'X-CSRF-Check': "216546456",
      'X-CallFrom': 1
    }

    this.http.post<any>(`https://dev-app2.docsvault.com/api/auth/login`, payloadLogin, { withCredentials: true, headers: setHeaders }).subscribe(
      (data: any) => {

      this.response = JSON.stringify(data);
    },
    error => {
      this.response = error.message;
    });

  }



}
