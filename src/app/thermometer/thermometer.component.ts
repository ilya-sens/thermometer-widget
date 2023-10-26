import { Component, Input } from '@angular/core';

@Component({
  selector: 'thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['thermometer.component.scss'],
  standalone: true
})
export class ThermometerComponent {
  @Input()
  get minTemperature() {
    return this._minTemperature;
  }
  set minTemperature(minTemperature: number) {
    this._minTemperature = minTemperature;
    this.calculateArrowHeadRotation();
  }
  private _minTemperature = 0;

  @Input()
  get maxTemperature() {
    return this._maxTemperature;
  }
  set maxTemperature(maxTemperature: number) {
    this._maxTemperature = maxTemperature;
    this.calculateArrowHeadRotation();
  }
  private _maxTemperature = 0;

  @Input()
  get curTemperature() {
    return this._curTemperature;
  }
  set curTemperature(curTemperature: number) {
    this._curTemperature = curTemperature;
    this.calculateArrowHeadRotation();
  }
  private _curTemperature = 0;

  private calculateArrowHeadRotation() {
    this.arrowHeadRotation = 270 * this.curTemperature / (this.maxTemperature - this.minTemperature);
  }

  arrowHeadRotation = 0;


}
