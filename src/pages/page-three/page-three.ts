import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageOnePage } from '../page-one/page-one';
/**
 * Generated class for the PageThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-three',
  templateUrl: 'page-three.html',
})
export class PageThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageThreePage');
  }

  backPageOne(){
    this.navCtrl.popTo(PageOnePage);
  }

  backPageOneWithPageName(){
    this.navCtrl.popTo("PageOnePage");
  }

  backPageOneWithNumber(){
    this.navCtrl.popTo(<any>1);
  }
}
