import { Button } from "../../elements/Button/Primary/Button";
import { InputForm } from "../../elements/Input/Index";

export const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="username"
        type="text"
        label="Username"
        placeholder="Johnd"
      />
      <InputForm
        name="password"
        type="password"
        label="Password"
        placeholder="**********"
      />
      <InputForm
        name="ConfirmPassword"
        type="ConfirmPassword"
        label="Confirm Password"
        placeholder="**********"
      />
      <Button>Register</Button>
    </form>
  );
};
