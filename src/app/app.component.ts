import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eshop';
  inCart = 0;
  apiUrl = `${environment.api}`;

  addToCart() {
    this.inCart += 1;
  }
  removeFromCart() {
    return this.inCart > 0 ? (this.inCart -= 1) : this.inCart;
  }
}
