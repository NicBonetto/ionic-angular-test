import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase';
import { HomePage } from '../home/home'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private fAuth: Facebook,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  login() {
    this.fAuth.login(['public_profile', 'email']).then(response => {
        const fCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        
        firebase.auth().signInWithCredential(fCredential)
          .then(success => {
            this.navCtrl.push(HomePage)            
          })
    }).catch(error => { console.log(error) });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
