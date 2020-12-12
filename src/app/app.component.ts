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

  toggleLoading() {
    this.isLoading = !this.isLoading;
    this.loader.loading(this.isLoading);
    setTimeout(() => this.loader.loading(false), 5000);
  }

  ngOnInit() {}
}
