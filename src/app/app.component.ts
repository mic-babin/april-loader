import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Preloader';
  isLoading: boolean = false;

  constructor(private loader: LoadingService) {}

  timer: any;
  toggleLoading() {
    this.isLoading = !this.isLoading;
    if (this.isLoading === false) {
      this.loader.loading(this.isLoading);
      clearTimeout(this.timer);
    } else {
      this.loader.loading(this.isLoading);
      this.timer = setTimeout(() => {
        this.isLoading = false;
        this.loader.loading(this.isLoading);
      }, 5000);
    }
  }

  ngOnInit() {}
}
