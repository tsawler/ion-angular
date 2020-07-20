import {Injectable} from '@angular/core';
import {ServerModel} from './server.model';

@Injectable({
    providedIn: 'root'
})
export class ServerService {

    private servers: ServerModel[] = [
        {
            id: '1',
            serverName: 'GoBlender',
            imageUrl: 'https://ih0.redbubble.net/image.280186359.8051/pp,550x550.u1.jpg',
            services: [
                {
                    id: '1',
                    serviceName: 'ping',
                    status: 'healthy',
                },
                {
                    id: '2',
                    serviceName: 'https',
                    status: 'healthy',
                }
            ]
        },
        {
            id: '2',
            serverName: 'Wheels',
            imageUrl: 'https://ih0.redbubble.net/image.280186359.8051/pp,550x550.u1.jpg',
            services: [
                {
                    id: '3',
                    serviceName: 'ping',
                    status: 'healthy',
                },
                {
                    id: '4',
                    serviceName: 'https',
                    status: 'healthy',
                }
            ]
        },
    ];

    constructor() {
    }

    getAllServers() {
        return [...this.servers];
    }

    getServer(serverID: string) {
        return {
            ...this.servers.find(server => {
                return server.id === serverID;
            })
        };
    }
}
