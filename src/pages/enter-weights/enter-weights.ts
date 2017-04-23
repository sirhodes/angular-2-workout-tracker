import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'enter-weights',
  templateUrl: './enter-weights.html'
})
export class EnterWeightsPage {
  workouts: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.workouts = this.navParams.get('tempWorkoutsStored');
  }
}
