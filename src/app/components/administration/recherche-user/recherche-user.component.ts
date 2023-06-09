import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-recherche-user',
  templateUrl: './recherche-user.component.html',
  styleUrls: ['./recherche-user.component.scss']
})
export class RechercheUserComponent implements OnInit {
  
  constructor() { }
  @Output() userid=new EventEmitter<string>();
  newuser:User={
    id: '',
    nom: '',
    prenom: '',
    email: '',
    login: '',
    roles: ''
  }
  myform = new FormGroup({
    nom : new FormControl('', []),
    roles :new FormControl('', []),
    prenom :new FormControl('', [])
});
  ngOnInit(): void {
  }
  valide(){
   this.newuser= this.myform.value
  }
  getuserdetails(id){
    this.userid.emit(id)
  }
}
