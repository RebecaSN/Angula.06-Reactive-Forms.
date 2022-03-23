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
  nome: this.fb.control('',[Validators.required,Validators.minLength(3)]),
  sobrenome:this.fb.control('',[Validators.required,Validators.minLength(3)]),
  username:this.fb.control('',[Validators.required,Validators.minLength(5)]),
  cpf:this.fb.control('',[Validators.required,Validators.minLength(11)]),
  endereco:this.fb.control('',[Validators.required]),
  complemento:this.fb.control('',[Validators.required]),
  senha: this.fb.control('',[Validators.required,Validators.minLength(8)]),
  senha2:this.fb.control('',[Validators.required,Validators.minLength(8)]),

   telefone: new FormArray ([
    new FormControl('',[Validators.required,Validators.minLength(11)]),

  ]),

  })

 telefone:FormArray =(this.DadosPessoais.get('telefone') as FormArray)
 
  
 Nome:string='';
 Sobrenome:string='';
 Username:string='';
 CPF:string='';
 Telefone:string='';
 Endereco:string='';
 Complemento:string='';
 Senha:string='';
 Senha2:string='';


 openDialog(): void {
   const Ref = this.dialog.open(DialogComponent) 
   Ref.componentInstance.nome=this.Nome
   Ref.componentInstance.sobrenome=this.Sobrenome
   Ref.componentInstance.username=this.Username
   Ref.componentInstance.cpf=this.CPF
   Ref.componentInstance.telefone=this.Telefone
   Ref.componentInstance.endereco=this.Endereco
   Ref.componentInstance.complemento=this.Complemento
   Ref.componentInstance.senha=this.Senha
   Ref.componentInstance.senha2=this.Senha2
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
