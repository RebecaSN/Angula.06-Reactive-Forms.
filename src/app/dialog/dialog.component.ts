import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  nome:string=''
  sobrenome:string=''
  username:string=''
  cpf:string=''
  telefone:string=''
  endereco:string=''
  complemento:string=''
  senha:string=''
  senha2:string=''
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    ) { }

  ngOnInit(): void {
  }
  cancelar(): void {
    this.dialogRef.close();
  }

}
