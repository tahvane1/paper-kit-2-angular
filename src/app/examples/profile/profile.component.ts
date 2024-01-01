import { Component, OnInit } from '@angular/core';
import { NgbNav, NgbNavItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports:[NgbNav,NgbNavItem]
})

export class ProfileComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

}
