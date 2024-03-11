import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Createform2Component } from '../createform2/createform2.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export class CreateformComponent {

}


@Component({
  selector: 'app-createform3',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, Createform2Component, DashboardComponent],
  templateUrl: './createform3.component.html',
  styleUrl: './createform3.component.css'
})
export class Createform3Component {

}
