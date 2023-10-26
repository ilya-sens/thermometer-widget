import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  minTemperature = 0;
  maxTemperature = 100;
  curTemperature = 22;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      minTemperature: [this.minTemperature, Validators.required],
      maxTemperature: [this.maxTemperature, Validators.required],
      curTemperature: [this.curTemperature, Validators.required],
    });
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        distinctUntilChanged()
      ).subscribe(it => {
        if (it.minTemperature !== undefined) {
          this.minTemperature = it.minTemperature;
        }
        if (it.maxTemperature !== undefined) {
          this.maxTemperature = it.maxTemperature;
        }
        if (it.curTemperature !== undefined) {
          this.curTemperature = it.curTemperature;
        }
      }
    );
  }
}
