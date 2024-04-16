import { NgModule } from '@angular/core';
import { CounterComponent } from './componenst/counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
