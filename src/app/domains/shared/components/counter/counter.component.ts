import {
  Component,
  input,
  OnChanges,
  OnInit,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  duration = input.required<number>();
  message = input.required<string>();
  counter = signal(0)
  counterRef: number | undefined = undefined

  constructor() {
    // NO ASYNC
    console.log('Constructor');
    console.log('-'.repeat(25));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before and during render
    console.log('ngOnChanges');
    console.log('Changes: ', changes);
    console.log(changes['duration']);
    console.log(changes['message']);
    console.log('-'.repeat(25));
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit(): void {
    // after Render, One time, Async functions
    console.log('ngOnInit');
    console.log('Duration => ', this.duration());
    console.log('Message => ', this.message());
    console.log('-'.repeat(25));
    this.counterRef = window.setInterval(() => {
      console.log('runInterval')
      this.counter.update(prevState => prevState + 1)
    }, 1000)
  }

  ngAfterViewInit(): void {
    // after render, childs already render
    console.log('ngAfterViewInit');
    console.log('Duration => ', this.duration());
    console.log('Message => ', this.message());
    console.log('-'.repeat(25));
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    window.clearInterval(this.counterRef)
  }

  doSomething() {
    console.log('Change duration');
  }
}
