import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    title = 'Angular App'
    myInputMessage: string = 'I am the parent comppnent'

    constructor() { }

    ngOnInit() {
    }

    GetChildData(data) {
        console.log('Child Msg:', data)
    }

}
