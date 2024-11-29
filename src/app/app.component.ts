import {Component, inject, OnInit, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'dgi-portal';
  data!: any;
  private readonly http: HttpClient = inject(HttpClient);

  ngOnInit() {
    console.log("INIT");
    const payload = {username: 'P039718510219W', password: '@KingMarti97'}
    this.http.post('http://tasserver.dgi.cm/api/v1/auth', payload).subscribe(
      {
        next: (data) => {
          console.log('data : ', data);
          this.data = data;
        },
        error: (err) => {
          console.log("ERROR : ", err);
          throw err;
        }
      }
    )
  }
}
