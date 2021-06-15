import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() myinputMsg: string
    @Output() myOutput: EventEmitter<string> = new EventEmitter();
    outputMessage: string = 'I am child component.'

    constructor() { }

    ngOnInit() {
        console.log('Parent Msg:', this.myinputMsg)
    }

    sendValues() {
        this.myOutput.emit(this.outputMessage)
    }

}
