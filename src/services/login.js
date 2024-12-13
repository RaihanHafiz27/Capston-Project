import { jwtDecode } from "jwt-decode";

export const login = async (dataUser, callback) => {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser),
    });
    if (!response.ok) {
      throw new Error("username or password is incorrect");
    }
    const data = await response.json();
    if (callback) {
      callback(true, data.token);
    }
    return data.token;
  } catch (error) {
    callback(false, error.message);
  }
};

export const dataUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error();
  }
  const decode = jwtDecode(token);

  const userId = decode.sub;

  try {
    const res = await fetch("https://fakestoreapi.com/users");
    const users = await res.json();
    const user = users.find((user) => user.id === userId);

    if (!user) {
      throw new Error("user tidak ditemukan");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
