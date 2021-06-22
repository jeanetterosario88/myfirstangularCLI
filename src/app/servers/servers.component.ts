import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    //button becomes clickable after 2000 milliseconds
  }


  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created. Name is" + this.serverName;  
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
 //We have to tell TypeScript explicitly that the target of the event is an input element, by writing ...
//(<HTMLInputElement>event.target).value or (event.target as HTMLInputElement).value.
//Otherwise TypeScript will complain, since other HTMLElements don't have a value property, and therefore TypeScript doesn't know if event.target.value is valid syntax.
}

  ngOnInit(): void {
  }

}
