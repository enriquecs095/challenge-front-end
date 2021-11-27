
export interface User {
    idUser:  string;
    password: string;
  }

  export interface NewUser{
    idUser:  string;
    firstName: string,
    lastName:string,
    email:string,
    password: string;

  }

  export interface NewComment{
    user: string;
    comment:string;
  }