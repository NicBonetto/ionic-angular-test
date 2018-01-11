import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/users'
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    const current = firebase.auth().currentUser;
    
    this.user.name = current.displayName;
    this.user.image = current.photoURL;
  }
}
