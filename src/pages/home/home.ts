import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PageOnePage } from '../page-one/page-one';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goPageOne(){
    this.navCtrl.push(PageOnePage)
  }

}
