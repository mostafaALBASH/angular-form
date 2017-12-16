System.register(["angular2/core", 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var TemplateDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.user = { mail: '', password: '' };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    console.log(this.myForm);
                };
                TemplateDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.compose([
                                common_1.Validators.maxLength(15),
                                common_1.Validators.required
                            ])],
                        'confirm-password': ['', common_1.Validators.required],
                    });
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n    <h2>Sign Up Form \u064A\u0627\u0628\u0646 \u0627\u0644\u0634\u0631\u0645\u0648\u0637\u0629</h2>\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n      <label for=\"mail\">Mail</label>\n      <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"mail\"/>\n      <br>\n      <label for=\"password\">Password</label>\n      <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\"/>\n      <br>\n      <label for=\"confirm-password\">Password</label>\n      <input [ngFormControl]=\"myForm.controls['confirm-password']\" type=\"text\" id=\"confirm-password\"/>\n      <br>\n      <button type=\"submit\">submit</button>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUlFLHFDQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBRjdDLFNBQUksR0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUVxQixDQUFDO2dCQUNqRCw4Q0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCw4Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ3BDLE9BQU8sRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDaEMsVUFBVSxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNoQyxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0NBQ3hCLG1CQUFVLENBQUMsUUFBUTs2QkFDcEIsQ0FBQyxDQUFDO3dCQUNILGtCQUFrQixFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUU1QyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFwQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUMsb0JBQW9CO3dCQUM3QixRQUFRLEVBQUMsNnJCQWNSO3FCQUNGLENBQUM7OytDQUFBO2dCQW9CRixrQ0FBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQscUVBbUJDLENBQUEiLCJmaWxlIjoidGVtcGxhdGUtZHJpdml2ZW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J215LXRlbXBsYXRlLWRyaXZlbicsXG4gIHRlbXBsYXRlOmBcbiAgICA8aDI+U2lnbiBVcCBGb3JtINmK2KfYqNmGINin2YTYtNix2YXZiNi32Kk8L2gyPlxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgPGxhYmVsIGZvcj1cIm1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2VtYWlsJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiLz5cbiAgICAgIDxicj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwicGFzc3dvcmRcIi8+XG4gICAgICA8YnI+XG4gICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2NvbmZpcm0tcGFzc3dvcmQnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb25maXJtLXBhc3N3b3JkXCIvPlxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRHJpdmVuRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgbXlGb3JtOkNvbnRyb2xHcm91cDtcbiAgdXNlcj17bWFpbDonJyxwYXNzd29yZDonJ307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuICBvblN1Ym1pdChmb3JtKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybSk7XG4gIH1cbiAgbmdPbkluaXQoKTphbnl7XG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICdwYXNzd29yZCc6WycnLFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDE1KSxcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxuICAgICAgXSldLFxuICAgICAgJ2NvbmZpcm0tcGFzc3dvcmQnOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcblxuICAgIH0pO1xuICB9XG59XG4iXX0=
