import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TaskTableComponent } from './task-table/task-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, TaskTableComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatSortModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
