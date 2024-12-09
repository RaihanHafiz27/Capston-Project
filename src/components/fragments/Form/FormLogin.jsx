import { useState } from "react";
import { InputForm } from "../../elements/Input/Index";
import { Button } from "../../elements/Button/Primary/Button";
import { login } from "../../../services/login";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true); // Mulai loading
    const dataUser = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(dataUser, (status, token) => {
      setIsLoading(false); // Selesai loading
      if (status) {
        localStorage.setItem("token", token);
        navigate("/products");
      } else {
        setIsLoginFailed(token);
      }
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        label="Username"
        placeholder="username"
      />
      <div className="relative">
        <InputForm
          name="password"
          type={isPasswordVisible ? "text" : "password"}
          label="Password"
          placeholder="**********"
        />
        <button
          type="button"
          className="absolute right-0 top-3"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <img src="/images/show.png" alt="icon" className="w-5 h-5" />
          ) : (
            <img src="/images/hide.png" alt="icon" className="w-5 h-5" />
          )}
        </button>
      </div>

      <Button type="submit">{isLoading ? "Loading...." : "Signin"}</Button>
      {isLoginFailed && (
        <p className="mt-2 text-center text-red-600 font-Roboto">
          {isLoginFailed}
        </p>
      )}
    </form>
  );
};
