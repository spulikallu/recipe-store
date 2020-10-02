import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(
        this.elRef.nativeElement.querySelector('.dropdown-menu'),
        'show'
      );
    } else {
      this.renderer.removeClass(
        this.elRef.nativeElement.querySelector('.dropdown-menu'),
        'show'
      );
    }
  }
}
