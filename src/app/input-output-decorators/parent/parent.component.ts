import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    title = 'Angular App'
    myInputMessage: string = 'I am the parent comppnent'

    items = ['item1', 'item2', 'item3']

    constructor() { }

    ngOnInit() {
    }

    GetChildData(e: any) {
        console.log('Function Called')
        console.log('data', e.target.value)
        console.log('Child Msg:', e)
    }

    addItem(newItem: string) {
        this.items.push(newItem)
    }

}
