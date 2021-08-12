import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';

  color: string = 'green';
  height: number = 0;
  width: number = 0;
  message: string = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
  }

  handleLand(rocketImage) {
    alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle is landing. Landing gear engaged.';
    rocketImage.style.bottom = '0px';
  }

  handleAbortMission(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      rocketImage.style.bottom = '0px';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.positionCheck(this.height, this.width);
    }

    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.positionCheck(this.height, this.width);
    }

    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.positionCheck(this.height, this.width);
    }

    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.positionCheck(this.height, this.width);
    }
  }

  positionCheck(width, height) {
    if (width < 0 || height < 0 || height > 300000 || width > 30000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

}
