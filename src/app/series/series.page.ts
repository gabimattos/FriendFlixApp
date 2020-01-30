import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async alerta(){
    const alert = await this.alertController.create({
      header: 'Irado!',
      // subHeader: 'jbodnse',
      message: 'Gostaria de avaliar o filme?',
      buttons: ['Não' ,'Sim']
    });

    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Serie adicionada a sua lista.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
