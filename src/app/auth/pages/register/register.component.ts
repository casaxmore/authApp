import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['casaXmore', [Validators.required]],
    email: ['casaxmore@gmail.com', [Validators.required, Validators.email]],
    password: ['666666', [Validators.required, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder, private router: Router){}

  register(){
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard');
  }

}
