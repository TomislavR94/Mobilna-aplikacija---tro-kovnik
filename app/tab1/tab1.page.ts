import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Trosak } from '../trosak';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertCtrl: AlertController,
  private router: Router) {

  }

  ionViewDidEnter() {
    this.loadFromStorage();
  }

  troskovi: Trosak[] = [];
  nextId = 1;

  async addTrosak() {
    const alert = await this.alertCtrl.create(
    {
      header: 'Dodaj trošak',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Naziv troška'
        },
        {
          name: 'vrstaTroska',
          type: 'text',
          placeholder: 'Vrsta troška'
        },

        {
          name: 'iznosTroska',
          type: 'text',
          placeholder: 'Iznos troška'
        },

        {
          name: 'datumNastanka',
          type: 'date',
          placeholder: 'Datum nastanka'
        }
      ],
      buttons: [
        {
          text: 'Odustani',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Spremi',
          handler: (data) => {
            this.saveTrosak(data);
          }
        }
      ]
    }
    );
    await alert.present();
  }

  saveTrosak(data) {
    const trosak = new Trosak();
    trosak.id = this.nextId++;
    trosak.title = data.title;
    trosak.vrstaTroska= data.vrstaTroska;
    trosak.iznosTroska = data.iznosTroska; 
    trosak.datumNastanka= data.datumNastanka;
    this.troskovi.push(trosak);
    this.saveToStorage();
  }

  loadFromStorage() {
    const storage = localStorage.getItem('troskovnik');
    if(storage != null) {
      this.troskovi = JSON.parse(storage);
    }
  }

  markCompleted(t: Trosak) {
    t.completed = true;
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('troskovnik', JSON.stringify(this.troskovi));
  }

  trosakClass(t: Trosak) {
    if(t.completed) {
      return 'completed';
    }
    return '';
  }

  editTrosak(t: Trosak) {
    this.router.navigate(['trosakdetail/' + t.id]);
  }

  deleteTrosak(t: Trosak) {
    const index = this.troskovi.findIndex(x => t.id == x.id);
    this.troskovi.splice(index,1);
    this.saveToStorage();
  }
}