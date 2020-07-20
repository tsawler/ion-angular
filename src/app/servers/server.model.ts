import {HostServiceModel} from './host-service.model';

export interface ServerModel {
    id: string;
    serverName: string;
    imageUrl: string;
    services: HostServiceModel[];
}
