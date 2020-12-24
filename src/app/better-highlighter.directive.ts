import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor( private renderer: Renderer2, private eleRef: ElementRef) { }

  ngOnInit(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    }
    @HostListener('mouseover') mousenter( eventData: Event) {
      // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
      this.backgroundColor= "blue";
    }
    @HostListener('mouseleave') mouseleave( eventData: Event) {
      // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'green')
      this.backgroundColor='transparent';
  }
}
