import {Injectable} from '@angular/core';
import {ProblemModel} from './problem.model';

@Injectable({
    providedIn: 'root'
})
export class ProblemServiceService {

    private problems: ProblemModel[] = [
        {
            id: '1',
            serviceName: 'https',
            hostName: 'GoBlender',
            problemStart: '2020-07-21 09:00:01 AM',
        },
    ];

    constructor() {
    }

    getAllProblems() {
        return [...this.problems];
    }
}
