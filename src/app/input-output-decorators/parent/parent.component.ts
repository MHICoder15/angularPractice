import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    parentMsg: string = 'I am Parent Module'

    constructor() { }

    ngOnInit() {
    }

}
