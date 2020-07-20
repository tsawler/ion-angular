import {Component, OnInit} from '@angular/core';
import {ServerModel} from './server.model';
import {ServerService} from './server.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.page.html',
    styleUrls: ['./servers.page.scss'],
})
export class ServersPage implements OnInit {

    servers: ServerModel[];

    constructor(private hostService: ServerService) {
    }

    ngOnInit() {
        this.servers = this.hostService.getAllServers();
    }
}
