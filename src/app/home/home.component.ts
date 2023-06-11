import { Component } from '@angular/core';
import Typewriter from 't-writer.js'
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ContactService} from '../services/contact.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) { 

  this.FormData = this.builder.group({
  Fullname: new FormControl('', [Validators.required]),
  Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
  Comment: new FormControl('', [Validators.required])
  })

  }

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

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
    .subscribe(response => {
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
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
