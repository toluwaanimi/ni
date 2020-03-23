import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nimifrica';
  token: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token');
    // if (this.token != null) {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.router.navigate(['/']);
    // }
  }
}
