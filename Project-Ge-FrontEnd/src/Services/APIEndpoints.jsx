import http from "./httpService";

export function getJewels() {
  return http.get("http://localhost:3000/api/jewels/").then((res) => {
    return res.data;
  });
}

export function getStones() {
  return http.get("http://localhost:3000/api/stones/").then((res) => {
    return res.data;
  });
}

export function getMetals() {
  return http.get("http://localhost:3000/api/metals/").then((res) => {
    return res.data;
  });
}

export function getPieces() {
  return http.get("http://localhost:3000/api/pieces/").then((res) => {
    return res.data;
  });
}

export function getTypes() {
  return http.get("http://localhost:3000/api/types/").then((res) => {
    return res.data;
  });
}

export function postJewels(newJewel, userToken) {
  return http
    .post("http://localhost:3000/api/jewels/add", newJewel, { headers: { 'x-auth-token': userToken, 'Content-type': 'application/json' } })
    .then((res) => {
      console.log(res, "<=== Receive")
      return res.data;
    });
}

export function registerUser(user) {
  return http.post("http://localhost:3000/api/users/", user).then((res) => {
    return res;
  });
}

export function login(email, password) {
  return http.post("http://localhost:3000/api/auth/", { email, password });
}
