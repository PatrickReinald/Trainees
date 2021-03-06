import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { StagesService } from "../../services/stages.service";

@Component({
  selector: 'app-regist',
  templateUrl: 'regist.page.html',
  styleUrls: ['regist.page.scss'],
})

export class RegistPage {
  model: Stage;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private service: StagesService) {

      this.model = new Stage();
      this.model.title = 'meuPinto';
      this.model.descrip = 'seuPinto';
      this.model.course = 'nossoPinto';

    }

    resgist(){
      this.service.regist(this.model).then((result: any) => {
        this.toast.create({ message: 'Deu bom!', position: 'bottom', duration: 3000 });
 
      })
      .catch((err: any) => {
        this.toast.create({ message: 'Deu ruim: ' + err.message, position: 'bottom', duration: 3000 });
      })
    }

};

export class Stage {
  title: string;
  descrip: string;
  course: string;
};



