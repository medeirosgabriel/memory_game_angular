import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private playerService: PlayerService, private router: Router){}

  n_players: number = 0
  list: number[] = []

  onSubmit(form: NgForm) {
    let data = form.value
    let regex = /name_\w+/g

    for (let key of Object.keys(data)) {
      let match = key.match(regex);
      if (match) {
        this.playerService.addPlayer(data[match[0]])
      }
    }

    this.router.navigate(['/board']);
  }

  valueChange(value: string) {
    this.n_players = Number(value)
    this.list = [];
    for (let i = 1; i <= this.n_players; i++) {
      this.list.push(i);
    }
  }
}
