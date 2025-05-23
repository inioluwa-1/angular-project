import { Component, inject } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate.pipe';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-pipe',
  imports: [CommonModule, TruncatePipe, MatDialogModule, ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  // data = inject(MAT_DIALOG_DATA)

  dialog = inject(MatDialog);

  // openDialog() {
  //   this.dialog.open(PipeComponent);
  // }


  openDialog(enterAnimationDuration:string, exitAnimationDuration:string, message:string){
    this.dialog.open(DialogComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        dialog_message: message
      }
    });
  }
  
  constructor(
    private _postService: PostService
  ){}

  posts:any = [];
  ngOnInit() : void{
    this._postService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
