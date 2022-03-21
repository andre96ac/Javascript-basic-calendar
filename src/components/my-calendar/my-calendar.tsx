import { Component, Host, h, Prop } from '@stencil/core';
import { MyTaskModel } from '../../utils/models/myTaskModel';

@Component({
  tag: 'my-calendar',
  styleUrl: 'my-calendar.css',
  shadow: true,
})
export class MyCalendar {

  
  // @Event() requestEditTask: EventEmitter<string>
  // @Event() requestAddTask: EventEmitter<Date>
  // @Event() onRequestChangeDates: EventEmitter<void>


  @Prop() inputTasks: MyTaskModel[] = [];

  render() {
    return (
      <Host>
        <days-scale  ></days-scale>
        {/* <my-grid onRequestAddTask={(data) => this.requestAddTask.emit(data.detail)} onRequestEditTask={(data) => this.requestEditTask.emit(data.detail)} listTasks={this.inputTasks}></my-grid> */}
        <my-grid listTasks={this.inputTasks}></my-grid>
      </Host>
    );
  }

}
