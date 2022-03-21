import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'days-scale',
  styleUrl: 'days-scale.scss',
  shadow: true,
})
export class DaysScale {


  
  @Event() requestChangeDates: EventEmitter<void>


  arDays: string[] = [
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica'
  ]
  componentWillRender(){
  }



  render() {
    return (
      <Host >
        {/* <div class="space-empty"></div> */}
        {this.arDays.map((el, counter) => <div class={(counter == 0)? 'slot first': 'slot'} onClick={() => this.requestChangeDates.emit()}>{el}</div> )}
      </Host>
    );
  }

}
