import { Component } from '@angular/core';
import { ActionSheetController ,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionSheetCtrl: ActionSheetController, public _alert : AlertController) {}

  async presentActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header : 'Add amount',
      mode:'ios',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    await  actionSheet.present();
  }
async presentAlert()
{
  const alert = await  this._alert.create({
    header:'warning',
    message:'PLease add amount and Description',
    buttons:['OK']
  });
  await alert.present();
}
}
