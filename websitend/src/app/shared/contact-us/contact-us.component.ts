import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommanservService } from '../../services/commanserv.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contactForm!: FormGroup;
  isSubmitting = false;
  constructor(
    private fb: FormBuilder,
    private contactService: CommanservService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      full_name: ['', [Validators.required]],
      mobile_no: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$') // Only 10 digits
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  submit(): void {
    console.log(this.contactForm.value);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

     this.isSubmitting = true;


    this.contactService
      .submitContact(this.contactForm.value)
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.isSubmitting = false;
          this.contactForm.reset();
        },
        error: (err: any) => {
          this.isSubmitting = false;
          console.error(err);
        }
      });
  }
  numbersOnly(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;

    // Allow only numbers
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    }

    return true;
  }
}