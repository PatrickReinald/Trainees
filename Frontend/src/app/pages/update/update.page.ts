import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { StagesService } from "../../services/stages.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  model: Stage;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private service: StagesService) { 

      if (this.navParams.data.stage) {
        this.model = this.navParams.data.stage;
      } else {
        this.model = new Stage();
      }

    }

    save(){
      this.saveStage()
      .then(() => {
        this.toast.create({ message: 'Estágio salvo com sucesso.', position: 'bottom', duration: 3000 });
        this.navCtrl.pop();
      })
      .catch((err) => {
        this.toast.create({ message: 'Erro: ' + err.error, position: 'bottom', duration: 3000 });
      })

    }

    private saveStage(){
      if (this.model.id) {
        return this.service.update(this.model, this.model.id);
      } else {
        return this.service.regist(this.model);
      }
    }

  ngOnInit() {
  }

}

export class Stage {
  id: string;
  title: string;
  descrip: string;
  course: string;
};