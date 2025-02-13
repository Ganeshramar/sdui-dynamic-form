import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { DynamicFormComponent } from './app/dynamic-form/dynamic-form.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// bootstrapApplication(DynamicFormComponent);