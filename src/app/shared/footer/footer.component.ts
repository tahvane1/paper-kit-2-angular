import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports:[DatePipe]
})
export class FooterComponent {
    test : Date = new Date();

}
