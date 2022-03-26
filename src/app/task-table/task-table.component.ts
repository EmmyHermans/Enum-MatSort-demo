import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import tasks from './mock-data/tasks.json';
import { TaskStatusNumberEnum } from './model/task-status.model';
import { ITask } from './model/task.model';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
})
export class TaskTableComponent implements OnInit {
  public readonly displayedColumns = [
    'status',
    'name',
    'assignedUser',
    'statusNumberEnum',
    'convertedStatusToNumberEnum',
  ];

  public readonly TaskStatusNumberEnum = TaskStatusNumberEnum;

  public dataSource = new MatTableDataSource<ITask>();

  constructor() {}

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    // this needs to be a setter to ensure sort is added AFTER it is defined in the template, otherwise it won't work
    this.dataSource.sort = sort;
  }

  ngOnInit(): void {
    const convertedTasks = tasks.map((task) => ({
      convertedStatusToNumberEnum:
        TaskStatusNumberEnum[task.status as keyof typeof TaskStatusNumberEnum],
      ...task,
    }));

    this.dataSource.data = convertedTasks as ITask[];
  }
}
