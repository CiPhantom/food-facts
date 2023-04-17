import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/authenticationapi/subscription.service';

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent {

  form = new FormGroup({
    login: new FormControl('', [Validators.minLength(6), Validators.required]),
    password: new FormControl('', [Validators.minLength(10), Validators.required]),
    passwordConfirmation: new FormControl('', [Validators.minLength(10), Validators.required]),
    firstname: new FormControl('', [Validators.minLength(2), Validators.required]),
    lastname: new FormControl('', [Validators.minLength(2), Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    birthCountry: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    biography: new FormControl('', [Validators.minLength(50), Validators.required]),
    expertise: new FormControl('', [Validators.minLength(50), Validators.required])
  });
  
  constructor(private subscriptionService: SubscriptionService){}

  submit(form: any) {
    console.log(form.value);
    let var$ = this.subscriptionService.doSubscription(form.value);
    var$.subscribe(response => {
      console.log(response);
    });
  }


  get login() {return this.form.get('login');}

  get password() {return this.form.get('password');}

  get passwordConfirmation() {return this.form.get('passwordConfirmation');}

  get firstname() {return this.form.get('firstname');}

  get lastname() {return this.form.get('lastname');}

  get birthday() {return this.form.get('birthday');}

  get birthCountry() {return this.form.get('birthCountry');}

  get email() {return this.form.get('email');}

  get biography() {return this.form.get('biography');}

  get expertise() {return this.form.get('expertise');}
}
