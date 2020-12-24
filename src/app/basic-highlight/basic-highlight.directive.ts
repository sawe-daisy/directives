import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  

  constructor(private elemRef: ElementRef) {
   }
   ngOnInit(){
     this.elemRef.nativeElement.style.backgroundColor= "green"
   }
}
