import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  public id?: string;
  public name: string;
  public isAdmin: boolean;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor() {
    this.id = !this.id ? uuidV4() : this.id;
    this.name = "";
    this.isAdmin = false;
    this.email = "";
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
