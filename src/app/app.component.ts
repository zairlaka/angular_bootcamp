import { Component } from '@angular/core';

//here we are defining decorator a component decorator to be specific
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'noname';

  serverElements = [{type: "blueprint", name: "default this server name", content: "default server content here", userName: "zair"}];

  onServerAdded(serverData: {serverName: string, serverContent: string, serverUser: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      userName: serverData.serverUser
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverUser_c137: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      userName: blueprintData.serverUser_c137
    });
    
  }


  onChangeFirst(){
    this.serverElements[0].userName = "Pro"; // will give error if you empty that array 
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  weatherData = [
    {
      name: "San Jose",
      temperature: "36º F",
      wind: "31Kmph",
      humidity: "66%",
    },
    {
      name: "Seattle",
      temperature: "30º F",
      wind: "4Kmph",
      humidity: "9%",
    },
    {
      name: "New York",
      temperature: "20º F",
      wind: "8Kmph",
      humidity: "61%",
    },
    {
      name: "Chicago",
      temperature: "27º F",
      wind: "35Kmph",
      humidity: "2%",
    },
    {
      name: "Atlanta",
      temperature: "22º F",
      wind: "25Kmph",
      humidity: "5%",
    },
    {
      name: "Austin",
      temperature: "25º F",
      wind: "1Kmph",
      humidity: "5%",
    },
    {
      name: "Denver",
      temperature: "30º F",
      wind: "8Kmph",
      humidity: "48%",
    },
  ];

}

// what we did
// create a class
// use component decorator to tell angular that this is a component
// import component module from angular/core to else component is undefined keyword
