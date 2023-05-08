import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  templateUrl: './lifecycledemo.component.html',
  styleUrls: ['./lifecycledemo.component.css']
})
export class LifecycledemoComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  constructor() { 
    console.log("Lifecycledemo constructor called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Lifecycledemo ngOnChanges called")
  }
  ngDoCheck(): void {
    console.log("Lifecycledemo ngDoCheck called")
  }
  ngAfterContentInit(): void {
    console.log("Lifecycledemo ngAfterContentInit called")
  }
  ngAfterContentChecked(): void {
    console.log("Lifecycledemo ngAfterContentChecked called")
  }
  ngAfterViewInit(): void {
    console.log("Lifecycledemo ngAfterViewInit called")
  }
  ngAfterViewChecked(): void {
    console.log("Lifecycledemo ngAfterViewChecked called")
  }
  ngOnDestroy(): void {
    console.log("Lifecycledemo ngOnDestroy called")
  }

  ngOnInit(): void {
    console.log("Lifecycledemo ngOnInit called")
  }

}
