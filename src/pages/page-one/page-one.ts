import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageTwoPage } from '../page-two/page-two';
/**
 * Generated class for the PageOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-one',
  templateUrl: 'page-one.html',
})
export class PageOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageOnePage');
  }

  goPageTwo(){
    this.navCtrl.push(PageTwoPage)
  }

}
