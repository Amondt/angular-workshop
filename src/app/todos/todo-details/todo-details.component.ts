import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-todo-details',
    templateUrl: './todo-details.component.html',
    styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

    id: number

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.id = Number(this.route.snapshot.params['id'])
    }

}
