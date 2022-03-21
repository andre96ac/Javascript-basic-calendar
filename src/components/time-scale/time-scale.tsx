import { Component, Host, h } from '@stencil/core';
import { DateUtils } from '../../utils/dateUtils';

@Component({
  tag: 'time-scale',
  styleUrl: 'time-scale.scss',
  shadow: true,
})
export class TimeScale {


  slotsArray: {hour: number, minutes: number}[] = [];

  componentWillLoad(){
    this.initSlots();
  }

  initSlots(){
    const total = 48;
    for(let i = 0; i<total; i++){
      const myHourVal = Math.trunc(i/2);
      const myMinutesVal = i%2 == 0? 0: 30;

      this.slotsArray.push({hour: myHourVal, minutes: myMinutesVal})

    }
    // console.log('final time schedule:');
    // console.log(this.slotsArray);
  }

  render() {
    return (
      this.slotsArray.map(el => <div class="slot">
        <p>{DateUtils.formatTimeFromNumbers(el.hour, el.minutes)}</p>
      </div>)
    );
  }

}
