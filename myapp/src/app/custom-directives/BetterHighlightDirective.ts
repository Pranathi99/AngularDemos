import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBetterHighlight]',
})

export class BetterHighlightDirective implements OnInit{

    @HostBinding('style.backgroundColor')
    backgroundColor:string='';

    constructor(private elementRef:ElementRef,private renderer:Renderer2){}

    ngOnInit():void{
        // this.renderer.setStyle(
        //     this.elementRef.nativeElement,
        //     'background-color',
        //     'lightblue'
        // )
    }

    @Input()
    defaultColor:string='';

    @Input()
    highlightColor:string='';

    @HostListener('mouseenter')
    mouseover(eventData:Event){
        // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','lightblue');
        // this.backgroundColor='orangered';
        this.backgroundColor=this.highlightColor;
        // this.elementRef.nativeElement.style.backgroundColor='pink';
        // console.log("over");
        // console.log(this.backgroundColor);
    }

    @HostListener('mouseleave')
    mouseleave(eventData:Event){
        // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
        // this.backgroundColor='transparent';
        this.backgroundColor=this.defaultColor;
        // this.elementRef.nativeElement.style.backgroundColor='yellow';
        // console.log("leave");
        // console.log(this.backgroundColor);
    }

}