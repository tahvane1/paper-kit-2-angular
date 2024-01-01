import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  standalone: true,
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss'],
  imports:[NouisliderComponent,FormsModule,NgClass]
})
export class BasicelementsComponent  {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
  
}
