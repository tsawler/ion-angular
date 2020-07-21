import {Component} from '@angular/core';
import {ServerModel} from './server.model';
import {ServerService} from './server.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.page.html',
    styleUrls: ['./servers.page.scss'],
})
export class ServersPage  {

    servers: ServerModel[];

    constructor(private hostService: ServerService) {
    }

    ionViewWillEnter() {
        this.servers = this.hostService.getAllServers();
    }

}
