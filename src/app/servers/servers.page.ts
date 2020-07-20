import { Component, OnInit } from '@angular/core';
import {ServerModel} from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.page.html',
  styleUrls: ['./servers.page.scss'],
})
export class ServersPage implements OnInit {

  servers: ServerModel[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
