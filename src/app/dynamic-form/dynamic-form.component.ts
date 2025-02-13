import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicFormService } from '../dynamic-form.service';
import { ServerFormConfig, FormFieldConfig } from '../server-ui.model';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  formConfig: ServerFormConfig | null = null;
  dynamicForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: DynamicFormService
  ) {}

  ngOnInit() {
    this.formService.getFormConfig().subscribe(config => {
      this.formConfig = config;
      this.createForm();
    });
  }

  createForm() {
    if (!this.formConfig) return;

    const formControls: { [key: string]: any } = {};

    this.formConfig.fields.forEach(field => {
      const validators = this.getValidators(field);
      formControls[field.name] = ['', validators];
    });

    this.dynamicForm = this.formBuilder.group(formControls);
  }

  getValidators(field: FormFieldConfig) {
    const validators: any[] = [];

    if (field.validators?.required) {
      validators.push(Validators.required);
    }
    if (field.validators?.minLength) {
      validators.push(Validators.minLength(field.validators.minLength));
    }
    if (field.validators?.maxLength) {
      validators.push(Validators.maxLength(field.validators.maxLength));
    }
    if (field.type === 'number') {
      if (field.validators?.min !== undefined) {
        validators.push(Validators.min(field.validators.min));
      }
      if (field.validators?.max !== undefined) {
        validators.push(Validators.max(field.validators.max));
      }
    }

    return validators;
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log(this.dynamicForm.value);
    }
  }
}
