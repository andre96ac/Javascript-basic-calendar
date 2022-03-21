import { Component,  h, Event, Prop, Element, EventEmitter, State } from '@stencil/core';
import { SLOT_HEIGTH } from '../../utils/constraits';
import { DateUtils } from '../../utils/dateUtils';
import { MyTaskModel } from '../../utils/models/myTaskModel';

@Component({
  tag: 'my-task',
  styleUrl: 'my-task.scss',
  shadow: true,
})
export class MyTask {



  @Prop() inputTask: MyTaskModel 

  @Prop() top: number;

  //reference all'elemnto html host
  @Element() htmlRef: HTMLMyTaskElement;

  @Event() clickedTitle: EventEmitter<string>
  @Event() clickedBody: EventEmitter<string>


  getLabelTime(){
    return `${DateUtils.formatTimeFromDate(this.inputTask.startDate)} - ${DateUtils.formatTimeFromDate(this.inputTask.endDate)}`;
  }

  componentDidLoad(){
    this.setBgColor();
    this.setHeight();
    this.setTop();
  }


  setBgColor(){
    
    this.htmlRef.style.setProperty('--background-color', this.inputTask.colorCode)
  }

  setHeight(){
    let minutes = (this.inputTask.endDate.getTime() - this.inputTask.startDate.getTime()) / 1000 / 60;
    let halfHours = minutes /30;
    const height = halfHours * SLOT_HEIGTH;
    this.htmlRef.style.setProperty('--height', `${height}px`)
  }

  setTop(){
    this.htmlRef.style.setProperty('top', `${this.top}px`) ;
  }



  render() {
    return (
      <div class={'card'} id='main' onClick={() => this.clickedBody.emit(this.inputTask.id)}>
        <div class="title" >
          <h2>{this.inputTask.name}</h2>
          <h4>{this.getLabelTime()}</h4>
        </div>
        <div class="body">
          <p>
            {this.inputTask.description}
          </p>
        </div>
      </div>
    );
  }

}
