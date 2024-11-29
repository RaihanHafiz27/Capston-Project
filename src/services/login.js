import { jwtDecode } from "jwt-decode";

export const login = async (dataUser, callback) => {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("username or password is incorrect");
    }
    const data = await response.json();
    console.log(data);
    if (callback) {
      callback(true, data.token);
    }
    return data.token;
  } catch (error) {
    callback(false, error.message);
    console.log(error.message);
  }
};

// export const dataUser = async () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     throw new Error("Token tidak ditemukan");
//   }

//   const decoded = jwtDecode(token);
//   const userId = decoded.sub;

//   try {
//     const res = await fetch("https://fakestoreapi.com/users");
//     if (!res.ok) {
//       throw new Error("Gagal mengambil data pengguna");
//     }
//     const users = await res.json();
//     const user = users.find((user) => user.id === userId);

//     if (!user) {
//       throw new Error("User tidak ditemukan");
//     }
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };
