import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) { }
 
  openRegist() {
    this.navCtrl.navigateForward('ResgitPage');
  }
 
  openAuthenticate() {
    this.navCtrl.navigateForward('AuthenticatePage');
  }
 
  openStages() {
    this.navCtrl.navigateForward('StagesPage');
  }

}
