import {ProblemServiceService} from './problem-service.service';

export interface ProblemModel {
    id: string;
    serviceName: string;
    hostName: string;
    problemStart: string;
}
