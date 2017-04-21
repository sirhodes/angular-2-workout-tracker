import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  workouts: Array<{workout: string}>;
  selectedWorkouts: Array<{workout: string, selected: boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.selectedWorkouts = [];

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    this.workouts = [
      { workout: 'Flat Bench Press'},
      { workout: 'Incline Bench Press'},
      { workout: 'Dumbell Incline Bench Press'},
      { workout: 'Barbell Curl'},
      { workout: 'Deadlift'},
      { workout: 'Shoulder Press'},
      { workout: 'Barbell Squat'},
      { workout: 'Leg Press'},
      { workout: 'Calf Raises'},
      { workout: 'Lat Pull-Down'},
      { workout: 'Face Pull'}
    ];
  }
  toggleItemInWorkoutList(workoutItem) {
    this.selectedWorkouts.push(workoutItem);
    workoutItem.selected = true;
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
