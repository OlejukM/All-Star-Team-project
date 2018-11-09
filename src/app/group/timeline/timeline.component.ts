import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/task'
import { LessonService } from '../../shared/services/lesson.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;
  currentDate: Date = new Date();
  fiveDaysInMillisec: number = 5 * 24 * 60 * 60 * 1000;

  onSelect(currentTask: Task): void {
    this.selectedTask = currentTask;
  }

  isOldTask(task: Task): boolean {
    let taskDate: Date = new Date(task.date);

    if (((this.currentDate.getTime() - taskDate.getTime()) > this.fiveDaysInMillisec)
       && task != this.selectedTask) { //so that we don't try to paint tasks in blue and yellow simultaneously
      return true;
    }
  }

  constructor(private lessonService: LessonService) {


  }

  setDefaultActiveTask(): void {
    const todayTime = new Date(this.currentDate.toLocaleDateString()).getTime();
    let activeTask: Task = this.tasks[0];

    for (let task of this.tasks) {
      let taskTime = new Date(task.date).getTime();

      if (todayTime === taskTime) {
        this.selectedTask = task;
        break;

      } else if (todayTime > taskTime) {
        activeTask = task;

      } else {
        this.selectedTask = activeTask;
        break;
      }
    }
  }

  ngOnInit() {
    this.tasks = this.lessonService.getLessons();
    this.setDefaultActiveTask();
  }

}
