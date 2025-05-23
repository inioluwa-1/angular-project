import { CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-child',
  imports: [FormsModule, CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  username = '';
  constructor(private _behaviour: BehaviourService) { }

  ngOnInit(): void {
    this._behaviour.username.subscribe((name) => this.username = name);
  }
@Input() msg!: string;
@Input() myCart!: Array<any>;

// showMore: boolean = false
// toggleContent () {
//   this.showMore = !this.showMore;
// }

}
