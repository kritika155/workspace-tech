import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 constructor(public alertController: AlertController,private router :Router) { }
 username="";
  password="";
  ngOnInit() {}
  onLogin(){
  if(this.username==this.password){
      this.router.navigate(['./dashboard']); 
      
    }
  
    else{
      this.presentAlert();
    }
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'login failed',
      subHeader: '',
      message: 'Email or assword does not work',
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
