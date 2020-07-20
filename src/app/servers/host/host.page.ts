import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServerService} from '../server.service';
import {ServerModel} from '../server.model';

@Component({
    selector: 'app-host',
    templateUrl: './host.page.html',
    styleUrls: ['./host.page.scss'],
})
export class HostPage implements OnInit {

    loadedServer: ServerModel;

    constructor(private activatedRoute: ActivatedRoute, private hostService: ServerService) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('hostID')) {
                // redirect
                return;
            }
            const hostID = paramMap.get('hostID');
            this.loadedServer = this.hostService.getServer(hostID);
        });
    }

}
