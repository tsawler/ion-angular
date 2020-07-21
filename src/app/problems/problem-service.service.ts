import {Injectable} from '@angular/core';
import {ProblemModel} from './problem.model';

@Injectable({
    providedIn: 'root'
})
export class ProblemServiceService {

    private problems: ProblemModel[] = [
        {
            id: '1',
            type: 'warning',
            serviceName: 'https',
            hostName: 'GoBlender',
            problemStart: '2020-07-21 09:00:01 AM',
        },
        {
            id: '2',
            type: 'problem',
            serviceName: 'postgres',
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
