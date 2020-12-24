import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{
  @Input() defaultColor: string = 'yellow';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor( private renderer: Renderer2, private eleRef: ElementRef) { }

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
    }
    @HostListener('mouseover') mouse( eventData: Event) {
      // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
      this.backgroundColor=this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave( eventData: Event) {
      // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'green')
      this.backgroundColor= this.defaultColor;
  }
}
