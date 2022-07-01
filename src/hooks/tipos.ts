import { ReactNode } from "react";



export interface Diretor {
  id: number;
  name: string;
  job: string;
  profile_path: string;
}

export interface Data {
  dia: string;
  mes: string;
  ano: string;
}

export interface Genero {
  id: number;
  name: string;
}

export interface Filme {
  id: number;
  title: string;
  genres: Array<Genero>;
  release_date: string;
  overview: string;
  tagline: string;
  runtime: string;
  status: string;
  diretor: Diretor;


  backdrop_path: string;
  poster_path: string;
  vote_average: string;

  
  comentarios: Array<Comentario>
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataCadastro: string;
  comentarios?: Array<Comentario>;
  interesses?: Array<Filme>;
  favoritos?: Array<Filme>;
}


export interface Comentario {
  id: number;
  texto: string;
  dataCadastro: string;
  idFilme: number;
  usuario: Usuario;

}

export interface LayoutComponent {
  children: ReactNode;
}


export interface TypeAuthProvider {
  children: ReactNode;
}
