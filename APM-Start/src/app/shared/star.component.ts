import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    starWidth: number;

    ngOnChanges() {
        this.starWidth = this.rating * 86/5;   
    }

    onClick() {
        this.notify.emit(`The Rating ${this.rating} was clicked!`);
    }
}