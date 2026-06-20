import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

}
