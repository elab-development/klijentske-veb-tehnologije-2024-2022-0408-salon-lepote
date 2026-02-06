export class User {
  public id: number;
  public name: string;
  public email: string;
  public password: string;

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const existingUsers: User[] = [
  {
    id: 1,
    name: 'Petar Petrović',
    email: 'petar@mail.com',
    password: 'password',
  },
  {
    id: 2,
    name: 'Jana Grigorjev',
    email: 'lucija000111@gmail.com',
    password: 'password',
  },
  {
    id: 3,
    name: 'Jelena Djelic',
    email: 'djelicjeka@gmail.com',
    password: 'password',
  },
];

export const checkIfUserExists = (email: string) => {
  return existingUsers.find((user) => user.email === email);
};

export const checkIfUserExistsByUsername = (name: string) => {
  return existingUsers.find((user) => user.name === name);
};

export const checkUsersPassword = (user: User, password: string) => {
  return user.password === password;
};

export const loginUser = (username: string) => {
  localStorage.setItem('user', username);
};

export const logoutUser = () => {
  localStorage.removeItem('user');
};
