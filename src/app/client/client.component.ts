import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Dummy URL

  records:any =[]
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.records = JSON.stringify(data);
    });
  }


}
