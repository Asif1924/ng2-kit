import { Component, Pipe, PipeTransform, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'timer',
	template: `<span *ngIf='!timeout && remDay > 0'>Day: {{remDay}}</span>
	           <span *ngIf='!timeout && remDay == 0 && remHour > 0'>Hours: {{remHour}}</span>
	           <span *ngIf='!timeout && remDay == 0 && remHour == 0'>Min.:  {{remMin}} </span>
	           <span *ngIf='!timeout && remDay == 0 && remHour == 0'>Sec.: {{remSec}}</span>
	           <span *ngIf='timeout'>Opps ! Time Out !</span>`
})
export class Timer {
  remDay: any = 0;
  remHour: any = 0;
  remMin: any = 0;
  remSec: any = 0;

  private timeout: boolean = false;
  @Input ('min') min: number;
  @Input ('sec') sec: number;
  @Input ('hour') hour: number;
  @Input ('day') day: number;

  @Output() finish = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.counterStart();
  }

  counterStart() {
    if (this.day > 0) {
      this.remDay = this.day;
      this.dc();
    } else if (this.hour > 0) {
      this.remHour = this.hour;
      this.hc();
    } else if (this.min > 0) {
      this.remMin = this.min;
      this.mc();
    } else if (this.sec > 0) {
      this.remSec = this.sec;
      this.sc();
    } else {
      this.finishTimer();
    }
  }

  dc() {
    let d = setInterval(t => {
      this.remDay = this.day--;
      if (this.remDay === 0) {
        clearInterval(d);
        this.counterStart();
      }
    }, 1000 * 60 * 60 * 24);
  }

  hc() {
    let h = setInterval(t => {
      this.remHour = this.hour--;
      if (this.remHour === 0) {
        clearInterval(h);
        this.counterStart();
      }
    }, 1000 * 60 * 60);
  }

  mc() {
    let m = setInterval (t => {

      this.remMin = this.min--;
      if (this.remMin === 0) {
        clearInterval(m);
        this.counterStart();
      }
    }, 1000 * 60);
  }

  sc() {
    let s = setInterval(t => {
        this.remSec = this.sec--;
      if (this.remSec === 0) {
        clearInterval(s);
        this.counterStart();
      }
    }, 1000);
  }

  finishTimer() {
    this.timeout = true;
    this.finish.emit('emit');
  }
}