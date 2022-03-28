import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  public id?: string;
  public name: string;
  public admin: boolean;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor() {
    this.id = !this.id ? uuidV4() : this.id;
    this.name = "";
    this.admin = false;
    this.email = "";
    this.created_at = null;
    this.updated_at = null;
  }
}

export { User };
