import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedView = 'recipe';
  change = false;

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  onNavigate(event) {
    if (event === this.loadedView) {
      return;
    } else {
      this.loadedView = event;
    }

  }
}
