import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
    @ViewChild('wrapper', { static: false })
    wrapper: ElementRef

    constructor() { }

    ngOnInit() {
        console.log('wrapper', this.wrapper)

    }

}
