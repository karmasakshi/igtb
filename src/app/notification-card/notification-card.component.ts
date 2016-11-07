import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-notification-card',
    templateUrl: './notification-card.component.html',
    styleUrls: ['./notification-card.component.css']
})
export class NotificationCardComponent implements OnInit {

    @Input() title = 'Notification';
    @Input() time = 'Now';
    @Input() statements = [];

    constructor() { }

    ngOnInit() { }

}