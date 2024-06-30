import { Component, input, output } from '@angular/core';
import { VideoGame } from '../../../../models/video-game';

@Component({
  selector: 'dtbc-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.css'
})
export class TableGamesComponent {
  //@Input() items : VideoGame []
  items = input.required<VideoGame[]>();
  toCreate = output<void>();
  //@Output() toCreate = new EventEmitter<void>()
  title = input<string>('');



  clickToAddNewVideoGame(): void {
    this.toCreate.emit();
  }
}
