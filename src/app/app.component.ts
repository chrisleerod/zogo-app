import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zogo-app';
  username = "chrisleerod"
  avatar_url = ""
  repoData = {

  }
  fetchedData = { 
    name: '',
    bio:'',
    location: '',
    following: '',
    followers: '',
    public_repos: '',
    login: ''


  }

  constructor() { }

  search = async () => {
    var url = `https://api.github.com/users/${this.username}`;

    // Looks for the user
    let response = await fetch(url);
    let data = await response.json();


    //look for the user's repos
    let repos = await fetch(url + '/repos');
    let reposResp = await repos.json();

    this.fetchedData = data;
    this.avatar_url = data.avatar_url;
    this.repoData = reposResp;

    console.log(reposResp);
    

    return {
      user: data,
      repos: reposResp
    }

  };

  searchInputListener(event:any){
    this.username = event.target.value
  }
}
