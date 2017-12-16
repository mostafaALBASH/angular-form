import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from './template-driviven-form.component';
@Component({
    selector: 'my-app',
    template: `
      <my-template-driven></my-template-driven>
    `,
  directives: [TemplateDrivenFormComponent]

})
export class AppComponent {

}
