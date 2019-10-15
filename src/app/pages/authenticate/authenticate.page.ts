import { Component, OnInit } from '@angular/core';
import { StagesService } from "../../services/stages.service";
import { NavController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {
  model: Admin;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private service: StagesService) {
    this.model = new Admin();
    this.model.user = 'admin';
    this.model.password = 'admin';
  }

  authenticate() {
    this.service.authenticate(this.model.user, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'bottom', duration: 3000 });
 
      })
      .catch((err: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + err.message, position: 'bottom', duration: 3000 });
      });
  }

  ngOnInit() {
  }

}
 
export class Admin {
  user: string;
  password: string;
}