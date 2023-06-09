import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() { }

  ngOnInit(): void { }

  toStart() {
    document.getElementById("start").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

  toAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

  toServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

  toContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

}
