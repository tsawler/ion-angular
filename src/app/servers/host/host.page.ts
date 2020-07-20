import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../server.service';
import {ServerModel} from '../server.model';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-host',
    templateUrl: './host.page.html',
    styleUrls: ['./host.page.scss'],
})
export class HostPage implements OnInit {

    loadedServer: ServerModel;

    constructor(
        private activatedRoute: ActivatedRoute,
        private hostService: ServerService,
        private router: Router,
        private alertCtrl: AlertController) {
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

    onDeleteServer() {
        this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'Delete this host?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.hostService.deleteServer(this.loadedServer.id);
                        this.router.navigate(['/servers']);
                    }
                }
            ]
        }).then(alertEl => {
            alertEl.present();
        });

    }

}
