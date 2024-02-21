import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser {
  name: string;
  email: string;
  password: string;
  showPassword: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:boolean = true;
  signupForm:boolean = false;
  loginSubmitForm: FormGroup;
  submitted = false;
  mylogin = 'pp@capgemini.com';
  mypass = 'pp1234';
  adminLogin = 'admin@capgemini.com';
  adminPass = 'admin1234';
  user:IUser;
  sucess:boolean = false;
  error :boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
    ) {
    this.loginSubmitForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
    this.user = {} as IUser;
   }

  ngOnInit() {
    this.loginSubmitForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
}

get f() { return this.loginSubmitForm.controls; }

onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginSubmitForm.invalid) {
        return;
    }else{
      if((this.loginSubmitForm.get('email')?.value == this.mylogin) && (this.loginSubmitForm.get('password')?.value == this.mypass) ){
        this.router.navigate(['/dashboard']);
        localStorage.setItem('user', JSON.stringify(this.mylogin));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginSubmitForm.value, null, 4));
        // alert("Sucessfully LoggedIn");
        this.sucess= true;
        this.error = false;
      }
      else if((this.loginSubmitForm.get('email')?.value == this.adminLogin) && (this.loginSubmitForm.get('password')?.value == this.adminPass) ){
        this.router.navigate(['/dashboard']);
        localStorage.setItem('admin', JSON.stringify(this.adminLogin));
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginSubmitForm.value, null, 4));
        // alert("Sucessfully LoggedIn");
        this.sucess = true;
        this.error = false;
      }
      else{
        // alert("incorrect username or password");
        this.error = true;
      }
    }
}

  goToRegister(){
    this.loginForm = false;
    this.signupForm = true;
  }
  goToLogin(){
    this.loginForm = true;
    this.signupForm = false;
  }

}
