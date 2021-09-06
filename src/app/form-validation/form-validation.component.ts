import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import Validation from '../utils/validation'

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
    form: FormGroup
    submitted = false;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.form = this.fb.group(
            {
                fullname: ['', Validators.required],
                username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
                confirmPassword: ['', Validators.required],
                acceptTerms: [false, Validators.requiredTrue]
            },
            {
                validators: [Validation.match('password', 'confirmPassword')]
            }
        )
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls
    }

    onSubmit(): void {
        this.submitted = true

        if (this.form.invalid) {
            return
        }

        console.log(JSON.stringify(this.form.value, null, 2))
    }

    onReset(): void {
        this.submitted = false
        this.form.reset()
    }

}
