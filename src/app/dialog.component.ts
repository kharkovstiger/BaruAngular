import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})

export class DialogComponent {
  constructor(@Inject(MD_DIALOG_DATA) public dataDialog: any,
              public dialogRef: MdDialogRef<DialogComponent>) { }


}
