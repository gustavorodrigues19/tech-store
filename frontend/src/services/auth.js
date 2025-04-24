// TODO: mudar http://localhost:3000 para uma variável de ambiente
export const register = async (email, password) => {
  return fetch("http://localhost:3000/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((resp) => resp.json());
};

export const login = async (email, password) => {
  return fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((resp) => resp.json());
};
