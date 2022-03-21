import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';
import { SLOT_HEIGTH } from '../../utils/constraits';
import { DateUtils } from '../../utils/dateUtils';
import { MyTaskModel } from '../../utils/models/myTaskModel';



@Component({
  tag: 'my-day',
  styleUrl: 'my-day.scss',
  shadow: true,
})
export class MyDay {


  @Prop() listTasks: MyTaskModel[] = [];

  @Prop() currentDate: Date;


  @Event() requestEditTask: EventEmitter<string>
  @Event() requestAddTask: EventEmitter<Date>


  halfHours(): number[]{
    const hours = [];
    for(let i = 0; i<48; i++){
      hours.push(i);
    }
    return hours;
  }

  calcDateTime(currentDate: Date, soltNumber: number): Date{
    const finalDate = DateUtils.normalizeDate(currentDate);

    const hours = Math.trunc(soltNumber / 2);
    const minutes = (soltNumber % 2) == 0? 0 : 30;

    return new Date(finalDate.getFullYear(), finalDate.getMonth(), finalDate.getDate(), hours, minutes)
  }



  calcTopOffset(startTime: Date): number{
    

    let totalMinutes = startTime.getMinutes() + (startTime.getHours()*60);
    let totalHalfHours = totalMinutes/30;
    let pixelOffset = totalHalfHours * SLOT_HEIGTH;

    return pixelOffset;
  } 


  emitEventAdd(slotNumber: number){
    const dateToEmit = this.calcDateTime(this.currentDate, slotNumber);
    this.requestAddTask.emit(dateToEmit);
  }

  render() {
    return (
      <div class="main-colum">
        {
          this.halfHours().map(el => <div class="slot" onClick={() => this.emitEventAdd(el)}></div>)
        }
        {
          this.listTasks.map(elTask => 
            <my-task onClickedTitle={(data) => this.requestEditTask.emit(data.detail)} onClickedBody={(data) => this.requestEditTask.emit(data.detail)} inputTask={elTask} top={this.calcTopOffset(elTask.startDate)}></my-task>
          )
        }
      </div>
    );
  }

}
