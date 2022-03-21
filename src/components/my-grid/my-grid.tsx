import { Component, Host, h, Prop, Event, EventEmitter} from '@stencil/core';
import { DateUtils } from '../../utils/dateUtils';
import { MyTaskModel } from '../../utils/models/myTaskModel';

@Component({
  tag: 'my-grid',
  styleUrl: 'my-grid.css',
  shadow: true,
})
export class MyGrid {

  arDays: {date: Date, listTasks: MyTaskModel[]}[] = [];

  @Prop() startDate: Date = new Date();

  @Prop() listTasks: MyTaskModel[] = [];


  // @Event() requestEditTask: EventEmitter<string>
  // @Event() requestAddTask: EventEmitter<Date>

  componentWillLoad(){
    this.initDays();
  }

  initDays(){
    let daysNumber = 7;
    for(let i = 0; i < daysNumber; i++){

      // console.log('lista da cui filtrare')
      // console.log(this.listTasks)


      const finalDate = new Date(this.startDate.getTime() + i * 3600 * 24 * 1000);

      // console.log('data cercata nella lista')
      // console.log(DateUtils.normalizeDate(finalDate))



      const finalListTasks = this.listTasks.filter(elTask => (DateUtils.normalizeDate(elTask.startDate).getTime() == DateUtils.normalizeDate(finalDate).getTime()));
      
      // console.log('ecco la lista');
      // console.log(finalListTasks);

      const objDay = {
        date: DateUtils.normalizeDate(finalDate),

        listTasks: finalListTasks
      }
      this.arDays.push(objDay)


    }

    // console.log(this.arDays)
  }

  render() {
    return (
      <Host>
        <time-scale></time-scale>
        {/* {this.arDays.map(el => <my-day currentDate={el.date} listTasks={el.listTasks} onRequestAddTask={(data)=>this.requestAddTask.emit(data.detail)}  onRequestEditTask={(data) => this.requestEditTask.emit(data.detail)}></my-day>)} */}
        {this.arDays.map(el => <my-day currentDate={el.date} listTasks={el.listTasks} ></my-day>)}
      </Host>
    );
  }

}
