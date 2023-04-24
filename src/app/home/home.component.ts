import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  start: boolean = false

  ngOnInit () {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => this.start = true, 1000)
  }

  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    // ...
  }

}
