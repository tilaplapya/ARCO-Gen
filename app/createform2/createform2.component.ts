import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CreateformComponent } from '../createform/createform.component'; 


@Component({
  selector: 'app-createform2',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterOutlet, CreateformComponent],
  templateUrl: './createform2.component.html',
  styleUrl: './createform2.component.css'
})
export class Createform2Component {

}
