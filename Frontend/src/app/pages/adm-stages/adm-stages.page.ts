import { Component, OnInit , ViewChild} from '@angular/core';
import { NavController, NavParams, ToastController, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular';
import { StagesService } from "../../services/stages.service";

@Component({
  selector: 'app-adm-stages',
  templateUrl: './adm-stages.page.html',
  styleUrls: ['./adm-stages.page.scss'],
})
export class AdmStagesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {read: IonInfiniteScroll, static: false}) public infiniteScroll: IonInfiniteScroll;

  stages: any[];
  page: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private service: StagesService) { }

  ionViewDidEnter() {
    this.stages = [];
    this.page = 1;
    this.infiniteScroll.ionInfinite;
    this.list(this.page);
  }

  list(page: number) {
    this.service.list()
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var stage = result[i];
          this.stages.push(stage);
        }
        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.stages.length == result.total) {
            this.infiniteScroll.disabled;
          }
        }
      })
      .catch((err: any) => {
        this.toast.create({ message: 'Erro ao listar. Erro: ' + err.message, position: 'bottom', duration: 3000 });
      });
  }

  openStage(id: string) {
    this.service.find(id)
      .then((result: any) => {
        this.navCtrl.navigateForward('DetailsPage', {queryParams:{stage: result}});
      })
      .catch((err: any) => {
        this.toast.create({ message: 'Erro: ' + err.error, position: 'bottom', duration: 3000 });
      });

  }

  openRegist() {
    this.navCtrl.navigateForward('UpdatePage');
  }

  openUpdate(id: string) {
    this.service.find(id)
      .then((result: any) => {
        this.navCtrl.navigateForward('UpdatePage', {queryParams:{stage: result}});
      })
      .catch((err: any) => {
        this.toast.create({ message: 'Erro: ' + err.error, position: 'bottom', duration: 3000 });
      });
  }

  delete(stage: any) {
    this.service.delete(stage.id)
      .then((result: any) => {
        let index = this.stages.indexOf(stage);
        this.stages.splice(index, 1);

        this.toast.create({ message: result.message, position: 'bottom', duration: 3000 });
      })
      .catch((err: any) => {
        this.toast.create({ message: 'Erro: ' + err.error, position: 'bottom', duration: 3000 });
      });
  }
  
  ngOnInit() {
  }

}
