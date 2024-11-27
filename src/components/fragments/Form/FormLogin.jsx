import { useState } from "react";
// import { login } from "../../../services/login.service";
import { InputForm } from "../../elements/Input/Index";
import { Button } from "../../elements/Button/Primary/Button";
import { getUsers } from "../../../services/login";

export const FormLogin = () => {
  // const [isLoginFailed, setIsLoginFailed] = useState("");

  // const handleLogin = (event) => {
  //   event.preventDefault();

  //   const data = {
  //     username: event.target.username.value,
  //     password: event.target.password.value,
  //   };

  //   login(data, (status, token) => {
  //     if (status) {
  //       localStorage.setItem("token", token);
  //       window.location.href = "/home";
  //     } else {
  //       setIsLoginFailed(token);
  //     }
  //   });
  // };

  getUsers();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    localStorage.setItem("username :", data.username);
    localStorage.setItem("password :", data.password);

    console.log(data.username);
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        label="Username"
        placeholder="Johnd doang"
      />
      <InputForm
        name="password"
        type="password"
        label="Password"
        placeholder="**********"
      />
      <Button type="submit">Login</Button>
      {/* {isLoginFailed && (
        <p className="mt-2 text-center text-red-600 font-Roboto">
          {isLoginFailed}
        </p>
      )} */}
    </form>
  );
};
