import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome_user: string;
  username: string;
  num_likes:integer;
  num_unlikes:integer;
  status_like: boolean;
  status_unlike:boolean;
  num_compartilhamento:integer;
  texto:string;
  anexo:string;
  episodio:integer;
  status_spoiler:boolean;



  dadosPost: object[]= [{
    nome_user: 'Gabriela Mattos',
    username: '@gabimattos',
    num_likes:49,
    num_unlikes:21,
    status_like: false,
    status_unlike: false,
    num_compartilhamento:23,
    texto:'amo muito essa série',
    anexo:'foto',
    episodio:1,
    status_spoiler:true,

  },{
    nome_user: 'Gabriele Jandres',
    username: '@gabijandres',
    num_likes:34,
    num_unlikes:21,
    status_like: false,
    status_unlike: false,
    num_compartilhamento:23,
    texto:'amo muito essa série',
    anexo:'foto',
    episodio:1,
    status_spoiler:true,

  },
  {
    nome_user: 'Milton Machado',
    username: '@miltonmachado',
    num_likes:57,
    num_unlikes:21,
    status_like: false,
    status_unlike: false,
    num_compartilhamento:23,
    texto:'amo muito essa série',
    anexo:'foto',
    episodio:1,
    status_spoiler:true,

  }];

  constructor() {}


    like(Post: any): void {

      if(Post.status_like){
        Post.num_likes--;
      }
      else {
        Post.num_likes++;
        if(Post.status_unlike==true){
          Post.status_unlike=!Post.status_unlike;
          Post.num_unlikes--;
        }
    }


    Post.status_like=!Post.status_like;

    }

    unlike(Post: any): void {

      if(Post.status_unlike){
        Post.num_unlikes--;
      }
      else {
        Post.num_unlikes++;
        if(Post.status_like==true){
          Post.status_like=!Post.status_like;
          Post.num_likes--;

        }
    }


    Post.status_unlike=!Post.status_unlike;

    }

    condition(){
      if(Post.status_like==true){
        Post.status_unlike==false;
      }
      else if(Post.status_unlike==true){
        Post.status_like==false;
      }
    }



}
