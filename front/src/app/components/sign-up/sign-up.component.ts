import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  get firstName(){
    return this.signupForm.get('firstName');
    }
  get lastName(){
    return this.signupForm.get('lastName');
      }
  get username(){
   return this.signupForm.get('username');
     }
  get email(){
     return this.signupForm.get('email');
      }
  get adress(){
    return this.signupForm.get('adress');
    }
  get phone(){
     return this.signupForm.get('phone');
    }
  get password1(){
    return this.signupForm.get('password1');
     }
  get password2(){
      return this.signupForm.get('password2');
     }
  

    ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        let control = formGroup.controls[controlName];
        let matchingControl = formGroup.controls[matchingControlName]
        if (
          matchingControl.errors &&
          !matchingControl.errors['confirmPasswordValidator']
        ) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmPasswordValidator: true });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    
  signupForm = this.fb.group({
    firstName: new FormControl('',[
      Validators.required]),
    lastName: new FormControl('',[
      Validators.required]),
    username: new FormControl('',[
      Validators.required]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    adress: new FormControl('',[
      Validators.required]),
    phone: new FormControl('',[
      Validators.required]),
    password1: new FormControl('',[
      Validators.required]), 
    password2: new FormControl('',[
      Validators.required]) },
      {
        validator: this.ConfirmPasswordValidator("password1", "password2")
      });
  

  constructor(private auth:AuthService, private router: Router,private fb: FormBuilder){}
    onSubmit():void {
      if (this.signupForm.valid) {

        console.log(this.signupForm.value);
       //this.auth.logAdmin({username:'admin',password:'admin'}).subscribe((val => console.log(val)));
       //console.log(this.auth.getAllClient().subscribe((val => console.log(val))));
    //console.log(this.auth.getAdmin().subscribe((val => console.log(val))));
    if(this.signupForm.value.password1==this.signupForm.value.password2){
       this.auth.addClient(({ username:this.signupForm.value.username, password:this.signupForm.value.password2,nom:this.signupForm.value.firstName,prenom:this.signupForm.value.lastName,adress:this.signupForm.value.adress,phone:this.signupForm.value.phone,email:this.signupForm.value.email })).subscribe((val => console.log(val)));
        this.router.navigate(['/login']);
      }
    }
}
}

