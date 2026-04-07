import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent {

}
