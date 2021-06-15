import { UIHelpers } from './../helpers/ui-helpers'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import iro from '@jaames/iro'

@Component({
    selector: 'app-color-wheel-iro',
    templateUrl: './color-wheel-iro.component.html',
    styleUrls: ['./color-wheel-iro.component.css']
})
export class ColorWheelIroComponent implements OnInit {
    dataForm: FormGroup
    colorPicker: any

    constructor(
        private fb: FormBuilder,
        public ui: UIHelpers
    ) {
        this.dataForm = this.fb.group({
            color_code: new FormControl(null, [Validators.required])
        })
    }

    ngOnInit() {
        this.dataForm.get('color_code').valueChanges.subscribe((value) => {
            if (value !== null && value.length === 7) {
                // this.colorPicker.color.hexString = value
                this.colorPicker = value
                // this.colorPicker = value
            }
        })

        this.colorPicker = iro.ColorPicker('#picker', {
            width: 200,
            color: '#66f7ff',
        })
        this.colorPicker.on('color:change', (color) => {
            this.dataForm.get('color_code').setValue(color.hexString)
            console.log('Color', color.hexString)
        })

    }

    get g() {
        return this.dataForm.controls
    }

    save(data: any, f: any) {

    }

}
