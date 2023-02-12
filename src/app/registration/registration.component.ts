import { Component,OnInit } from '@angular/core';
import{ FormControl} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  firstName : any;
  lastName : any;
  mobileNumber: any;
  emailAddress: any;
  newPassword : any;
  confirmPassword : any;
  gender:any;

constructor(){}
  ngOnInit(): void {
  
  }



  saveForm(){
    console.log(this.firstName,this.lastName,this.mobileNumber,this.emailAddress,this.newPassword,this.confirmPassword,this.gender);
  }
  
}
