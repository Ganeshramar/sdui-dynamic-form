// src/app/server-ui.model.ts
export interface FormFieldConfig {
    type: 'text' | 'number' | 'select' | 'checkbox';
    name: string;
    label: string;
    validators?: {
      required?: boolean;
      minLength?: number;
      maxLength?: number;
      min?: number;
      max?: number;
    };
    options?: { value: string; label: string }[];
  }
  
  export interface ServerFormConfig {
    title: string;
    submitLabel: string;
    fields: FormFieldConfig[];
  }
  