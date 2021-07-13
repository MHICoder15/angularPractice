import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() myinputMsg: string
    // @Output() myOutput: EventEmitter<string> = new EventEmitter()
    @Output() myOutput = new EventEmitter<string>()
    @Output() newItemEvent = new EventEmitter<string>()
    title = 'Angular App'
    outputMessage: string = 'I am child component.'

    constructor() { }

    ngOnInit() {
        console.log('Parent Msg:', this.myinputMsg)
    }

    // sendValues() {
    //     console.log('Function Called')
    //     this.myOutput.emit(this.outputMessage)
    // }

    // addNewItem(value: string) {
    //     // this method emits the value of newItemEvent
    //     this.myOutput.emit(value)
    // }

    addNewItem(value: string) {
        // this method emits the value of newItemEvent
        this.newItemEvent.emit(value)
    }

}
