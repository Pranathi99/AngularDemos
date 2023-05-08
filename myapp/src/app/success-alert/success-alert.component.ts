import { Component } from "@angular/core";

@Component({
    selector:'success-alert',
    template:'<p class=" container w-50">This is success!</p><button class="btn btn-success">Success</button>',
    styles:[
        `
        p{
            padding:10px;
            background-color:lightblue;
            border:2px solid red;
        }
        `,
    ]
})

export class SuccessAlertComponent {

}