import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTableColoration]'
})
export class TableColorationDirective {

  @Input("appTableColoration")
  set indexOfElement(value: number) {
    if (value % 2 === 0) {
      this._renderer.setStyle(this._el.nativeElement, "color", "lightGray");
    } else {
      this._renderer.setStyle(this._el.nativeElement, "color", "orange");
    }
  }

  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  }

}
