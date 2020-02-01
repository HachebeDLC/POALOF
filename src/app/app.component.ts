import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'POALOF';
  arraySongs = ['fille_en_feu', 'summer'];
  playSong = '';

  ngOnInit(): void {
    const song = this.arraySongs[
      Math.floor(Math.random() * this.arraySongs.length)
    ];
    this.playSong = `../assets/audio/${song}.mp3`;
  }
}
