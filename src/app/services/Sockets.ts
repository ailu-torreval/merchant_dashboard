import { Injectable, OnInit } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';


export class SocketNameSpace extends Socket {
    constructor(socketConfig: SocketIoConfig) {
        super(socketConfig);
    }
}


@Injectable()
export class Sockets implements OnInit {

    userSocket!: SocketNameSpace | null;
    //original:
    // userSocket: SocketNameSpace;

    serverUrl = 'http://165.22.69.190/';

    constructor(
        public socket: Socket,

    ) {
    }

    ngOnInit() {
    }


    //SOCKET IO
    async connectToSocket(clientID: string) {

        await this.disConnectSocket();

        // Initialize the socket with the correct namespace
        this.userSocket = new SocketNameSpace({
            url: this.serverUrl, 
            options: {
                query: { clientID: clientID },
            },
        });

        // Set the correct namespace 
        this.userSocket.ioSocket.nsp = `/food1`;
        // this.userSocket.ioSocket.nsp = '/' + clientID;

        // console.log('Connecting to Socket with Namespace:', this.userSocket.ioSocket.nsp);

        // return;

        // Connect to the socket
        this.userSocket.connect();

        // Listen to the 'connect' event to determine when the socket is connected
        this.userSocket.ioSocket.on('connect', () => {
            console.log('Socket connected successfully.');

            // Listen to the 'food-data' event
            this.userSocket?.fromEvent('food-data').subscribe(async data => {

                console.log('RECEIVED-SOCKET:', data);

                // i have to change all this
                
            });
            this.userSocket?.fromEvent('order-data').subscribe(async (data:any) => {
                console.log('RECEIVED-SOCKET:', data.order);
                console.log('RECEIVED-SOCKET:', data);
            });
        });
    }

    sendOrderToUser(userId:string, status:number) {
        this.userSocket?.emit('send-order-status', {userId: userId, status:status});
    }




    async disConnectSocket() {
        // disconnect and remove all previous listeners first
        if (this.userSocket) {
            try {
                await this.userSocket.disconnect();
            } catch (error) {
                console.log(error);
            }
            try {
                await this.socket.disconnect();
            } catch (error) {
                console.log(error);
            }
            try {
                await this.userSocket.removeAllListeners();
            } catch (error) {
                console.log(error);
            }
        }

        this.userSocket = null;
    }


    ngOnDestroy() {
        this.disConnectSocket();
    }


}
