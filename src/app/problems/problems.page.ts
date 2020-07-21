import {Component, OnInit} from '@angular/core';
import {ProblemServiceService} from './problem-service.service';
import {ProblemModel} from './problem.model';

@Component({
    selector: 'app-problems',
    templateUrl: './problems.page.html',
    styleUrls: ['./problems.page.scss'],
})
export class ProblemsPage implements OnInit {

    problems: ProblemModel[];

    constructor(private problemService: ProblemServiceService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.problems = this.problemService.getAllProblems();
    }
}
