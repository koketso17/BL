import { Component } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {

    const target = document.querySelector('.tw')

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 100,
      deleteSpeed: 80,

    })

    writer
      .strings(
        400,
        "WE BUILD YOUR DREAM HOUSE...",
        "THE PERFECT HOME TO START A FAMILY.",
      )
      .start()
  }


  toHome() {
    document.getElementById("home").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})

    this.ngOnInit()
  }

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
