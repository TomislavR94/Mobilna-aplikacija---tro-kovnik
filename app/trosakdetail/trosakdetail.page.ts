import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trosak } from '../trosak';

@Component({
  selector: 'app-trosakdetail',
  templateUrl: './trosakdetail.page.html',
  styleUrls: ['./trosakdetail.page.scss'],
})
export class TrosakdetailPage implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loadFromStorage();
    this.trosak = this.troskovi.find(t => t.id == id);
  }
  troskovi: Trosak[] = [];
  trosak: Trosak;

  loadFromStorage() {
    const storage = localStorage.getItem('troskovnik');
    if(storage != null) {
      this.troskovi = JSON.parse(storage);
    }
  }

  save() {
    this.saveToStorage();
    this.router.navigate(['/']);
  }

  saveToStorage() {
    localStorage.setItem('troskovnik', JSON.stringify(this.troskovi));
  }

}
