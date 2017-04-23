import { Workout } from '../models/workout.model'
export class WorkoutService {
  private workouts: Workout[] = [];

  getWorkouts() {
    return this.workouts;
  }
  setWorkouts(newWorkoutArray: Workout[]) {
    this.workouts = newWorkoutArray;
  }
}
