import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula_3.0';
  
  constructor(
    public dialog: MatDialog,
    public fb:FormBuilder
    ){}

   DadosPessoais:FormGroup = this.fb.group({
   nome: this.fb.control(''),
   sobrenome:this.fb.control(''),
   username:this.fb.control(''),
   cpf:this.fb.control(''),
   endereco:this.fb.control(''),
   complemento:this.fb.control(''),
   senha: this.fb.control(''),
   senha2:this.fb.control(''),

   telefone: new FormArray ([
    new FormControl('',[Validators.required,Validators.minLength(11)]),

  ]),

  })

 telefone:FormArray = this.DadosPessoais.get('telefone') as FormArray
 
  
 Nome:FormControl=new FormControl('',[Validators.required,Validators.minLength(3)])
 Sobrenome:FormControl=new FormControl('',[Validators.required,Validators.minLength(3)])
 Username:FormControl=new FormControl('',[Validators.required,Validators.minLength(5)])
 CPF:FormControl=new FormControl('',[Validators.required,Validators.minLength(11)])
 Telefone:FormControl=new FormControl('',[Validators.required,Validators.minLength(11)])
 Endereco:FormControl=new FormControl('',[Validators.required])
 Complemento:FormControl=new FormControl('',[Validators.required])
 Senha:FormControl=new FormControl('',[Validators.required,Validators.minLength(8)])
 Senha2:FormControl=new FormControl('',[Validators.required,Validators.minLength(8)])


 openDialog(): void {
   const Ref = this.dialog.open(DialogComponent) 
   Ref.componentInstance.nome=this.Nome.value
   Ref.componentInstance.sobrenome=this.Sobrenome.value
   Ref.componentInstance.username=this.Username.value
   Ref.componentInstance.cpf=this.CPF.value
   Ref.componentInstance.telefone=this.Telefone.value
   Ref.componentInstance.endereco=this.Endereco.value
   Ref.componentInstance.complemento=this.Complemento.value
   Ref.componentInstance.senha=this.Senha.value
   Ref.componentInstance.senha2=this.Senha2.value
 }
  

  NovoContato():void{
  (this.DadosPessoais.get('telefone') as FormArray).push(new FormControl('',[Validators.required]))
  }
  DeletarContato(i:any):void{
    (this.DadosPessoais.get('telefone') as FormArray).removeAt(i)
   
  }
  
   
  submit():void{
    console.log(`
    Nome= ${this.DadosPessoais.controls['nome'].value}
    Sobrenome= ${this.DadosPessoais.controls['sobrenome'].value}
    Username=  ${this.DadosPessoais.controls['username'].value}
    CPF= ${this.DadosPessoais.controls['cpf'].value}
    Telefone= ${this.DadosPessoais.controls['telefone'].value}
    Endereco= ${this.DadosPessoais.controls['endereco'].value}
    Complemento= ${this.DadosPessoais.controls['complemento'].value}
    Senha= ${this.DadosPessoais.controls['senha'].value}
    
    `)
 
  }
}
