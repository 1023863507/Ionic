import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Transaction} from '../../database';

/**
 * Generated class for the AddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html',
})
export class AddingPage {
  model : Transaction= new Transaction(null,"");
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
   
  }

  save(){
    this.model.save().then(resut=>{
      this.model=new Transaction(null,"");  //Inicializa losvalores
      this.navCtrl.pop(); //devuelve la pantalla anterior
    });
  }

}
