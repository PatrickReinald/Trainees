import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { StagesService } from "../../services/stages.service";

@Component({
  selector: 'app-page-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})

export class Stage {
  title: string;
  descrip: string;
  course: string;
};

export class RegistPage implements OnInit {
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
        this.toast.create({ message: 'Deu ruim: ' + err.error, position: 'bottom', duration: 3000 });
      })
    }
    
  ngOnInit() {
  }

};



