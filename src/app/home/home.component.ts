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



}
