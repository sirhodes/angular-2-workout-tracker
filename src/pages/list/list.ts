import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../common/workout.service';
import { Workout } from '../../models/workout.model';
import { EnterWeightsPage } from '../enter-weights/enter-weights';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [WorkoutService]
})
export class ListPage {
  workouts: Array<Workout>;
  selectedWorkouts: Array<Workout>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutService: WorkoutService) {
    this.selectedWorkouts = [];

    this.workouts = [
    {
      workout: 'Flat Bench Press',
      selected: false
    },
    {
      workout: 'Incline Bench Press',
      selected: false
    },
    {
      workout: 'Dumbell Incline Bench Press',
      selected: false
    },
    {
      workout: 'Barbell Curl',
      selected: false
    },
    {
      workout: 'Deadlift',
      selected: false
    },
    {
      workout: 'Shoulder Press',
      selected: false
    },
    {
      workout: 'Barbell Squat',
      selected: false
    },
    {
      workout: 'Leg Press',
      selected: false
    },
    {
      workout: 'Calf Raises',
      selected: false
    },
    {
      workout: 'Lat Pull-Down',
      selected: false
    },
    {
      workout: 'Face Pull',
      selected: false
    }
    ];
  }
  addItemInWorkoutList(workoutItem) {
    this.selectedWorkouts.push(workoutItem);
    workoutItem.selected = true;
  }
  removeItemInWorkoutList(workoutItem, $index) {
    this.selectedWorkouts.splice($index, 1);
    workoutItem.selected = false;
  }
  storeSelectedWorkoutsInFactory(workoutArray: Workout[]) {
    this.navCtrl.push(EnterWeightsPage, {tempWorkoutsStored: workoutArray});
  }
}
