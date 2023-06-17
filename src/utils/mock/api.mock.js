import { DATABASE } from './database.mock';

function register({ email, password, passwordConfirmation }) {
  return new Promise((resolve, reject) => {
    const { users } = DATABASE;
    if (users.find(u => u.email === email)) {
      reject('Email já cadastrado');
    }

    if (password !== passwordConfirmation) {
      reject('As senhas devem ser iguais');
    }

    const newUser = { email, senha: password };
    users.push(newUser);
    resolve(newUser);
  });
}

function login(email, senha) {
  return new Promise((resolve, reject) => {
    const { users } = DATABASE;
    const userFound = users.find(u => u.email === email && u.senha === senha);

    if (userFound) {
      delete userFound.senha;
      resolve(userFound);
    }

    reject('Usuário e/ou senha inválido(s)');
  });
}

function searchService(code, name) {
  return new Promise(resolve => {
    const { services } = DATABASE;
    const serviceFound = services.find(s => {
      if (code && name) {
        return s.codigo.includes(code) && s.nome.includes(name);
      }
      if (code) {
        return s.codigo.includes(code);
      }
      return s.nome.includes(name);
    });

    resolve(serviceFound);
  });
}

export { register, login, searchService };
