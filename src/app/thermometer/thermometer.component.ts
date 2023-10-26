import { Component, Input } from '@angular/core';

@Component({
  selector: 'thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['thermometer.component.scss'],
  standalone: true
})
export class ThermometerComponent {
  @Input() minTemperature = 0;
  @Input() maxTemperature = 0;
  @Input() curTemperature = 0;
}
