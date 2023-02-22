class Admin {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    //TODO: Hash password
    this.password = password;
  }
}

export default Admin;
