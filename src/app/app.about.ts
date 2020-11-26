import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

@Component({
  selector: 'app-root',
  templateUrl: './app.about.html',
  styleUrls: ['./app.component.css']
})
export class About {
  about = 'About';
}
