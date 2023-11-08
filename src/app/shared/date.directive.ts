import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  // Zmień "private" na "public"
  @Input()
  public date: Date | undefined;
  private paragraph;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph=this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    if (this.date) {
      this.paragraph.innerHTML = this.date.toLocaleDateString();
      this.renderer.appendChild(this.el.nativeElement, this.paragraph);
    }
  }
  /*mouseenter(eventDate:Event){
    this.paragraph.innerHTML=this.date.toLocaleDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }*/

  @HostListener('mouseleave')
  mouseleave(eventDate:Event){
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}